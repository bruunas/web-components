import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'stencil-library',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      // Relative path to where the React components will be generated
      outDir: '../my-app/lib/components/stencil-generated/',
    }),
    // dist-custom-elements output target is required for the React output target
    { type: 'dist-custom-elements' },
  ],
  testing: {
    browserHeadless: 'shell',
  },
};
