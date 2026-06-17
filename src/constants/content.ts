import type { ResumeContent } from '#interfaces/resume-content.js';

export const content = {
  firstName: 'Kevin',
  lastName: 'van der Burgt',
  title: {
    nl: 'Freelance software engineer/consultant',
    en: 'Freelance software engineer/consultant',
  },
  avatarSrc: './assets/avatar.jpg',

  info: [
    {
      name: {
        nl: 'Contactgegevens',
        en: 'Contact details',
      },
      content: {
        nl: 'Dronten\n06 58 99 00 55\nkevin@pokeit.nl',
        en: 'Dronten, The Netherlands\n+31 6 58 99 00 55\nkevin@pokeit.nl',
      },
    },
    {
      name: {
        nl: 'Over Kevin',
        en: 'About Kevin',
      },
      content: {
        nl: 'Senior fullstack developer met meer dan tien jaar ervaring in verschillende programmeertalen en cloudplatformen. Sterk in schaalbare architecturen, security en performance. Analytisch, pragmatisch en gericht op kwaliteit.',
        en: 'Senior fullstack developer with over a decade of experience in various programming languages and cloud platforms. Strong in scalable architectures, security, and performance. Analytical, pragmatic, and quality-focused.',
      },
    },
    {
      name: {
        nl: 'Talen',
        en: 'Languages',
      },
      content: {
        nl: 'Nederlands (moedertaal)\nEngels (vloeiend)',
        en: 'Dutch (native)\nEnglish (fluent)',
      },
    },
    {
      name: {
        nl: 'Programmeertalen',
        en: 'Programming languages',
      },
      content: {
        nl: 'TypeScript, JavaScript, PHP, Golang, C#, Java, Kotlin, C++, C.',
        en: 'TypeScript, JavaScript, PHP, Golang, C#, Java, Kotlin, C++, C.',
      },
    },
    {
      name: {
        nl: 'Tools en software',
        en: 'Tools and software',
      },
      content: {
        nl: 'Agile/Scrum, Linux, macOS, Windows, Docker, k8s, MySQL, PostgreSQL, Redis, MongoDB, Grafana, Prometheus, Tailscale, Proxmox, Affinity, Figma, Claude Code, Codex.',
        en: 'Agile/Scrum, Linux, macOS, Windows, Docker, k8s, MySQL, PostgreSQL, Redis, MongoDB, Grafana, Prometheus, Tailscale, Proxmox, Affinity, Figma, Claude Code, Codex.',
      },
    },
    {
      name: {
        nl: 'Socials',
        en: 'Socials',
      },
      content: {
        nl: 'GitHub: kevinvdburgt\nLinkedIn: kevinvdburgt\nWebsite: pokeit.nl',
        en: 'GitHub: kevinvdburgt\nLinkedIn: kevinvdburgt\nWebsite: pokeit.nl',
      },
    },
  ],

  workExperience: {
    name: {
      nl: 'Werkervaring',
      en: 'Work experience',
    },
    items: [
      {
        logoSrc: './assets/companies/pokeit.png',
        name: 'Poke IT',
        location: 'Dronten',
        position: {
          nl: 'Freelance',
          en: 'Freelance',
        },
        started: {
          nl: 'Maart 2013',
          en: 'March 2013',
        },
        ended: {
          nl: 'Heden',
          en: 'Present',
        },
        summary: {
          nl: 'Mijn primaire werkzaamheden bestaan uit het ondersteunen van uiteenlopende MKB-softwareprojecten. Daarnaast werk ik aan greenfield-projecten, IT-infrastructuur, cloudomgevingen en securitytests. Voor een compleet overzicht bekijk de website op pokeit.nl/diensten.',
          en: 'My primary tasks involve supporting various SME software projects. Additionally, I work on greenfield projects, IT infrastructure, cloud environments, and security tests. For a complete overview, visit the website at pokeit.nl/diensten.',
        },
        technologies: ['TypeScript', 'Node.js', 'React', 'React Native', 'Docker', 'PostgreSQL'],
      },
      {
        logoSrc: './assets/companies/bumastemra.png',
        name: 'BumaStemra',
        location: 'Hoofddorp',
        position: {
          nl: 'Freelance Software Engineer',
          en: 'Freelance Software Engineer',
        },
        started: {
          nl: 'Januari 2026',
          en: 'January 2026',
        },
        ended: {
          nl: 'Heden',
          en: 'Present',
        },
        summary: {
          nl: "Meegewerkt aan de doorontwikkeling en modernisering van het auteursrechten-platform van BUMA/STEMRA, dat muziekauteurs en uitgevers ondersteunt bij het registreren van werken, het beheren van rechten en het uitkeren van royalty's. De ontwikkeling vond plaats in een full-stack TypeScript-omgeving met React aan de voorkant en een NestJS/GraphQL-backend, waarbij ik aan diverse onderdelen van het platform heb bijgedragen om de functionaliteit, gebruiksvriendelijkheid en betrouwbaarheid te verbeteren.",
          en: "Contributed to the further development and modernization of BUMA/STEMRA's copyright platform, which supports music authors and publishers in registering works, managing rights, and distributing royalties. The development took place in a full-stack TypeScript environment with React on the frontend and a NestJS/GraphQL backend, where I contributed to various parts of the platform to improve functionality, user-friendliness, and reliability.",
        },
        technologies: [
          'TypeScript',
          'Node.js',
          'NestJS',
          'GraphQL',
          'Monorepo',
          'PostgreSQL',
          'Redis',
          'React',
          'Kubernetes',
          'Azure',
        ],
      },
      {
        logoSrc: './assets/companies/hostbit.png',
        name: 'Hostbit B.V.',
        location: 'Dronten',
        position: {
          nl: 'Cofounder',
          en: 'Cofounder',
        },
        started: {
          nl: 'Juli 2025',
          en: 'July 2025',
        },
        ended: {
          nl: 'Heden',
          en: 'Present',
        },
        summary: {
          nl: 'Het ontwikkelen van een maatwerk hostingplatform voor webhosting, domeinnamen en deployable Docker images. Beheer van diverse Linux-machines en het opzetten van monitoring.',
          en: 'Developing a custom hosting platform for web hosting, domain names, and deployable Docker images. Managing various Linux machines and setting up monitoring.',
        },
        technologies: [
          'Golang',
          'TypeScript',
          'React',
          'Node.js',
          'Next.js',
          'PostgreSQL',
          'Docker',
          'Prometheus',
          'Ansible',
        ],
      },
      {
        logoSrc: './assets/companies/registratietools.png',
        name: 'Registratietools B.V.',
        location: 'Soest',
        position: {
          nl: 'Cofounder',
          en: 'Cofounder',
        },
        started: {
          nl: 'Augustus 2024',
          en: 'August 2024',
        },
        ended: {
          nl: 'Heden',
          en: 'Present',
        },
        summary: {
          nl: 'Ontwikkeling van een React Native-app voor Android en iOS waarmee werkbonnen automatisch kunnen worden ingevuld via gekoppelde Bluetooth-apparaten.',
          en: 'Development of a React Native app for Android and iOS that allows work orders to be automatically filled out via connected Bluetooth devices.',
        },
        technologies: ['TypeScript', 'React Native', 'Node.js', 'PostgreSQL', 'External APIs', 'Hardware integration'],
      },
      {
        logoSrc: './assets/companies/eab.png',
        name: 'Energie Excellent',
        location: 'Den Haag',
        position: {
          nl: 'Freelance Software Engineer',
          en: 'Freelance Software Engineer',
        },
        started: {
          nl: 'Mei 2024',
          en: 'May 2024',
        },
        ended: {
          nl: 'November 2024',
          en: 'November 2024',
        },
        summary: {
          nl: 'Meegewerkt aan de uitbreiding en optimalisatie van een energiesysteem dat organisaties ondersteunt bij het strategisch en kostenefficiënt inkopen van energie. De ontwikkeling vond voornamelijk plaats in Laravel.',
          en: 'Contributed to the expansion and optimization of an energy system that helps organizations strategically and cost-effectively purchase energy. The development mainly took place in Laravel.',
        },
        technologies: ['PHP', 'TypeScript', 'Laravel', 'MySQL', 'Docker'],
      },
      {
        logoSrc: './assets/companies/vanwijnen.png',
        name: 'Van Wijnen',
        location: 'Harderwijk',
        position: {
          nl: 'Full-time Software Engineer',
          en: 'Full-time Software Engineer',
        },
        started: {
          nl: 'April 2021',
          en: 'April 2021',
        },
        ended: {
          nl: 'April 2024',
          en: 'April 2024',
        },
        summary: {
          nl: 'Bijgedragen aan de implementatie en uitbreiding van integraties binnen het iPaaS-platform, waarmee diverse interne en externe systemen veilig en betrouwbaar aan elkaar werden gekoppeld.',
          en: 'Contributed to the implementation and expansion of integrations within the iPaaS platform, securely and reliably connecting various internal and external systems.',
        },
        technologies: [
          'TypeScript',
          'Node.js',
          'Microsoft Azure',
          'DevOps',
          'Software Integrations',
          'GCP (Google Cloud Platform)',
        ],
      },
      {
        logoSrc: './assets/companies/versio.png',
        name: 'Versio B.V.',
        location: 'Zwolle',
        position: {
          nl: 'Full-time Lead Software Engineer',
          en: 'Full-time Lead Software Engineer',
        },
        started: {
          nl: 'April 2019',
          en: 'April 2019',
        },
        ended: {
          nl: 'April 2021',
          en: 'April 2021',
        },
        summary: {
          nl: 'Het onderhouden van PHP legacy software en bouwen van een nieuw platform in Laravel met meerdere ontwikkelaars waar ik de lead van het project was. De nieuwe website hebben we gemaakt in Next.js die een koppeling had met het legacy systeem.',
          en: 'Maintaining PHP legacy software and building a new platform in Laravel with multiple developers, where I was the project lead. We created the new website in Next.js, which was connected to the legacy system.',
        },
        technologies: [
          'PHP',
          'Laravel',
          'TypeScript',
          'Next.js',
          'MySQL',
          'Docker',
          'Redis',
          'DirectAdmin',
          'SIDN',
          'DNS Servers',
        ],
      },
      {
        logoSrc: './assets/companies/reviced.png',
        name: 'Reviced B.V.',
        location: 'Meppel',
        position: {
          nl: 'Freelance Software Engineer',
          en: 'Freelance Software Engineer',
        },
        started: {
          nl: 'September 2012',
          en: 'September 2012',
        },
        ended: {
          nl: 'November 2018',
          en: 'November 2018',
        },
        summary: {
          nl: 'Vlak voor de migratie naar een nieuw platform heb ik een datasynchronisatietool gemaakt en onderhouden. Daarnaast heb ik een compleet hostingmanagementsysteem inclusief website gebouwd en voor het platform diverse modules en koppelingen ontwikkeld en onderhouden.',
          en: 'Just before the migration to a new platform, built and maintained a data synchronization tool. Also developed a complete hosting management system including the website, and built and maintained various modules and integrations for the platform.',
        },
        technologies: [
          'PHP',
          'Laravel',
          'Vagrant',
          'MySQL',
          'Docker',
          'Redis',
          'DirectAdmin',
          'SIDN',
          'DNS Servers',
          'Open Stack',
          'Proxmox',
          'PowerDNS',
        ],
      },
    ],
  },

  credits: {
    message: {
      nl: 'Leuk weetje: dit cv is gegenereerd met code, bekijk de code op GitHub.',
      en: 'Fun fact: This resume was generated using code, check out the code on GitHub.',
    },
    url: 'https://github.com/kevinvdburgt/resume',
  },
} satisfies ResumeContent;
