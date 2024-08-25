// SPDX-License-Identifier: Apache-2.0
// Copyright (C) 2024, Tiny Tapeout LTD
// Author: Uri Shaked

import { ImageResponse } from '@cloudflare/pages-plugin-vercel-og/api';
import React from 'react';
import { loadProjectInfo } from '../../../model/project.js';
import { loadShuttleIndex } from '../../../model/shuttle.js';

const cache = caches.default;

export const onRequest: PagesFunction<Env> = async (context) => {
  const cached = await cache.match(context.request);
  if (cached) {
    return cached;
  }

  const width = 1200;
  const height = 630;
  const footerHeight = 98 + 16 * 2;
  const contentHeight = height - footerHeight;

  const { shuttle, project } = context.params as { shuttle: string; project: string };
  const shuttleInfo = await loadShuttleIndex(shuttle, []);
  const projectInfo = await loadProjectInfo(shuttle, project);
  if (!projectInfo || !shuttleInfo) {
    const notFound = await context.env.ASSETS.fetch('https://tinytapeout.com/404');
    return notFound;
  }

  return new ImageResponse(
    (
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
        <div
          style={{
            backgroundColor: 'white',
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <img
            src={`https://raw.githubusercontent.com/TinyTapeout/tinytapeout-project-renders/main/shuttles/${shuttle}/${project}/render.png`}
            style={{
              position: 'absolute',
              width: '100vw',
              height: contentHeight,
              objectFit: 'contain',
            }}
          />
        </div>
        <div
          style={{
            background: '#e2417f',
            color: 'white',
            display: 'flex',
            width: '100vw',
            height: footerHeight,
            padding: 16,
            borderTop: 'solid white 1px',
          }}
        >
          <img src="https://www.tinytapeout.com/ttlogo_400.png" width={100} height={98} />
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 32 }}>
            <h1 style={{ fontSize: 32, marginTop: 8, marginBottom: 0, fontWeight: 'bold' }}>
              {projectInfo.title}
            </h1>
            <h2 style={{ fontSize: 24, margin: 0, flexGrow: 1 }}>
              by {projectInfo.author} / {shuttleInfo.name}
            </h2>
          </div>
        </div>
      </div>
    ),
    { width, height },
  );
};
