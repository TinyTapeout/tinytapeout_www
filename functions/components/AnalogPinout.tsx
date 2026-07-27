// SPDX-License-Identifier: Apache-2.0
// Copyright (C) 2024, Tiny Tapeout LTD

import React from 'react';
import { IShuttleIndexProject } from '../model/shuttle.js';

export function AnalogPinout({
  shuttle,
  project,
}: {
  shuttle: string;
  project: IShuttleIndexProject;
}) {
  const rows: React.ReactNode[] = [];

  // shuttles which do not come with the ETR demo board
  // using this as a way of differenciating which pinout should be displayed
  const nonETRShuttles = ['tt01', 'tt02', 'tt03', 'tt04', 'tt05', 'tt06', 'tt07', 'tt08'];

  const letterLabels = ['C', 'D', 'F', 'G', 'J', 'K', 'X', 'W', 'U', 'T', 'R', 'Q'];

  const breakoutPin = (analog: number) => {
    if (shuttle in nonETRShuttles) {
      return analog < 6 ? 'A' + analog : 'B' + (analog - 6);
    } else {
      return letterLabels[analog] ?? '';
    }
  };

  for (const [ua, analog] of project.analog_pins.entries()) {
    rows.push(
      <tr key={ua}>
        <td>{ua}</td>
        <td>{breakoutPin(analog)}</td>
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
