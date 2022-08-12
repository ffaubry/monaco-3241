import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'monaco-3241',
  buildEs5: false,
  outputTargets: [
    {
      type: 'dist',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      baseUrl: 'https://myapp.local/',
      serviceWorker: null,
      copy: [
        {
          src: '../node_modules/monaco-editor/min/vs/base/browser/ui/codicons/codicon',
          dest: 'build/components/monaco-editor/assests',
        },
        {
          src: '../node_modules/monaco-editor/esm/vs/language/typescript',
          dest: 'build/components/monaco-editor/assests',
        },
      ],
    },
  ],
};
