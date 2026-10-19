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
        nl: 'Senior fullstack developer met meer dan tien jaar ervaring in verschillende programmeertalen en cloudplatformen. Sterk in schaalbare architecturen, security en performance. Analytisch, pragmatisch en gericht op kwaliteit. In mijn vrije tijd experimenteer ik graag met nieuwe technologieën, om te ontdekken wat ze kunnen en waar ik ze kan inzetten.',
        en: 'Senior fullstack developer with over a decade of experience in various programming languages and cloud platforms. Strong in scalable architectures, security, and performance. Analytical, pragmatic, and quality-focused. In my spare time I love experimenting with new technologies, to find out what they can do and where I can use them.',
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
        nl: 'TypeScript, JavaScript, Rust, PHP, Golang, C#, Java, Kotlin, C++, C.',
        en: 'TypeScript, JavaScript, Rust, PHP, Golang, C#, Java, Kotlin, C++, C.',
      },
    },
    {
      name: {
        nl: 'Tools en software',
        en: 'Tools and software',
      },
      content: {
        nl: 'Agile/Scrum, Linux, macOS, Windows, Docker, k8s, GitHub Actions, Ansible, Nginx, Traefik, MySQL, PostgreSQL, Redis, MongoDB, ClickHouse, MinIO, Directus, Grafana, Prometheus, Sentry, Tailscale, Proxmox, pnpm, oxc, Mollie, ElevenLabs, OpenAI API, Affinity, Figma, Claude Code, Codex.',
        en: 'Agile/Scrum, Linux, macOS, Windows, Docker, k8s, GitHub Actions, Ansible, Nginx, Traefik, MySQL, PostgreSQL, Redis, MongoDB, ClickHouse, MinIO, Directus, Grafana, Prometheus, Sentry, Tailscale, Proxmox, pnpm, oxc, Mollie, ElevenLabs, OpenAI API, Affinity, Figma, Claude Code, Codex.',
      },
    },
    {
      name: {
        nl: 'Tech stack',
        en: 'Tech stack',
      },
      content: {
        nl: 'React, React Native, Expo, Tauri, Next.js, TanStack, Vue.js, Vite, Tailwind CSS, Base UI, Redux, Zustand, React Hook Form, Node.js, Express, Hono, NestJS, Laravel, GraphQL, Socket.IO, Prisma, Kysely, Zod, Vitest, Tokio, Axum, SQLx, SIP, RTP, OpenCV, OAuth2, OpenID Connect, WebAuthn, mTLS.',
        en: 'React, React Native, Expo, Tauri, Next.js, TanStack, Vue.js, Vite, Tailwind CSS, Base UI, Redux, Zustand, React Hook Form, Node.js, Express, Hono, NestJS, Laravel, GraphQL, Socket.IO, Prisma, Kysely, Zod, Vitest, Tokio, Axum, SQLx, SIP, RTP, OpenCV, OAuth2, OpenID Connect, WebAuthn, mTLS.',
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
        logoSrc: './assets/companies/talkip.png',
        name: 'TalkIP',
        location: 'Dronten',
        position: {
          nl: 'Founder',
          en: 'Founder',
        },
        started: {
          nl: 'Oktober 2026',
          en: 'October 2026',
        },
        ended: {
          nl: 'Heden',
          en: 'Present',
        },
        summary: {
          nl: "Ontwikkeling van TalkIP, een virtuele telefooncentrale voor zakelijk bellen. Dit omvat een eigen PBX in Rust, een TypeScript-backend met Hono en Kysely, een website en beheerpaneel in TanStack Start, en softphones voor desktop (Tauri) en mobiel (Expo). Daarnaast AI-agents, transcripties en samenvattingen van gesprekken, IVR's, belgroepen, workflows en facturatie.",
          en: 'Developing TalkIP, a virtual phone system for business calling. This includes a custom PBX in Rust, a TypeScript backend with Hono and Kysely, a website and admin panel in TanStack Start, and softphones for desktop (Tauri) and mobile (Expo). Also AI agents, call transcription and summaries, IVRs, ring groups, workflows, and billing.',
        },
        technologies: [
          'Rust',
          'TypeScript',
          'SIP/VoIP',
          'Hono',
          'TanStack Start',
          'React Native',
          'Tauri',
          'PostgreSQL',
          'Docker',
          'ElevenLabs',
        ],
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

  personalProjects: {
    name: {
      nl: 'Persoonlijke projecten',
      en: 'Personal projects',
    },
    items: [
      {
        name: 'Retech',
        summary: {
          nl: 'Platform voor het beheren van community-gameservers. Begonnen als systeem dat alle in-game voicechat opnam en met Whisper.cpp omzette naar tekst. Bij trefwoorden die wezen op toxisch gedrag werden beheerders gewaarschuwd, zodat zij met bewijs van wat er gebeurde actie konden ondernemen. Later uitgebreid met realtime mapviewers, ticketafhandeling en andere beheertools.',
          en: 'Platform for managing community game servers. Started as a system that recorded all in-game voice chat and transcribed it with Whisper.cpp. When keywords indicating toxic behavior were detected, administrators were notified and could take action backed by proof of what happened. Later expanded with real-time map viewers, ticket handling, and other management tools.',
        },
        technologies: [
          'TypeScript',
          'Node.js',
          'Hono',
          'C#',
          'Whisper.cpp',
          'Kafka',
          'Protobuf',
          'WebSockets',
          'PostgreSQL',
          'MinIO',
          'Docker',
        ],
      },
      {
        name: 'Parcel alarm',
        summary: {
          nl: 'Computer vision op de feed van mijn UniFi-camera die herkent wanneer er een pakketbezorger naar mijn huis loopt. Mijn kantoor-tv schakelt dan over naar die camerabeelden en speelt een pakketalarm af, zodat ik al ruim voordat er wordt aangebeld weet dat er een pakket aankomt.',
          en: 'Computer vision on my UniFi camera feed that detects when a parcel courier walks up to my house. My office TV then switches to that camera feed and plays a parcel alarm, so I know a delivery is coming well before the doorbell rings.',
        },
        technologies: ['Computer vision', 'OpenCV', 'UniFi Protect'],
      },
      {
        name: 'Spotify Playlist Generator',
        summary: {
          nl: 'Dagelijks bijgewerkte discovery-playlists per genre, als uitgebreider alternatief voor de wekelijkse playlist van Spotify. Nummers worden gevonden via zoekopdrachten, door Spotify samengestelde playlists en nieuwe releases, en gefilterd op jaar, populariteit en lengte. Nummers die ik uit een playlist verwijder komen nooit meer terug, nummers die ik like worden bijgehouden en van elke dag wordt een snapshot bewaard, zodat ik eerder gegenereerde playlists kan terugkijken.',
          en: "Daily-updated genre discovery playlists, built as a more extensive alternative to Spotify's weekly playlist. Tracks are discovered through search, Spotify-curated playlists, and new releases, then filtered by year, popularity, and duration. Tracks I remove from a playlist never come back, tracks I like are recorded, and a daily snapshot is kept so I can browse previously generated playlists.",
        },
        technologies: ['TypeScript', 'Bun', 'Spotify Web API', 'OAuth2', 'GitHub Actions'],
      },
      {
        name: 'Resume',
        summary: {
          nl: "Dit cv, gegenereerd met code. De inhoud staat in één getypeerd bestand, waaruit met React-componenten een Nederlandse en Engelse PDF worden opgebouwd, inclusief een preview-afbeelding voor de README. Bij elke wijziging bouwt GitHub Actions de PDF's opnieuw en publiceert ze, zodat de downloadlinks altijd de nieuwste versie geven.",
          en: 'This resume, generated with code. The content lives in a single typed file, from which React components build a Dutch and an English PDF, including a preview image for the README. On every change, GitHub Actions rebuilds and publishes the PDFs, so the download links always serve the latest version.',
        },
        technologies: ['TypeScript', 'React', 'React PDF', 'Node.js', 'oxc', 'GitHub Actions'],
      },
      {
        name: 'Ludum Dare',
        summary: {
          nl: 'Deelname aan de Ludum Dare Compo: in 48 uur in je eentje een complete game bouwen rond een thema dat pas bij de start bekend wordt. Meerdere keren meegedaan met 2D- en 3D-browsergames. Ik doe graag mee aan meer hackathons en game jams.',
          en: 'Took part in the Ludum Dare Compo: building a complete game solo in 48 hours around a theme that is only revealed at the start. Entered several times with 2D and 3D browser games. Always keen to join more hackathons and game jams.',
        },
        technologies: ['JavaScript', 'HTML5 Canvas', 'Three.js', 'WebGL'],
      },
      {
        name: 'Home automation',
        summary: {
          nl: 'Apparaten die niet met mijn Home Assistant-installatie kunnen verbinden, maak ik zelf slim. Ik open bijvoorbeeld een koffiezetapparaat, zoek uit hoe de printplaten werken en soldeer er een ESP32 op, zodat ik het vanuit Home Assistant kan bedienen.',
          en: "Devices that can't connect to my Home Assistant setup, I make smart myself. For example, I open up a coffee maker, figure out how its circuit boards work, and solder an ESP32 onto it so I can control it from Home Assistant.",
        },
        technologies: ['ESP32', 'Home Assistant', 'C++', 'Rust', 'Electronics', 'Soldering'],
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
