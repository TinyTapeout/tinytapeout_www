// SPDX-License-Identifier: Apache-2.0
// Copyright (C) 2024, Tiny Tapeout LTD

export type Context = EventContext<Env, any, unknown>;

export async function fetchTextAsset(context: Context, url: string) {
  const req = await context.env.ASSETS.fetch(url);
  if (!req.ok) {
    return null;
  }

  return await req.text();
}
