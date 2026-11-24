export type RoutePath = '/' | '/expertise' | '/about' | '/contact';

export interface NavItem {
  label: string;
  path: RoutePath;
}

export interface MediaAsset {
  src: string;
  alt: string;
}

export const SITE_MEDIA: Record<
  | 'seedlingsHero'
  | 'seedLabPlate'
  | 'seedPlant'
  | 'whiteboardPlanning'
  | 'soybeanField'
  | 'androPortrait'
  | 'expertiseNetwork',
  MediaAsset
> = {
  seedlingsHero: {
    src: '/assets/aistudio/10_3c410626.png',
    alt: 'Sprouting cereal seedlings with vigorous white root system against dark studio background',
  },
  seedLabPlate: {
    src: '/assets/aistudio/9_13eecbdd.jpg',
    alt: 'Laboratory specialist placing a single seed into a 96-well microplate using sterile forceps',
  },
  seedPlant: {
    src: '/assets/aistudio/11_546e3bc4.png',
    alt: 'Industrial stainless-steel seed treatment and processing facility machinery',
  },
  whiteboardPlanning: {
    src: '/assets/aistudio/12_4a52eef0.png',
    alt: 'Technical project leader presenting a structured implementation timeline on a whiteboard',
  },
  soybeanField: {
    src: '/assets/aistudio/13_ead9a15f.jpg',
    alt: 'Uniform rows of healthy green soybean crops thriving in agricultural field conditions',
  },
  androPortrait: {
    src: '/assets/aistudio/14_08abbb15.jpg',
    alt: 'Studio portrait of Andro Tjin, founder and principal consultant of SiriGro',
  },
  expertiseNetwork: {
    src: '/assets/aistudio/15_9bc8db78.png',
    alt: 'SiriGro multidisciplinary expertise network spanning seed technology, chemistry, microbiology, polymer science, biostimulants, industrial processing and project management',
  },
};

export const COMPANY_INFO = {
  brand: 'SiriGro',
  tagline: 'Bridging science and industry',
  founderName: 'Andro Tjin',
  founderRole: 'Founder, SiriGro',
  phoneDisplay: '+31 6 2079 2252',
  phoneHref: 'tel:+31620792252',
  email: 'info@sirigro.com',
  emailHref: 'mailto:info@sirigro.com',
  address: 'P.O. Box 1, 6720 AA Bennekom, The Netherlands',
  kvk: '42143458',
  vat: 'NL005530880B31',
  linkedinUrl: 'https://www.linkedin.com/in/AndroTjin',
  footerSummary:
    'Independent technical consultancy for the seed and adjacent industries — connecting plant science, seed technology, industrial processing and commercial implementation.',
} as const;

export const NAV_ITEMS: NavItem[] = [
  {label: 'Home', path: '/'},
  {label: 'Expertise', path: '/expertise'},
  {label: 'About', path: '/about'},
  {label: 'Contact', path: '/contact'},
];

export const HOME_CONTENT = {
  hero: {
    kicker: 'Independent technical consultancy',
    headline: 'Bridging science and industry.',
    subheadlineHighlight: 'Turning innovation into application',
    subtitle:
      'Independent technical consultancy for the seed and adjacent industries — from plant science and seed technology to seed processing, product development and commercial implementation.',
    primaryCta: 'Get in touch',
    secondaryCta: 'Explore expertise',
  },
  whySirigro: {
    kicker: 'Why SiriGro',
    headline: 'Great technology does not automatically translate into successful applications',
    experienceYears: '25+',
    experienceLabel: 'Years of international experience in the seed industry',
    paragraphs: [
      'Whether you are developing a new technology, improving an existing process or preparing an innovation for commercial introduction, success requires more than scientific promise. It requires a deep understanding of biology, process technology, quality requirements and practical implementation.',
      'Moving from promising research to a robust, reproducible and commercially viable seed-based solution requires connecting technical detail with practical and operational reality.',
      'SiriGro connects disciplines. With more than 25 years of international experience in the seed industry, I support organisations in turning technical opportunities into practical, workable solutions.',
    ],
    ctaLabel: 'About Andro',
  },
  capabilities: {
    kicker: 'What I offer',
    headline: 'Connecting technology, processes and commercial reality',
    items: [
      {
        title: 'Seed science & technology',
        summary:
          'R&D consultancy, process optimisation and specialist expertise in seed physiology, enhancement, treatment and processing.',
        media: SITE_MEDIA.soybeanField,
      },
      {
        title: 'Technology validation & biologicals',
        summary:
          'Assessing emerging technologies and building competence in plant–microbe interaction and biological seed solutions.',
        media: SITE_MEDIA.seedLabPlate,
      },
      {
        title: 'Industrial implementation & project leadership',
        summary:
          'Bridging research, product development and industrial processing — from initial scoping to implementation.',
        media: SITE_MEDIA.seedPlant,
      },
    ],
  },
  howIWork: {
    kicker: 'How I work',
    headline: 'Practical, independent support shaped around your goals',
    items: [
      {
        title: 'Flexible engagement',
        description:
          'Individual technical questions, defined projects or interim assignments — depending on what your organisation needs.',
      },
      {
        title: 'Troubleshooting',
        description:
          'Investigating pressing technical problems in seed processing or product development, and implementing robust solutions.',
      },
      {
        title: 'Interim technical leadership',
        description:
          'Experienced leadership for multidisciplinary innovation and technology projects, from initial scoping to operational rollout.',
      },
    ],
  },
} as const;

export const EXPERTISE_CONTENT = {
  intro: {
    kicker: 'Expertise',
    headline: 'Connecting technology, processes and commercial reality',
    subtitle: 'Independent expertise across the seed technology value chain',
    paragraphs: [
      'Agriculture is facing increasing pressure from climate change, drought, emerging plant diseases, and growing regulatory and consumer demand to reduce chemical crop protection products and mineral fertilizers.',
      'At the same time, new biological and technological innovations are rapidly emerging. Turning these developments into viable, reliable seed-based applications requires translating science into operational processes, rigorous testing strategies, validation workflows, product development and sound commercial decision-making.',
    ],
  },
  pillars: [
    {
      id: 'seed-science',
      eyebrow: 'Core Pillar 01',
      title: 'Seed science & technology',
      media: SITE_MEDIA.soybeanField,
      offerings: [
        {
          heading: 'R&D consultancy & process optimisation',
          body: 'Improving R&D approaches, development processes and technical workflows to accelerate progress and improve practical outcomes.',
        },
        {
          heading: 'Seed technology & physiology',
          body: 'Specialist expertise in seed physiology, enhancement, treatment, conditioning, storage and processing.',
        },
      ],
    },
    {
      id: 'validation-biologicals',
      eyebrow: 'Core Pillar 02',
      title: 'Technology validation & biologicals',
      media: SITE_MEDIA.seedLabPlate,
      offerings: [
        {
          heading: 'Technology validation & transfer',
          body: 'Assessing emerging technologies and helping your organisation translate external innovations into practical, validated applications.',
        },
        {
          heading: 'Microbiology & biologicals',
          body: 'Helping to build your organisation’s competency in plant–microbe interaction, biological solutions, efficacy testing, formulation, stability and shelf-life challenges in seed applications.',
        },
      ],
    },
    {
      id: 'industrial-implementation',
      eyebrow: 'Core Pillar 03',
      title: 'Industrial implementation & project leadership',
      media: SITE_MEDIA.seedPlant,
      offerings: [
        {
          heading: 'Your partner from R&D to market',
          body: 'Bridging the gap between research, commercial product development and industrial processing operations.',
        },
        {
          heading: 'Project & interim management',
          body: 'Providing experienced technical leadership for multidisciplinary innovation and technology projects, from initial scoping through implementation.',
        },
      ],
    },
  ],
  howIWork: {
    kicker: 'How I work',
    headline: 'Flexible engagement tailored to your organisation',
    description:
      'SiriGro works on individual technical questions, defined projects or interim assignments, depending on the needs of the organisation.',
    media: SITE_MEDIA.whiteboardPlanning,
  },
  troubleshooting: {
    kicker: 'Problem-Solving & Tailored Support',
    headline: 'Troubleshooting & technical problem-solving',
    paragraphs: [
      'When organisations face pressing technical challenges in seed processing, product development or technology performance, SiriGro provides focused troubleshooting and technical problem-solving.',
      'By investigating root causes and combining practical industry experience with up-to-date scientific insight, I help organisations identify solutions that work in practice and hold up under operational conditions.',
    ],
    tailoredTitle: 'My service is tailored to your needs',
    tailoredItems: [
      'Troubleshooting or support with process optimisation',
      'Independent technical advice and reviews',
      'Project-based consultancy',
      'Technology assessments and validation support',
      'Interim technical leadership',
    ],
  },
  networkSection: {
    kicker: 'Multidisciplinary Ecosystem',
    headline: 'Connecting disciplines across the seed technology spectrum',
    description:
      'Seed innovation rarely sits within a single scientific silo. SiriGro bridges plant-microbe interactions, chemistry, microbiology, polymer science, biostimulants, quality control and industrial processing under unified technical project management.',
    media: SITE_MEDIA.expertiseNetwork,
  },
} as const;

export const ABOUT_CONTENT = {
  intro: {
    kicker: 'About',
    headline: 'Experience that connects science with industry.',
    lead: 'SiriGro combines deep technical knowledge in seed technology and plant science with hands-on leadership across R&D, industrial processing and commercial implementation.',
    media: SITE_MEDIA.soybeanField,
  },
  founder: {
    kicker: 'Founder, SiriGro',
    name: 'Andro Tjin',
    paragraphs: [
      'Andro Tjin is an independent technical consultant with more than 25 years of international experience in the seed and adjacent industries.',
      'His career spans R&D, Seed Physiology, Seed Enhancement Technology, Industrial Processing and Commercial Product Development. Over the past decades, he has worked with leading international organisations including Monsanto (now part of Bayer), Syngenta and Royal Barenbrug.',
      'This breadth of experience enables him to assess technical challenges from both a scientific perspective and an operational, market-driven viewpoint.',
    ],
    organisations: ['Monsanto (Bayer)', 'Syngenta', 'Royal Barenbrug'],
  },
  approach: {
    kicker: 'My approach',
    headline: 'Senior expertise, available independently and flexibly',
    paragraphs: [
      'Innovation projects frequently require senior technical expertise that combines out-of-the-box thinking, technical feasibility and commercial reality. With SiriGro, that experience is available flexibly and independently — from focused advisory work to hands-on project execution.',
      'Whether evaluating an emerging biological technology, resolving bottlenecks in seed treatment lines or guiding a multidisciplinary team from concept to industrial scale-up, every engagement is grounded in scientific rigour and operational practicality.',
    ],
  },
  network: {
    kicker: 'Collaboration',
    headline: 'A network beyond one discipline',
    description:
      'Where projects require additional specialist knowledge, SiriGro can connect with complementary experts and external partners to bring the right capabilities together.',
    media: SITE_MEDIA.expertiseNetwork,
  },
} as const;

export const CONTACT_CONTENT = {
  kicker: 'Get in Touch',
  headline: 'From challenge to opportunity',
  leadHeading: "Let's talk",
  leadBody:
    'Whether you are developing a new technology, evaluating a biological solution, improving an existing process or looking for experienced technical support, I am happy to explore how I can help.',
} as const;

export const CTA_BANNER = {
  headline: 'From challenge to opportunity.',
  subcopy:
    'Discuss your seed technology, biological validation, processing or interim leadership needs directly with Andro Tjin.',
  buttonLabel: 'Contact',
} as const;
