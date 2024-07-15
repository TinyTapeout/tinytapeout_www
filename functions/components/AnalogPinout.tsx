// SPDX-License-Identifier: Apache-2.0
// Copyright (C) 2024, Tiny Tapeout LTD

import React from 'react';
import { IShuttleIndexProject } from '../model/shuttle.js';

export function AnalogPinout({ project }: { project: IShuttleIndexProject }) {
  const rows: React.ReactNode[] = [];

  for (const [ua, analog] of project.analog_pins.entries()) {
    rows.push(
      <tr key={ua}>
        <td>{ua}</td>
        <td>{analog}</td>
        <td>{project.pinout[`ua[${ua}]`]}</td>
      </tr>,
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>
            <code>ua</code>
          </th>
          <th>
            <code>analog</code>
          </th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
