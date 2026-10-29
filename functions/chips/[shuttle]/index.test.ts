// SPDX-License-Identifier: Apache-2.0
// Copyright (C) 2026, Tiny Tapeout LTD

import { beforeAll, describe, expect, it, vi } from 'vitest';

let onRequestGet: (context: any) => Promise<Response>;

beforeAll(async () => {
  // The handler captures `caches.default` at module load time; provide a no-op cache.
  vi.stubGlobal('caches', {
    default: { match: async () => undefined, put: async () => {} },
  });
  ({ onRequestGet } = await import('./index.js'));
});

function makeContext(path: string, assetResponse: Response) {
  const request = new Request(`https://tinytapeout.com${path}`);
  return {
    request,
    params: { shuttle: 'ttgf26a' },
    env: { ASSETS: { fetch: vi.fn(async () => assetResponse) } },
    waitUntil: () => {},
  };
}

describe('GET /chips/[shuttle]', () => {
  it('passes through the trailing-slash redirect from the asset server', async () => {
    const redirect = new Response(null, { status: 308, headers: { Location: '/chips/ttgf26a/' } });
    const response = await onRequestGet(makeContext('/chips/ttgf26a', redirect));

    expect(response.status).toBe(308);
    expect(response.headers.get('Location')).toBe('/chips/ttgf26a/');
  });

  it('returns the static page content for non-template shuttle pages', async () => {
    const page = new Response('<html><body>static shuttle page</body></html>', { status: 200 });
    const response = await onRequestGet(makeContext('/chips/ttgf26a/', page));

    expect(response.status).toBe(200);
    expect(await response.text()).toContain('static shuttle page');
  });
});
