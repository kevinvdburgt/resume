# Resume

> This repository contains my resume, built with React-PDF

I wanted a setup that made it easy to tweak the layout and structure without fighting Google Docs limitations or manually updating an Affinity Designer file. With React-PDF I can iterate quickly, keep everything version-controlled, and generate a clean PDF with updated information whenever I need.

[Download dutch version](https://dl.kvdb.dev/resume-dutch.pdf) | [Download english version](https://dl.kvdb.dev/resume-english.pdf)

![Preview](https://raw.githubusercontent.com/kevinvdburgt/resume/refs/heads/main/docs/preview.png)

### Is it a bit overengineered?

Absolutely. But it was fun to build! And now future updates are effortless.

## Why React-PDF?

- Full control over layout and typography
- Everything lices in code and version control
- Easy to automate and regenerate
- No visual editos or export workflows to maintain

## Features

- Component based resume layout
- Multipage support
- Custom fonts
- Multilanguage
- Easy content updates
- One command to generate a fresh PDF

## Getting started

```bash
pnpm install

# Generate pdf documents
pnpm generate

# Generate pdf documents and watch for changes
pnpm dev
```

The final PDF documents will be generated in the `dist` folder.
