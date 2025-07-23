// SPDX-License-Identifier: Apache-2.0
// Copyright (C) 2024, Tiny Tapeout LTD

import { renderToString } from 'react-dom/server';
import { ProjectPage } from '../../../components/ProjectPage.js';
import { loadProjectFeedback } from '../../../model/feedback.js';
import { loadProjectDocs, loadProjectInfo } from '../../../model/project.js';
import { loadShuttleIndex, loadShuttleMapSvg } from '../../../model/shuttle.js';
import { isSkipCache } from '../../../utils/cache.js';
import { fetchTextAsset } from '../../../utils/context.js';
import { notFound } from '../../../utils/notFound.js';
import { getBaseURL } from '../../../utils/urls.js';

const cache = caches.default;

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const cached = await cache.match(context.request);
  if (cached && !isSkipCache(context)) {
    return cached;
  }

  const { shuttle, project } = context.params as { shuttle: string; project: string };

  const shuttleIndex = await loadShuttleIndex(shuttle, ['macro']);
  if (!shuttleIndex) {
    return notFound(context);
  }

  // Check for legacy project URLs, which are always 3 or 4 digits
  const legacyUrlMatch = project.match(/^1?\d{3}$/);
  if (legacyUrlMatch) {
    const projectInfo = shuttleIndex.projects.find((p) => p.address === parseInt(project, 10));
    if (!projectInfo) {
      return notFound(context);
    }

    return new Response(null, {
      status: 301,
      headers: {
        Location: `/chips/${shuttle}/${projectInfo.macro}`,
      },
    });
  }

  // Not a legacy URL - fetch the project data
  const [projectInfo, projectDocs, projectFeedback] = await Promise.all([
    loadProjectInfo(shuttle, project),
    loadProjectDocs(shuttle, project),
    loadProjectFeedback(shuttle, project),
  ]);

  if (!projectInfo || projectDocs == null) {
    return notFound(context);
  }

  const templateText = await fetchTextAsset(
    context,
    'https://tinytapeout.com/chips/__ttreplace_shuttle_id__/__ttreplace_project_id__',
  );
  if (!templateText) {
    return notFound(context);
  }

  const shuttleMapSvg = await loadShuttleMapSvg(context, shuttle);
  const title = `${projectInfo.address} ${projectInfo.title}`;

  const previewImageUrl = getBaseURL(context) + `/chips/${shuttle}/${project}/social-preview`;

  const response = new Response(
    templateText
      .replace(
        '</title>',
        [
          `</title>`,
          `<meta property="og:image" content="${previewImageUrl}" />`,
          `<meta property="og:image:width" content="1200" />`,
          `<meta property="og:image:height" content="630" />`,
          '<meta name="twitter:card" content="summary_large_image"/>',
        ].join('\n'),
      )
      .replaceAll('__ttreplace_shuttle_id__', shuttle)
      .replaceAll('__ttreplace_project_id__', project)
      .replaceAll('{{SHUTTLE_TITLE}}', shuttleIndex.name)
      .replaceAll('{{TITLE}}', title)
      .replaceAll('{{DESCRIPTION}}', projectInfo.description)
      .replaceAll(
        '{{CONTENT}}',
        renderToString(
          ProjectPage({
            shuttle,
            project: projectInfo,
            docs: projectDocs,
            feedback: projectFeedback,
            shuttleMapSvg,
          }),
        ),
      ),
    {
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'public, max-age=600',
      },
    },
  );

  context.waitUntil(cache.put(context.request, response.clone()));
  return response;
};
