// SPDX-License-Identifier: Apache-2.0
// Copyright (C) 2024, Tiny Tapeout LTD

import React from 'react';
import { IShuttleIndexProject } from '../model/shuttle.js';
import { PinoutTableScanchain } from './PinoutTableScanchain.js';

export function PinoutTable({ pins }: { pins: IShuttleIndexProject['pinout'] }) {
  const rows: React.ReactNode[] = [];

  if (pins['io_in[0]']) {
    // Scanchain (tt02/tt03) pinout
    return <PinoutTableScanchain pins={pins} />;
  }

  for (let i = 0; i < 8; i++) {
    rows.push(
      <tr key={i}>
        <td>{i}</td>
        <td>{pins[`ui[${i}]`]}</td>
        <td>{pins[`uo[${i}]`]}</td>
        <td>{pins[`uio[${i}]`]}</td>
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
          <th>Bidirectional</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
