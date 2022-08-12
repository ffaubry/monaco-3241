import { Component, Host, h, getAssetPath, Element, ComponentInterface } from '@stencil/core';
import { editor } from 'monaco-editor';

(self as any).MonacoEnvironment = {
  getWorkerUrl: function (_: any, label: string) {
    const assetPath = getAssetPath('./assets');
    switch (label) {
      case 'typescript':
      case 'javascript':
        return `${assetPath}/monaco-editor/ts.worker.js`;

      default: {
        return `${assetPath}/monaco-editor/editor.worker.js`;
      }
    }
  },
};

@Component({
  tag: 'monaco-editor',
  styleUrl: 'monaco-editor.css',
  assetsDirs: ['assets'],
  // shadow: true,
})
export class MonacoEditor implements ComponentInterface {
  @Element() hostElt: HTMLMonacoEditorElement;
  editorElt: HTMLDivElement = null;
  editorInstance: editor.IStandaloneCodeEditor;

  async componentDidLoad(): Promise<void> {
    this.editorInstance = editor.create(this.editorElt, {
      value: 'function f',
      language: 'javascript',
      // Need this line for some hover widgets to show up correctly
      fixedOverflowWidgets: true,
      automaticLayout: true,
      minimap: { enabled: false },
      tabSize: 2,
      useShadowDOM: false,
    });

    const fontDeclarationElement: HTMLStyleElement = document.createElement('style');
    fontDeclarationElement.textContent = `
      @font-face {
        font-family: "codicon";
        src: url(${getAssetPath('./assets/monaco-editor/codicon.ttf')}) format("truetype");
      }
    `;
    document.head.append(fontDeclarationElement);
  }

  render() {
    return (
      <Host>
        <div ref={e => (this.editorElt = e)} />
      </Host>
    );
  }
}
