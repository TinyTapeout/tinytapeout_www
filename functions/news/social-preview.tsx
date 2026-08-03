// SPDX-License-Identifier: Apache-2.0
// Copyright (C) 2026, Tiny Tapeout LTD
// Author: Kristaps Jurkans

import { ImageResponse } from '@cloudflare/pages-plugin-vercel-og/api';
import React from 'react';
import { isSkipCache } from '../utils/cache.js';

const cache = caches.default;

export const onRequest: PagesFunction<Env> = async (context) => {
  const cached = await cache.match(context.request);
  if (cached && !isSkipCache(context)) {
    return cached;
  }

  // see https://github.com/TinyTapeout/tt-datasheet-artwork/tree/main/artwork
  // future artwork additions aren't guaranteed to have correct dimensions, so we'll just weed out them now
  const availablePOCAImages = [
    '01-A',
    '01-B',
    '01-C',
    '01-D',
    '01-E',
    '01-F',
    '01-G',
    '01-H',
    '01-I',
  ];

  // select a new image every month
  const currentMonth = new Date().getMonth();
  const selectedImage = availablePOCAImages[currentMonth % availablePOCAImages.length];

  return new ImageResponse(
    (
      <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center' }}>
        <img
          src={`https://raw.githubusercontent.com/TinyTapeout/tt-datasheet-artwork/refs/heads/main/artwork/TT-POCA-${selectedImage}.jpg`}
          style={{
            width: '100vw',
            objectFit: 'contain',
            transform: 'translate(0, -100px)',
          }}
        />
      </div>
    ),
  );
};
