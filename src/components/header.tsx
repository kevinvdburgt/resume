import { StyleSheet, Text, View } from '@react-pdf/renderer';
import React, { type ComponentProps, type FunctionComponent } from 'react';

import { mergeStyles } from '#utils/merge-styles.js';

export interface HeaderProps extends ComponentProps<typeof View> {
  readonly firstName: string;
  readonly lastName: string;
  readonly title: string;
}

export const Header: FunctionComponent<HeaderProps> = (props) => {
  const { firstName, lastName, title, style, ...rest } = props;

  return (
    <View style={mergeStyles([styles.root, style])} {...rest}>
      <Text style={styles.firstName}>{firstName}</Text>
      <Text style={styles.lastName}>{lastName}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: '55mm',
    justifyContent: 'center',
  },

  firstName: {
    color: '#020618',

    fontFamily: 'Poppins',
    fontWeight: 300,
    fontSize: '41pt',

    lineHeight: '48pt',

    textTransform: 'uppercase',
  },

  lastName: {
    color: '#020618',

    fontFamily: 'Poppins',
    fontWeight: 700,
    fontSize: '41pt',

    lineHeight: '48pt',

    textTransform: 'uppercase',
  },

  title: {
    marginTop: '10mm',

    color: '#020618',

    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: '12pt',

    textTransform: 'uppercase',
  },
});
