import { renderToFile } from '@react-pdf/renderer';
import { mkdir } from 'node:fs/promises';
import React from 'react';

import { Resume } from '../src/resume';

await mkdir('dist', { recursive: true });
await renderToFile(<Resume language="nl" />, `dist/resume-dutch.pdf`);
await renderToFile(<Resume language="en" />, `dist/resume-english.pdf`);
