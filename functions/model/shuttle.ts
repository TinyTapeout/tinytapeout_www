// SPDX-License-Identifier: Apache-2.0
// Copyright (C) 2024, Tiny Tapeout LTD

import { fetchTextAsset, type Context } from '../utils/context.js';
import type { Response as WorkerResponse } from '@cloudflare/workers-types';

const cache = caches.default;

export const scanchainShuttles = ['tt01', 'tt02', 'tt03'];

export interface IShuttleIndex<F extends keyof IShuttleIndexProject = any> {
  version: 3;
  id: string;
  name: string;
  repo: string;
  commit: string;
  updated: string;
  projects: Pick<IShuttleIndexProject, F>[];
}

export interface IShuttleIndexProject {
  /** The type of project. The default is 'project'. */
  type?: 'project' | 'group' | 'subtile';
  macro: string;
  address: number;
  title: string;
  author: string;
  description: string;
  clock_hz: number;
  tiles: string;
  analog_pins: number[];
  repo: string;
  commit: string;
  pinout: Record<string, string>;
  subtile_group?: string;
  subtile_addr?: number;
  subtile_addr_bits?: number;
}

export async function loadShuttleIndex<F extends keyof IShuttleIndexProject>(
  shuttle: string,
  fields?: string[],
) {
  const params = fields ? `?fields=${fields.join(',')}` : '';
  const response = await fetch(`https://index.tinytapeout.com/${shuttle}.json?${params}`);
  if (!response.ok) {
    return null;
  }
  return (await response.json()) as IShuttleIndex<F>;
}

export async function loadShuttleMapSvg(context: Context, shuttle: string) {
  const url = `https://index.tinytapeout.com/${shuttle}/map?format=1`;
  const cached = await cache.match(url);
  // NOTE: ommited the isSkipCache() call, not sure if it's needed
  if (cached) {
    return cached.text();
  }

  const response = await fetch(url);
  if (!response.ok) {
    return null;
  }

  // NOTE: global.Response is not compatible with CloudFlare's version
  // we're not using websockets, so we should be fine to change the type
  context.waitUntil(cache.put(url, response.clone() as unknown as WorkerResponse));
  return response.text();
}

const cmos5lShuttles = ['ttihp0p4'];

export function getShuttlePdk(shuttle: string) {
  if (shuttle.startsWith('ttgf')) {
    return 'gf180mcuD';
  }
  if (shuttle.startsWith('ttihp')) {
    return cmos5lShuttles.includes(shuttle) ? 'ihp-sg13cmos5l' : 'ihp-sg13g2';
  }
  return 'sky130A';
}
