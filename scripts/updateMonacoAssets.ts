import * as esbuild from 'esbuild';
import path from 'path';
import fs from 'fs-extra';
import resolvePkg from 'resolve-pkg';

const workerPaths = [
  // resolvePkg("monaco-editor/esm/vs/language/html/html.worker.js"),
  // resolvePkg("monaco-editor/esm/vs/language/css/css.worker.js"),
  resolvePkg('monaco-editor/esm/vs/language/typescript/ts.worker.js'),
  // resolvePkg('monaco-editor/esm/vs/language/json/json.worker.js'),
  resolvePkg('monaco-editor/esm/vs/editor/editor.worker.js'),
];

const outdir = path.resolve('./src/components/monaco-editor/assets/monaco-editor');

async function buildWorkers(): Promise<void> {
  console.log('[updateMonacoResources.buildWorkers] started');
  await Promise.all(
    workerPaths.map((workerPath: string | undefined): Promise<esbuild.BuildResult | void> => {
      if (!workerPath) {
        return Promise.resolve();
      }

      return esbuild.build({
        entryPoints: [workerPath],
        bundle: true,
        format: 'iife',
        sourcemap: 'external',
        minify: true,
        write: true,
        metafile: true,
        outdir,
      });
    }),
  );
  console.log('[updateMonacoResources.buildWorkers] finished');
}

async function copyCodicon(): Promise<void> {
  console.log('[updateMonacoResources.copyCodicon] started');
  const codiconPath = resolvePkg('monaco-editor/min/vs/base/browser/ui/codicons/codicon');
  if (codiconPath) {
    await fs.copy(codiconPath, outdir);
  }
  console.log('[updateMonacoResources.copyCodicon] finished');
}

buildWorkers();
copyCodicon();
