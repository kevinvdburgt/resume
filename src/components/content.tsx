import { StyleSheet, Text, View } from '@react-pdf/renderer';
import React, { type ComponentProps, type FunctionComponent } from 'react';

import { mergeStyles } from '#utils/merge-styles.js';

export interface ContentProps extends Omit<ComponentProps<typeof View>, 'children'> {
  readonly variant?: 'light' | 'dark';
  readonly name: string;
}

export const Content: FunctionComponent<ContentProps> = (props) => {
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
    //
  },

  text: {
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: '10pt',
  },

  textVariantLight: {
    color: '#020618',
  },

  textVariantDark: {
    color: '#FFFFFF',
  },
});
