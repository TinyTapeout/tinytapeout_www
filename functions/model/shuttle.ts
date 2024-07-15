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
  macro: string;
  address: number;
  title: string;
  author: string;
  description: string;
  clock_hz: number;
  tiles: string;
  analog_pins: string[];
  repo: string;
  commit: string;
  pinout: Record<string, string>;
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
  return await fetchTextAsset(context, `https://tinytapeout.com/runs/${shuttle}/map.svg`);
}
