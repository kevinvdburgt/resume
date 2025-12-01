import { Image, StyleSheet, View } from '@react-pdf/renderer';
import React, { type ComponentProps, type FunctionComponent } from 'react';

import { mergeStyles } from '#utils/merge-styles.js';

export interface AvatarProps extends Omit<ComponentProps<typeof View>, 'children'> {
  readonly src: string;
}

export const Avatar: FunctionComponent<AvatarProps> = (props) => {
  const { src, style, ...rest } = props;

  return (
    <View style={mergeStyles([styles.root, style])} {...rest}>
      <Image src={src} style={styles.image} />
    </View>
  );
};

export const styles = StyleSheet.create({
  root: {
    width: '55mm',
    height: '55mm',
    backgroundColor: '#FFFFFF',
    borderRadius: '55mm',
    padding: '2pt',
  },

  image: {
    borderRadius: '55mm',
  },
});
