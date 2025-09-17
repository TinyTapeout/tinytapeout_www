// SPDX-License-Identifier: Apache-2.0
// Copyright (C) 2024, Tiny Tapeout LTD

import MarkdownIt from 'markdown-it';
import React from 'react';
import { IProjectFeedbackList, summarizeFeedback } from '../model/feedback.js';
import { markdownHeadingLimiter, markdownImagePathTransformer } from '../model/project.js';
import { scanchainShuttles, type IShuttleIndexProject } from '../model/shuttle.js';
import { AnalogPinout } from './AnalogPinout.js';
import { PinoutTable } from './PinoutTable.js';
import { ProjectFeedbackList } from './ProjectFeedbackList.js';
import { ScanchainSwitches } from './ScanchainSwitches.js';
import { ShuttleMap } from './ShuttleMap.js';

export interface IProjectPropProps {
  shuttle: string;
  project: IShuttleIndexProject;
  docs: string;
  feedback: IProjectFeedbackList | null;
  shuttleMapSvg: string | null;
}

export function ProjectPage({
  shuttle,
  project,
  docs,
  feedback,
  shuttleMapSvg,
}: IProjectPropProps) {
  const md = MarkdownIt();

  // Add base URL to image paths
  md.renderer.rules['image'] = markdownImagePathTransformer(shuttle, project.macro);
  markdownHeadingLimiter(md, 3);

  const docsWithoutComments = docs.replace(/<!--[\s\S]*?-->/g, '');
  const projectDocs = md.render(docsWithoutComments);

  const hasAnalogPins = project.analog_pins?.length || false;
  const scanchain = scanchainShuttles.includes(shuttle);

  const gdsMacro = project.type === 'subtile' ? project.subtile_group : project.macro;

  const renderUrl = `https://raw.githubusercontent.com/TinyTapeout/tinytapeout-project-renders/main/shuttles/${shuttle}/${gdsMacro}/render.png`;

  const oasUrl = `https://shuttle-assets.tinytapeout.com/${shuttle}/${gdsMacro}/${gdsMacro}.oas`;
  const threeDViewerParams = new URLSearchParams({
    model: oasUrl,
    process: shuttle.startsWith('ttihp') ? 'SG13G2' : 'SKY130',
  });
  const threeDViewerUrl = `https://gds-viewer.tinytapeout.com/?${threeDViewerParams.toString()}`;

  return (
    <div>
      <h2>
        {project.address} : {project.title}
      </h2>

      <img
        src={renderUrl}
        alt="Design render"
        style={{ maxWidth: '128px', float: 'right', clear: 'right', margin: '0 0 1em 0' }}
      />

      {scanchain && <ScanchainSwitches address={project.address} />}

      <ul>
        <li>Author: {project.author}</li>
        <li>Description: {project.description}</li>
        <li>
          <a href={project.repo} target="_blank" rel="noopener">
            GitHub repository
          </a>
        </li>
        <li>
          <a href={threeDViewerUrl} target="_blank" rel="noopener">
            Open in 3D viewer
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
        {feedback?.length ? (
          <li>
            <a href="#feedback">Feedback</a>: {summarizeFeedback(feedback)}{' '}
          </li>
        ) : null}
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

      {feedback?.length ? (
        <>
          <h3 id="feedback">User feedback</h3>
          <ProjectFeedbackList feedback={feedback} />
        </>
      ) : null}

      {shuttleMapSvg && (
        <>
          <h3>Chip location</h3>
          <ShuttleMap shuttleMapSvg={shuttleMapSvg} muxAddress={project.address} />
        </>
      )}
    </div>
  );
}
