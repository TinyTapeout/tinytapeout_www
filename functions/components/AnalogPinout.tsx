// SPDX-License-Identifier: Apache-2.0
// Copyright (C) 2024, Tiny Tapeout LTD

import React from 'react';
import { type IProjectInfo } from '../model/project.js';

export function AnalogPinout({ project }: { project: IProjectInfo }) {
  const rows: React.ReactNode[] = [];

  for (const [ua, analog] of project.analog_pins.entries()) {
    rows.push(
      <tr key={ua}>
        <td>{ua}</td>
        <td>{project.analog_pin_labels[ua]}</td>
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
          <th>PCB Pin</th>
          <th>Internal index</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
