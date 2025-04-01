# SPDX-License-Identifier: Apache-2.0
# Copyright 2025 Tiny Tapeout LTD
# Author: Uri Shaked

import argparse
import json
import re
import urllib.request


def main():
    parser = argparse.ArgumentParser(
        description="Generate a list of projects from a Tiny Tapeout run."
    )
    parser.add_argument("run", help="The run to generate the project list for")
    args = parser.parse_args()

    # Download and parse JSON
    url = f"https://index.tinytapeout.com/{args.run}.json?fields=macro,address,title,author"
    headers = {"User-Agent": "Mozilla/5.0"}
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req) as response:
        data = json.loads(response.read().decode())

    # Generate the project table
    data["projects"].sort(key=lambda x: x["address"])
    table_lines = ["| Address | Title | Author |", "| ----- | ----- | -------|"]
    for item in data["projects"]:
        table_lines.append(
            f"| {item['address']} | [{item['title']}]({item['macro']}) | {item['author']} |"
        )
    table_content = "\n".join(table_lines)

    # Read the existing index.md file
    index_path = f"content/runs/{args.run}/_index.md"
    try:
        with open(index_path, "r", encoding="utf-8") as f:
            content = f.read()
    except FileNotFoundError:
        print(f"Warning: {index_path} not found. Creating new file.")
        content = ""

    # Find the existing table if it exists
    if "| Index | Title | Author |" in content:
        # Replace the existing table
        pattern = (
            r"\|[\s]*Address[\s]*\|[\s]*Title[\s]*\|[\s]*Author[\s]*\|[\s\S]*?(?=\n\n|\Z)"
        )
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
