// SPDX-License-Identifier: Apache-2.0
// Copyright (C) 2024, Tiny Tapeout LTD
import React from 'react';

import { renderToString } from 'react-dom/server';
import { SiliconProvenProjects } from '../components/SiliconProvenProjects.js';
import { isSkipCache } from '../utils/cache.js';
import { fetchTextAsset } from '../utils/context.js';
import { notFound } from '../utils/notFound.js';
import { loadAllProjectFeedback } from '../model/feedback.js';

const cache = caches.default;

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const cached = await cache.match(context.request);
  if (cached && !isSkipCache(context)) {
    return cached;
  }

  // Not a legacy URL - fetch the project data

  const templateText = await fetchTextAsset(
    context,
    'https://tinytapeout.com/runs/silicon-proven/',
  );
  if (!templateText) {
    return notFound(context);
  }

  const feedback = await loadAllProjectFeedback();
  if (!feedback) {
    return notFound(context);
  }

  const response = new Response(
    templateText.replaceAll(
      '{{CONTENT}}',
      renderToString(<SiliconProvenProjects feedback={feedback} />),
    ),
    {
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'public, max-age=600',
      },
    },
  );

  context.waitUntil(cache.put(context.request, response.clone()));
  return response;
};
