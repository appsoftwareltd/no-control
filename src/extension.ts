// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "no-control" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json

	let disposable = vscode.commands.registerCommand('no-control.removeControlCharacters', () => {
		// The code you place here will be executed every time your command is executed

		const editor = vscode.window.activeTextEditor

		// Reference for non printable characters: https://www.regular-expressions.info/nonprint.html

		const controlCharsRegex = /[^\x00-\x7f]/gm;

		if(editor)
		{
			const selection = editor.selection

			if(selection)
			{
				let text = editor.document.getText(selection)

				if(text)
				{
					if(text.match(controlCharsRegex))
					{
						// Control characters found, replace and confirm to user

						text = text.replace(controlCharsRegex, '');

						vscode.window.showInformationMessage('Control characters removed.');

						editor.edit(builder => builder.replace(selection, text))
					}
					else
					{
						vscode.window.showInformationMessage('No Control: No control characters found to remove.');
					}
				}
				else
				{
					vscode.window.showInformationMessage('No Control: No text selected. Select the text for replacement of control characters.');
				}
			}
			else
			{
				vscode.window.showInformationMessage('No Control: No selection. Highlight the text for replacement of control characters.');
			}
		}
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
