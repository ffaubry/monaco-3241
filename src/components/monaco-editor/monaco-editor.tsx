import { Component, Host, h, getAssetPath } from '@stencil/core';

(self as any).MonacoEnvironment = {
  getWorkerUrl: function (_: any, label: string) {
    const assetPath = getAssetPath('./assets');
    switch (label) {
      case 'typescript':
      case 'javascript':
        return `${assetPath}/code-editor/ts.worker.js`;

      default: {
        return `${assetPath}/code-editor/editor.worker.js`;
      }
    }
  },
};

@Component({
  tag: 'monaco-editor',
  styleUrl: 'monaco-editor.css',
  shadow: true,
})
export class MonacoEditor {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
