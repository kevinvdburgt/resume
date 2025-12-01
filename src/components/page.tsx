import { Page as ReactPdfPage, StyleSheet } from '@react-pdf/renderer';
import React, { type ComponentProps, type FunctionComponent } from 'react';

import { mergeStyles } from '#utils/merge-styles.js';

export const Page: FunctionComponent<ComponentProps<typeof ReactPdfPage>> = (props) => {
  const { size = 'A4', style, wrap = true, ...rest } = props;

  return <ReactPdfPage size={size} style={mergeStyles([styles.root, style])} wrap={wrap} {...rest} />;
};

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    paddingVertical: '10mm',
  },
});
