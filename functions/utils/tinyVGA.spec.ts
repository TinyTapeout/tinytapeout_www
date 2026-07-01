// SPDX-License-Identifier: Apache-2.0
// Copyright (C) 2026, Tiny Tapeout LTD

import { expect, test } from 'vitest';
import { isTinyVGACompatible } from './tinyVGA.js';

function pinout(uo: string[]): Record<string, string> {
  const result: Record<string, string> = {};
  for (let i = 0; i < 8; i++) {
    result[`uo[${i}]`] = uo[i];
  }
  return result;
}

test('canonical Tiny VGA pinout', () => {
  expect(isTinyVGACompatible(pinout(['R1', 'G1', 'B1', 'VSYNC', 'R0', 'G0', 'B0', 'HSYNC']))).toBe(
    true,
  );
});

test('bracket notation', () => {
  expect(
    isTinyVGACompatible(pinout(['r[1]', 'g[1]', 'b[1]', 'vsync', 'r[0]', 'g[0]', 'b[0]', 'hsync'])),
  ).toBe(true);
});

test('full color names with underscore sync', () => {
  expect(
    isTinyVGACompatible(
      pinout([
        'red[1]',
        'green[1]',
        'blue[1]',
        'vsync_n',
        'red[0]',
        'green[0]',
        'blue[0]',
        'hsync_n',
      ]),
    ),
  ).toBe(true);
});

test('prefixed labels', () => {
  expect(
    isTinyVGACompatible(
      pinout([
        'vga r1',
        'vga g1',
        'vga b1',
        'vga vsync',
        'vga r0',
        'vga g0',
        'vga b0',
        'vga hsync',
      ]),
    ),
  ).toBe(true);
});

test('rejects non-standard sync positions', () => {
  expect(isTinyVGACompatible(pinout(['h_sync', 'v_sync', 'r', 'g', 'b', '', '', '']))).toBe(false);
});

test('rejects dual-PMOD layout', () => {
  expect(
    isTinyVGACompatible(
      pinout([
        'hsync / r1',
        'vsync / g1',
        'b0 / b1',
        'b1 / vs',
        'g0 / r0',
        'g1 / g0',
        'r0 / b0',
        'r1 / hs',
      ]),
    ),
  ).toBe(false);
});
