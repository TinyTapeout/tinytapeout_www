// SPDX-License-Identifier: Apache-2.0
// Copyright (C) 2024, Tiny Tapeout LTD

import { fetchTextAsset, type Context } from '../utils/context.js';

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
  return await fetchTextAsset(context, `https://tinytapeout.com/chips/${shuttle}/map.svg`);
}

export function getShuttlePdk(shuttle: string) {
  if (shuttle.startsWith('ttgf')) {
    return 'gf180mcuD';
  }
  if (shuttle.startsWith('ttihp')) {
    return 'ihp-sg13g2';
  }
  return 'sky130A';
}
