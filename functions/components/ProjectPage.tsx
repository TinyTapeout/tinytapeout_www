// SPDX-License-Identifier: Apache-2.0
// Copyright (C) 2024, Tiny Tapeout LTD

import MarkdownIt from 'markdown-it';
import React from 'react';
import { markdownHeadingLimiter, markdownImagePathTransformer } from '../model/project.js';
import { scanchainShuttles, type IShuttleIndexProject } from '../model/shuttle.js';
import { AnalogPinout } from './AnalogPinout.js';
import { PinoutTable } from './PinoutTable.js';
import { ScanchainSwitches } from './ScanchainSwitches.js';
import { ShuttleMap } from './ShuttleMap.js';

export interface IProjectPropProps {
  shuttle: string;
  project: IShuttleIndexProject;
  docs: string;
  shuttleMapSvg: string | null;
}

export function ProjectPage({ shuttle, project, docs, shuttleMapSvg }: IProjectPropProps) {
  const md = MarkdownIt();

  // Add base URL to image paths
  md.renderer.rules['image'] = markdownImagePathTransformer(shuttle, project.macro);
  markdownHeadingLimiter(md, 3);

  const docsWithoutComments = docs.replace(/<!--[\s\S]*?-->/g, '');
  const projectDocs = md.render(docsWithoutComments);

  const hasAnalogPins = project.analog_pins?.length || false;
  const scanchain = scanchainShuttles.includes(shuttle);

  return (
    <div>
      <h2>
        {project.address} : {project.title}
      </h2>

      {scanchain && <ScanchainSwitches address={project.address} />}

      <ul>
        <li>Author: {project.author}</li>
        <li>Description: {project.description}</li>
        <li>
          <a href={project.repo} target="_blank" rel="noopener">
            GitHub repository
          </a>
        </li>
        {project.macro.startsWith('tt_um_wokwi_') && (
          <li>
            <a
              href={`https://wokwi.com/projects/${project.macro.replace('tt_um_wokwi_', '')}`}
              target="_blank"
              rel="noopener"
            >
              View in Wokwi
            </a>
          </li>
        )}
        <li>Clock: {project.clock_hz} Hz</li>
      </ul>

      <div dangerouslySetInnerHTML={{ __html: projectDocs }} />

      <h3>IO</h3>
      <PinoutTable pins={project.pinout} />

      {hasAnalogPins && (
        <>
          <h3>Analog pins</h3>
          <AnalogPinout project={project} />
        </>
      )}

      {shuttleMapSvg && (
        <>
          <h3>Chip location</h3>
          <ShuttleMap shuttleMapSvg={shuttleMapSvg} muxAddress={project.address} />
        </>
      )}
    </div>
  );
}
