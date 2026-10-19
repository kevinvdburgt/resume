import { StyleSheet, Text, View } from '@react-pdf/renderer';
import React, { type ComponentProps, type FunctionComponent } from 'react';

import { mergeStyles } from '#utils/merge-styles.js';

export interface PersonalProjectProps extends ComponentProps<typeof View> {
  readonly name: string;
  readonly summary: string;
  readonly technologies: string[];
}

export const PersonalProject: FunctionComponent<PersonalProjectProps> = (props) => {
  const { name, summary, technologies, style, wrap = false, ...rest } = props;

  return (
    <View style={mergeStyles([styles.root, style])} wrap={wrap} {...rest}>
      <Text style={styles.name}>{name}</Text>

      <Text style={styles.summary}>{summary}</Text>

      <Text style={styles.technologies}>
        {technologies.map((technology, index) => (
          <Text key={index} style={styles.technologyItem}>
            {index > 0 ? ' · ' : ''}
            {technology}
          </Text>
        ))}
      </Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  root: {
    //
  },

  name: {
    color: '#020618',

    fontFamily: 'Poppins',
    fontWeight: 700,
    fontSize: '10pt',
  },

  summary: {
    marginTop: '1mm',

    color: '#020618',

    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: '10pt',

    textAlign: 'justify',
  },

  technologies: {
    marginTop: '1mm',
  },

  technologyItem: {
    color: '#020618',

    fontFamily: 'Poppins',
    fontWeight: 300,
    fontSize: '8pt',
  },
});
