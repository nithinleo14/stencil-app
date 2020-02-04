import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'max-stencil-app',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  bundles:[
    {components:['my-modal','my-modal-bundle', 'my-backdrop']},
    // {components:['my-backdrop']}
  ]
};
