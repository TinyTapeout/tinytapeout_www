// SPDX-License-Identifier: Apache-2.0
// Copyright (C) 2024, Tiny Tapeout LTD
// Author: Uri Shaked

/**
 * Looks up the Open Graph image URL for a given GitHub repository by scraping the HTML.
 * It only returns the image URL if the user has uploaded a custom image to the repository, and not the default GitHub image.
 *
 * @param repo A GitHub repository URL
 * @returns Open Graph image URL, or `null` if not found
 */
export async function loadGithubOGImage(repo: string) {
  const html = await fetch(repo);
  if (!html.ok) {
    return null;
  }

  const text = await html.text();
  const match = text.match(/<meta property="og:image" content="([^"]+)"/);
  if (!match) {
    return null;
  }

  const imageUrl = match[1];
  if (!imageUrl.startsWith('https://repository-images.githubusercontent.com/')) {
    return null;
  }

  return imageUrl;
}
