// SPDX-License-Identifier: Apache-2.0
// Copyright (C) 2024, Tiny Tapeout LTD

import { Context } from './context.js';

export async function notFound(context: Context): Promise<Response> {
  return await context.env.ASSETS.fetch('https://tinytapeout.com/404');
}
