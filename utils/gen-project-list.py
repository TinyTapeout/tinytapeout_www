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

    # Read the existing index.md file
    index_path = os.path.abspath(f"{SCRIPT_PATH}/../content/chips/{args.run}/_index.md")
    try:
        with open(index_path, "r", encoding="utf-8") as f:
            content = f.read()
    except FileNotFoundError:
        print(f"Warning: {index_path} not found. Creating new file.")
        content = ""

    # Find the existing table if it exists
    if "| Index | Title | Author |" in content:
        # Replace the existing table
        pattern = r"\|[\s]*Address[\s]*\|[\s]*Title[\s]*\|[\s]*Author[\s]*\|[\s\S]*?(?=\n\n|\Z)"
        new_content = re.sub(pattern, table_content, content)
    else:
        # Append the table at the end
        new_content = content.rstrip() + "\n\n" + table_content + "\n"

    # Write the updated content back to the file
    with open(index_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"Updated {index_path}")


if __name__ == "__main__":
    main()
