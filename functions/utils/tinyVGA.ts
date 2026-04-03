// SPDX-License-Identifier: Apache-2.0
// Copyright (C) 2026, Tiny Tapeout LTD

/**
 * Checks if a project's pinout is compatible with the Tiny VGA PMOD layout:
 *   uo[0]: R1, uo[1]: G1, uo[2]: B1, uo[3]: VSYNC,
 *   uo[4]: R0, uo[5]: G0, uo[6]: B0, uo[7]: HSYNC
 */
export function isTinyVGACompatible(pinout: Record<string, string>): boolean {
  const uo = Array.from({ length: 8 }, (_, i) => (pinout[`uo[${i}]`] ?? '').toLowerCase());

  if (!/v_?sync/.test(uo[3]) || !/h_?sync/.test(uo[7])) {
    return false;
  }
  if (!/r/.test(uo[0]) || !/g/.test(uo[1]) || !/b/.test(uo[2])) {
    return false;
  }
  if (!/r/.test(uo[4]) || !/g/.test(uo[5]) || !/b/.test(uo[6])) {
    return false;
  }

  return true;
}
