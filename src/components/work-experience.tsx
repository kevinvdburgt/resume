import { Image, StyleSheet, Text, View } from '@react-pdf/renderer';
import React, { type ComponentProps, type FunctionComponent } from 'react';

import { mergeStyles } from '#utils/merge-styles.js';

export interface WorkExperienceProps extends ComponentProps<typeof View> {
  readonly logoSrc: string;
  readonly name: string;
  readonly location: string;
  readonly position: string;
  readonly started: string;
  readonly ended: string;
  readonly summary: string;
  readonly technologies: string[];
}

export const WorkExperience: FunctionComponent<WorkExperienceProps> = (props) => {
  const {
    logoSrc,
    name,
    location,
    position,
    started,
    ended,
    summary,
    technologies,
    style,
    wrap = false,
    ...rest
  } = props;

  return (
    <View style={mergeStyles([styles.root, style])} wrap={wrap} {...rest}>
      <View style={styles.company}>
        <Image style={styles.companyLogo} src={logoSrc} />

        <View style={styles.companyDetails}>
          <Text style={styles.companyDetailNameLocationPosition}>
            <Text style={styles.companyDetailNameLocationPositionHighlight}>{name},</Text> {location} — {position}
          </Text>
          <Text style={styles.companyDetailStartedEnded}>
            {started} - {ended}
          </Text>
        </View>
      </View>

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

  company: {
    flexDirection: 'row',
    gap: '2mm',
  },

  companyLogo: {
    width: '10mm',
    height: '10mm',
    borderRadius: '2pt',
  },

  companyDetails: {
    justifyContent: 'center',
  },

  companyDetailNameLocationPosition: {
    color: '#020618',

    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: '10pt',
  },

  companyDetailNameLocationPositionHighlight: {
    fontWeight: 700,
  },

  companyDetailStartedEnded: {
    color: '#020618',

    fontFamily: 'Poppins',
    fontWeight: 300,
    fontSize: '8pt',

    textTransform: 'uppercase',
  },

  summary: {
    marginTop: '2mm',

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
