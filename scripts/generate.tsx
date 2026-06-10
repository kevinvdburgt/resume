import { mkdir, writeFile } from 'node:fs/promises';

import { renderToBuffer, renderToFile } from '@react-pdf/renderer';
import { pdf } from 'pdf-to-img';
import React from 'react';

import { Resume } from '../src/resume.js';

await mkdir('dist', { recursive: true });

await renderToFile(<Resume language="nl" />, 'dist/resume-dutch.pdf');

const english = await renderToBuffer(<Resume language="en" />);
await writeFile('dist/resume-english.pdf', english);

// Update the README preview with the first page of the English resume.
const document = await pdf(english, { scale: 2 });
await writeFile('docs/preview.png', await document.getPage(1));
await document.destroy();
