// SPDX-License-Identifier: Apache-2.0
// Copyright (C) 2024, Tiny Tapeout LTD

import React from 'react';
import { IShuttleIndexProject } from '../model/shuttle.js';

export function PinoutTableScanchain({ pins }: { pins: IShuttleIndexProject['pinout'] }) {
  const rows: React.ReactNode[] = [];

  for (let i = 0; i < 8; i++) {
    rows.push(
      <tr key={i}>
        <td>{i}</td>
        <td>{pins[`io_in[${i}]`]}</td>
        <td>{pins[`io_out[${i}]`]}</td>
      </tr>,
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Input</th>
          <th>Output</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
