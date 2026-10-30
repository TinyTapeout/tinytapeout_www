// SPDX-License-Identifier: Apache-2.0
// Copyright (C) 2026, Tiny Tapeout LTD

import React from 'react';
import { IShuttleIndex } from '../model/shuttle.js';
import { ShuttleMap } from './ShuttleMap.js';
import { ShuttleProjectTable } from './ShuttleProjectTable.js';

export interface IShuttlePageProps {
  shuttle: string;
  shuttleInfo: IShuttleIndex;
  shuttleSVG: string;
}

export function ShuttlePage({ shuttle, shuttleInfo, shuttleSVG }: IShuttlePageProps) {
  // get the repo name for datasheet and index
  const githubRepoSlugRE = /TinyTapeout\/(.+)/im;
  const matches = shuttleInfo.repo.match(githubRepoSlugRE);

  var datasheetLink = '#';
  var shuttleIndexLink = '#';
  if (matches) {
    const githubRepoSlug = matches[1];
    datasheetLink = `https://tinytapeout.github.io/${githubRepoSlug}/datasheet.pdf`;
    shuttleIndexLink = `https://tinytapeout.github.io/${githubRepoSlug}/shuttle_index.json`;
  }

  return (
    <div>
      <h2>Design details</h2>
      <ul>
        <li>
          <a href={shuttleInfo.repo}>GitHub repository</a>
        </li>
        <li>
          <a href={datasheetLink}>PDF datasheet</a>
        </li>
        <li>
          <a href={shuttleIndexLink}>Shuttle index (JSON)</a>
        </li>
      </ul>
      <h2>Chip map</h2>
      <ShuttleMap shuttleMapSvg={shuttleSVG} />
      <h2>All projects</h2>
      <ShuttleProjectTable projects={shuttleInfo.projects} />
    </div>
  );
}
