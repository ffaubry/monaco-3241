import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'editor-container',
  styleUrl: 'editor-container.css',
  // Comment or uncomment the line below to reproduce the issue 3241
  // shadow: true,
})
export class EditorContainer {
  render() {
    return (
      <Host>
        <monaco-editor />
      </Host>
    );
  }
}
