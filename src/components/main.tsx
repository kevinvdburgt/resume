import { StyleSheet, View } from '@react-pdf/renderer';
import React, { type ComponentProps, type FunctionComponent } from 'react';

import { mergeStyles } from '#utils/merge-styles.js';

export const Main: FunctionComponent<ComponentProps<typeof View>> = (props) => {
  const { style, ...rest } = props;

  return <View style={mergeStyles([styles.root, style])} {...rest} />;
};

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: '10mm',
  },
});
