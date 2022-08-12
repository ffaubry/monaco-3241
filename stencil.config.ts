import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'monaco-3241',
  buildEs5: false,
  outputTargets: [
    {
      type: 'dist',
      copy: [],
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
      copy: [],
    },
  ],
};
