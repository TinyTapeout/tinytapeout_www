// SPDX-License-Identifier: Apache-2.0
// Copyright (C) 2026, Tiny Tapeout LTD

import React from 'react';
import { IShuttleIndexProject } from '../model/shuttle.js';

function compareShuttleProjects(
  a: Pick<IShuttleIndexProject, any>,
  b: Pick<IShuttleIndexProject, any>,
): number {
  const bothAreSubtiles = a.type == 'subtile' && b.type == 'subtile';

  // projects are subtiles and of the same group
  if (bothAreSubtiles && a.address == b.address) {
    if (a.subtile_addr < b.subtile_addr) {
      return -1;
    } else {
      return 1;
    }
    // for everything else we only care about the address
  } else {
    if (a.address < b.address) {
      return -1;
    } else {
      return 1;
    }
  }
}

function formatShuttleTable({
  projects,
}: {
  projects: Pick<IShuttleIndexProject, any>[];
}): React.ReactNode[] {
  var projectEntries: React.ReactNode[] = [];
  var sortedProjects = projects.sort(compareShuttleProjects);

  sortedProjects.forEach((project) => {
    if (project.type == 'group') return;
    projectEntries.push(
      <React.Fragment key={project.macro}>
        <tr>
          <td>
            {project.address}
            {project.type == 'subtile' ? `/${project.subtile_addr}` : null}
          </td>
          <td>
            <a href={project.macro}>{project.title}</a>
          </td>
          <td>{project.author}</td>
          <td>{project.description}</td>
        </tr>
      </React.Fragment>,
    );
  });

  return projectEntries;
}

export function ShuttleProjectTable({ projects }: { projects: Pick<IShuttleIndexProject, any>[] }) {
  if (projects.length == 0) {
    return <p>There are no projects... so far.</p>;
  }

  var projectEntries: React.ReactNode[] = formatShuttleTable({ projects });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Address</th>
            <th>Title</th>
            <th>Author</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{projectEntries}</tbody>
      </table>
    </div>
  );
}
