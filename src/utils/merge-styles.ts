import type { NodeProps } from '@react-pdf/renderer';

export const mergeStyles = (styles: (NodeProps['style'] | undefined | false)[]) =>
  styles.flat().filter((style) => style !== undefined && style !== false);
