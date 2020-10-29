# No Control

**No Control** is a Visual Studio Code extension for replacing control / non printable characters in text within VSCode.

For more information on Control / Non Printing (NPC) characters see https://en.wikipedia.org/wiki/Control_character

## Install

Install from the VSCode market place: https://marketplace.visualstudio.com/items?itemName=AppSoftwareLtd.no-control&ssr=false#overview

## Features

**Usage:**

1. Select the block of text where you want the replace to occur.
2. `Ctrl + P` to access the command palette.
3. Type `>Remove Control Characters` to run the replace function.

A notification will displayed with the replace result.

**What it does:**

This extension is pretty simple. It runs a regular expression `[^\x00-\x7f]` over the selected text and removes all instances found.

### For more information

- Email: mail@appsoftware.com
- Web: [https://www.appsoftware.com](https://www.appsoftware.com)
- Twitter: https://twitter.com/appsoftwareltd

### Licence:

Copyright © 2020 http://www.appsoftware.com
Released under the Creative Commons Attribution 2.0 UK: England & Wales license:
[https://creativecommons.org/licenses/by/2.0/uk/](https://creativecommons.org/licenses/by/2.0/uk/)

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
