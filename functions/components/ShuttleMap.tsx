// SPDX-License-Identifier: Apache-2.0
// Copyright (C) 2024, Tiny Tapeout LTD

import React from 'react';

export function ShuttleMap({
  muxAddress,
  shuttleMapSvg,
}: {
  shuttleMapSvg: string;
  muxAddress: number;
}) {
  const svg = shuttleMapSvg
    .replaceAll('%MUX_ADDRESS%', muxAddress.toString())
    .replaceAll('/* %EXTRA_STYLES% */', 'rect.tile.project {fill: #e9e;}');
  return <div style={{ textAlign: 'center' }} dangerouslySetInnerHTML={{ __html: svg }} />;
}
