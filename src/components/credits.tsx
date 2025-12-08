import { Link, StyleSheet, Text, View } from '@react-pdf/renderer';
import React, { type ComponentProps, type FunctionComponent } from 'react';

import { mergeStyles } from '#utils/merge-styles.js';

export interface CreditsProps extends ComponentProps<typeof View> {
  readonly message: string;
  readonly url: string;
}

export const Credits: FunctionComponent<CreditsProps> = (props) => {
  const { message, url, style } = props;

  return (
    <View style={mergeStyles([styles.root, style])}>
      <Text style={styles.text}>{message}</Text>
      <Link style={styles.link} href={url}>
        {url}
      </Link>
    </View>
  );
};

export const styles = StyleSheet.create({
  root: {
    borderRadius: '2pt',
    padding: '3mm',
    backgroundColor: '#e5e6eaff',
  },

  text: {
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: '8pt',

    color: '#020618',
  },

  link: {
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: '8pt',

    color: '#020618',
  },
});
