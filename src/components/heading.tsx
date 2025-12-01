import { StyleSheet, Text, View } from '@react-pdf/renderer';
import React, { type ComponentProps, type FunctionComponent } from 'react';

import { mergeStyles } from '#utils/merge-styles.js';

export interface HeadingProps extends Omit<ComponentProps<typeof View>, 'children'> {
  readonly variant?: 'light' | 'dark';
  readonly name: string;
}

export const Heading: FunctionComponent<HeadingProps> = (props) => {
  const { variant = 'light', name, style, ...rest } = props;

  return (
    <View style={mergeStyles([styles.root, style])} {...rest}>
      <Text
        style={mergeStyles([
          styles.text,
          variant === 'light' && styles.textVariantLight,
          variant === 'dark' && styles.textVariantDark,
        ])}
      >
        {name}
      </Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  root: {
    height: '8mm',
    justifyContent: 'center',
  },

  text: {
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontSize: '12pt',

    textTransform: 'uppercase',
  },

  textVariantLight: {
    color: '#020618',
  },

  textVariantDark: {
    color: '#FFFFFF',
  },
});
