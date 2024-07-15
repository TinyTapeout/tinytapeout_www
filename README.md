# Tiny Tapeout website

Contribution instructions:

* fork this repository
* *clone the forked repository recursively*
* install hugo:
    * linux: `snap install hugo`
    * other platforms: https://gohugo.io/getting-started/installing/
* after cloning the repo, change to the new directory: cd tinytapeout_www
* start hugo server: hugo server
* access the website at http://localhost:1313

After testing your contribution works, please make a pull request.
Thanks!

## Developing the cloudflare functions (dynamic content)

You'll need a recent version of node.js and npm. First, install wrangler:

```bash
npm i -g @cloudflare/wrangler
```

Then, you can run the functions locally with:

```bash
npm run dev
```

Note: for the static content to be served correctly, you need to run `hugo` first (or `hugo -w` to watch for changes).

## Adding redirects

Add a line to static/_redirects
