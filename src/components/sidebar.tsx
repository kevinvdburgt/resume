import { StyleSheet, View } from '@react-pdf/renderer';
import React, { type ComponentProps, Fragment, type FunctionComponent } from 'react';

import { mergeStyles } from '#utils/merge-styles.js';

export const Sidebar: FunctionComponent<ComponentProps<typeof View>> = (props) => {
  const { style, ...rest } = props;

  return (
    <Fragment>
      <View style={styles.background} fixed />
      <View style={mergeStyles([styles.container, style])} {...rest} />
    </Fragment>
  );
};

export const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '75mm',
    backgroundColor: '#020618',
  },

  container: {
    width: '75mm',
    paddingHorizontal: '10mm',
  },
});
