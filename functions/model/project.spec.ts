import MarkdownIt from 'markdown-it';
import { expect, test } from 'vitest';
import { markdownHeadingLimiter } from './project.js';

test('markdownHeadingLimiter', () => {
  const md = MarkdownIt();
  markdownHeadingLimiter(md, 3);
  expect(md.render('# Heading 1\n## Heading 2\n')).toMatchInlineSnapshot(`
    "<h3>Heading 1</h3>
    <h4>Heading 2</h4>
    "
  `);
});
