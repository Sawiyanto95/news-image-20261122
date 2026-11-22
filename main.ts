// news-image-20261122 — copy the day's front page to the output dir.
// Node 22, standard library only. The image is the entry.png next to
// this file: a newspaper front page summing up Sunday 22 November 2026
// in six verified stories. Both runs write identical bytes because the
// image is a fixed file in the repository.
//
// In the grader /output is a mounted volume: never rmSync the directory
// itself (EBUSY). Only stale files inside it are removed first, so a
// previous run cannot leak into the graded output.
//
// Locally, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
for (const stale of readdirSync(outputDir)) {
  rmSync(join(outputDir, stale), { recursive: true, force: true });
}
const image = new URL('./entry.png', import.meta.url);
if (!existsSync(image)) throw new Error('entry.png is missing next to main.ts');
copyFileSync(image, join(outputDir, 'entry.png'));
