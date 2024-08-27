import { Context } from './context.js';

export function isSkipCache(context: Context) {
  return context.request.headers.get('Cache-Control')?.includes('no-cache');
}
