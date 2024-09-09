import * as vscode from 'vscode';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactFlow, { MiniMap, Controls } from 'react-flow-renderer';

// Define the Flow component
function Flow({ nodes, edges, onNodesChange, onEdgesChange, onConnect }: any) {
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    >
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
}

// Function to create the WebView Panel
function createWebviewPanel(context: vscode.ExtensionContext) {
  const panel = vscode.window.createWebviewPanel(
    'reactFlow',
    'React Flow',
    vscode.ViewColumn.One,
    { enableScripts: true }
  );

  // Define the initial nodes and edges
  const nodes = [
    { id: '1', data: { label: 'Node 1' }, position: { x: 100, y: 100 } },
    { id: '2', data: { label: 'Node 2' }, position: { x: 400, y: 100 } }
  ];

  const edges = [
    { id: 'e1-2', source: '1', target: '2', animated: true }
  ];

  // Provide the HTML content to the WebView
  panel.webview.html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>React Flow</title>
        <script src="https://unpkg.com/react/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/react-flow-renderer/dist/react-flow-renderer.js"></script>
    </head>
    <body>
        <div id="root" style="height: 100vh; width: 100vw;"></div>
        <script>
          const { ReactFlow, MiniMap, Controls } = window['react-flow-renderer'];

          function Flow({ nodes, edges, onNodesChange, onEdgesChange, onConnect }) {
            return React.createElement(
              ReactFlow,
              { nodes, edges, onNodesChange, onEdgesChange, onConnect },
              React.createElement(MiniMap),
              React.createElement(Controls)
            );
          }

          window.addEventListener('message', event => {
            const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = event.data;
            ReactDOM.render(
              React.createElement(Flow, { nodes, edges, onNodesChange, onEdgesChange, onConnect }),
              document.getElementById('root')
            );
          });

          // Send initial message to WebView
          window.acquireVsCodeApi().postMessage({
            nodes: ${JSON.stringify(nodes)},
            edges: ${JSON.stringify(edges)},
            onNodesChange: () => {},
            onEdgesChange: () => {},
            onConnect: () => {}
          });
        </script>
    </body>
    </html>
  `;
}

// Register the command and create the WebView panel
export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('protoarch.openFlowchart', () => {
    createWebviewPanel(context);
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
