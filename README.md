# No Control

**No Control** is a Visual Studio Code extension for replacing control / non printable characters in text within VSCode.

## Features

**Usage:**

1. Select the block of text where you want the replace to occur.
2. `Ctrl + P` access the command palette.
3. Type `>Remove Control Characters` to run the replace function.

**What it does:**

This extension is pretty simple. It simply runs a regular expression `[^\x00-\x7f]` over the selected text and removes all found instances.

For more information on Control / Non Printing (NPC) characters see https://en.wikipedia.org/wiki/Control_character

## Requirements

N/A

## Extension Settings

N/A

## Known Issues

N/A

### For more information

Email: mail@appsoftware.com
Web: [https://www.appsoftware.com](https://www.appsoftware.com)
Twitter: https://twitter.com/appsoftwareltd
