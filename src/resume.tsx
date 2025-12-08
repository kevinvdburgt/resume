import { Document, View } from '@react-pdf/renderer';
import React, { type FunctionComponent } from 'react';

import { Avatar } from '#components/avatar.js';
import { Content } from '#components/content.js';
import { Credits } from '#components/credits.js';
import { Header } from '#components/header.js';
import { Heading } from '#components/heading.js';
import { Main } from '#components/main.js';
import { Page } from '#components/page.js';
import { Sidebar } from '#components/sidebar.js';
import { WorkExperience } from '#components/work-experience.js';
import { content } from '#constants/content.js';
import '#fonts.js';
import type { Translate } from '#interfaces/resume-content.js';

export interface ResumeProps {
  readonly language?: keyof Translate;
}

export const Resume: FunctionComponent<ResumeProps> = (props) => {
  const { language = 'nl' } = props;

  return (
    <Document>
      <Page>
        <Sidebar>
          <Avatar src={content.avatarSrc} />

          {content.info.map((section, index) => (
            <View key={index} wrap={false}>
              <Heading name={section.name[language]} variant="dark" style={{ marginTop: '10mm' }} />
              <Content variant="dark" name={section.content[language]} />
            </View>
          ))}
        </Sidebar>

        <Main>
          <Header firstName={content.firstName} lastName={content.lastName} title={content.title[language]} />

          <Heading name={content.workExperience.name[language]} style={{ marginTop: '10mm' }} />
          {content.workExperience.items.map((item, index) => (
            <WorkExperience
              key={index}
              style={{ marginTop: '5mm' }}
              logoSrc={item.logoSrc}
              name={item.name}
              location={item.location}
              position={item.position[language]}
              started={item.started[language]}
              ended={item.ended[language]}
              summary={item.summary[language]}
              technologies={item.technologies}
            />
          ))}

          <Credits
            style={{ marginTop: '10mm' }}
            message={content.credits.message[language]}
            url={content.credits.url}
          />
        </Main>
      </Page>
    </Document>
  );
};
