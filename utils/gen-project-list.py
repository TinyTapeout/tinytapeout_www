# SPDX-License-Identifier: Apache-2.0
# Copyright 2025 Tiny Tapeout LTD
# Author: Uri Shaked

import argparse
import json
import os
import re
import urllib.request

SCRIPT_PATH = os.path.dirname(os.path.abspath(__file__))


def main():
    parser = argparse.ArgumentParser(
        description="Generate a list of projects from a Tiny Tapeout run."
    )
    parser.add_argument("run", help="The run to generate the project list for")
    args = parser.parse_args()

    # Download and parse JSON
    url = f"https://index.tinytapeout.com/{args.run}.json?fields=type,macro,address,title,author,subtile_addr"
    headers = {"User-Agent": "Mozilla/5.0"}
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req) as response:
        data = json.loads(response.read().decode())

    # Sort by address first, then by subtile_addr if present
    def sort_key(x):
        addr = x["address"]
        subtile_addr = x.get("subtile_addr")
        if subtile_addr is not None:
            return (addr, int(subtile_addr))
        return (addr, 0)

    data["projects"].sort(key=sort_key)
    table_lines = ["| Address | Title | Author |", "| ----- | ----- | -------|"]
    for item in data["projects"]:
        project_type = item.get("type")
        if project_type == "group":
            continue
        addr = str(item["address"])
        if project_type == "subtile":
            addr += f"/{item['subtile_addr']}"
        table_lines.append(
            f"| {addr} | [{item['title']}]({item['macro']}) | {item['author']} |"
        )
    table_content = "\n".join(table_lines)

    # Download the shuttle map SVG
    map_url = f"https://app.tinytapeout.com/api/shuttles/{args.run}/map?format=1"
    map_req = urllib.request.Request(map_url, headers=headers)
    try:
        with urllib.request.urlopen(map_req) as response:
            svg_content = response.read().decode()
        map_dir = os.path.abspath(f"{SCRIPT_PATH}/../static/chips/{args.run}")
        os.makedirs(map_dir, exist_ok=True)
        map_path = os.path.join(map_dir, "map.svg")
        try:
            with open(map_path, "r", encoding="utf-8") as f:
                old_svg = f.read()
        except FileNotFoundError:
            old_svg = None
        if svg_content != old_svg:
            with open(map_path, "w", encoding="utf-8") as f:
                f.write(svg_content)
            print(f"Updated {map_path}")
    except urllib.error.HTTPError as e:
        print(f"Warning: Could not fetch shuttle map: {e}")

    # Ensure the shuttle is in the valid shuttles list in shuttle-map.html
    shortcode_path = os.path.abspath(
        f"{SCRIPT_PATH}/../layouts/shortcodes/shuttle-map.html"
    )
    with open(shortcode_path, "r", encoding="utf-8") as f:
        shortcode_content = f.read()
    shuttle_list_match = re.search(
        r'(\{\{\s*\$validShuttles\s*:=\s*slice\s*)(.*?)(\s*\}\})', shortcode_content
    )
    if shuttle_list_match:
        shuttle_entries = re.findall(r'"([^"]+)"', shuttle_list_match.group(2))
        if args.run not in shuttle_entries:
            shuttle_entries.append(args.run)
            new_list = " ".join(f'"{s}"' for s in shuttle_entries)
            new_line = f"{shuttle_list_match.group(1)}{new_list} {shuttle_list_match.group(3)}"
            shortcode_content = shortcode_content.replace(
                shuttle_list_match.group(0), new_line
            )
            with open(shortcode_path, "w", encoding="utf-8") as f:
                f.write(shortcode_content)
            print(f"Added {args.run} to valid shuttles in {shortcode_path}")

    # Read the existing index.md file
    index_path = os.path.abspath(f"{SCRIPT_PATH}/../content/chips/{args.run}/_index.md")
    try:
        with open(index_path, "r", encoding="utf-8") as f:
            content = f.read()
    except FileNotFoundError:
        print(f"Warning: {index_path} not found. Creating new file.")
        content = ""

    # Find the existing table if it exists
    if "| Address | Title | Author |" in content:
        # Replace the existing table
        pattern = r"\|[\s]*Address[\s]*\|[\s]*Title[\s]*\|[\s]*Author[\s]*\|[\s\S]*?(?=\n\n|\Z)"
        new_content = re.sub(pattern, table_content + "\n", content)
    else:
        # Append the table at the end
        new_content = content.rstrip() + "\n\n" + table_content + "\n"

    # Write the updated content back to the file
    if new_content != content:
        with open(index_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Updated {index_path}")


if __name__ == "__main__":
    main()
