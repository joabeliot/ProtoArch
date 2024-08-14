import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "ProtoArch" is now active!');

    let disposable = vscode.commands.registerCommand('protoarch.openFlowchart', () => {
        const panel = vscode.window.createWebviewPanel(
            'protoarchFlowchart',
            'ProtoArch Flowchart',
            vscode.ViewColumn.One,
            {
                enableScripts: true,
                retainContextWhenHidden: true
            }
        );

        // Set the HTML content for the webview
        panel.webview.html = getWebviewContent();
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}

// Function to provide HTML content for the webview
function getWebviewContent() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ProtoArch Flowchart</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                padding: 0;
                margin: 0;
                display: flex;
                height: 100vh;
                justify-content: center;
                align-items: center;
                background-color: #f5f5f5;
            }
            #canvas {
                width: 90%;
                height: 90%;
                border: 1px solid #ccc;
                background-color: #fff;
            }
        </style>
    </head>
    <body>
        <canvas id="canvas"></canvas>
        <script>
            const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');
            // Add basic drawing capabilities here, such as rendering blocks
            ctx.fillStyle = 'blue';
            ctx.fillRect(10, 10, 150, 100);
        </script>
    </body>
    </html>`;
}
