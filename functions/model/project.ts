// SPDX-License-Identifier: Apache-2.0
// Copyright (C) 2024, Tiny Tapeout LTD

import type MarkdownIt from 'markdown-it/index.js';
import { type Token } from 'markdown-it/index.js';
import { type IShuttleIndexProject } from './shuttle.js';

export async function loadProjectInfo(shuttle: string, project: string) {
  const response = await fetch(`https://index.tinytapeout.com/${shuttle}/${project}.json`);
  if (!response.ok) {
    return null;
  }
  return (await response.json()) as IShuttleIndexProject;
}

export async function loadProjectDocs(shuttle: string, project: string) {
  const response = await fetch(`https://index.tinytapeout.com/${shuttle}/${project}/docs/info.md`);
  if (!response.ok) {
    return null;
  }
  return response.text();
}

export function markdownImagePathTransformer(shuttle: string, macro: string) {
  return (tokens: Token[], idx: number) => {
    const token = tokens[idx];
    let src = token.attrGet('src');
    const alt = token.content;
    if (src?.toLowerCase().includes('://') == false) {
      src = `https://index.tinytapeout.com/${shuttle}/${macro}/docs/${src}`;
    }
    return `<img src="${src}" alt="${alt}" loading="lazy" />`;
  };
}

export function markdownHeadingLimiter(md: MarkdownIt, minLevel: number) {
  md.core.ruler.push('heading_limiter', (state) => {
    const tokens = state.tokens;
    let initialLevel = Infinity;
    for (const token of tokens) {
      if (!['heading_open', 'heading_close'].includes(token.type)) {
        continue;
      }

      const headingLevel = parseInt(token.tag.substring(1));
      if (initialLevel === Infinity) {
        initialLevel = headingLevel;
      }
      const newLevel = minLevel + Math.max(headingLevel - initialLevel, 0);
      token.tag = `h${newLevel}`;
      token.markup = '#'.repeat(newLevel);
    }
  });
}
