import { Document, View } from '@react-pdf/renderer';
import React, { type FunctionComponent } from 'react';

import { Avatar } from '#components/avatar.js';
import { Content } from '#components/content.js';
import { Header } from '#components/header.js';
import { Heading } from '#components/heading.js';
import { Main } from '#components/main.js';
import { Page } from '#components/page.js';
import { Sidebar } from '#components/sidebar.js';
import { WorkExperience } from '#components/work-experience.js';
import { content } from '#constants/content.js';
import '#fonts.js';

export const Resume: FunctionComponent = () => {
  const language = 'en';

  return (
    <Document>
      <Page>
        <Sidebar>
          {/* Avatar */}
          <Avatar src={content.avatarSrc} />

          {content.info.map((section, index) => (
            <View key={index} wrap={false}>
              <Heading name={section.name[language]} variant="dark" style={{ marginTop: '10mm' }} />
              <Content variant="dark" name={section.content[language]} />
            </View>
          ))}
        </Sidebar>

        <Main>
          <Header firstName="Kevin" lastName="van der Burgt" title="Freelance software engineer/consultant" />

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

          <Heading name="Projecten" style={{ marginTop: '10mm' }} />

          <Heading name="Talks" style={{ marginTop: '10mm' }} />

          <Heading name="Opleidingen en cursussen" style={{ marginTop: '10mm' }} />
        </Main>
      </Page>
    </Document>
  );
};
