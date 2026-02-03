export const siteConfig = {
  name: 'Melody Dash',
  tagline: 'Dodge the cubes. Sync with the beat.',
  description:
    'Melody Dash is a neon-fueled rhythm runner where every swipe matches the soundtrack. Collect keys, open treasure chests, and build your combo.',
  cta: {
    primary: {
      label: 'Download on Google Play',
      href: '#'
    },
    secondary: {
      label: 'Join Discord',
      href: '#'
    }
  },
  socials: [
    { label: 'YouTube', href: '#' },
    { label: 'X (Twitter)', href: '#' },
    { label: 'TikTok', href: '#' },
    { label: 'Instagram', href: '#' }
  ],
  features: [
    { title: 'Beat-synced gameplay', description: 'Feel every obstacle hit the rhythm as you glide.' },
    { title: 'Classic endless mode', description: 'Chase high scores in a nonstop neon runway.' },
    { title: 'Adventure levels', description: 'Take on tricky challenges across crafted stages.' },
    { title: 'Keys & mini-games', description: 'Collect keys, unlock bonus rooms, and test reflexes.' },
    { title: 'Treasures shop', description: 'Trade keys for chests packed with coins and emeralds.' },
    { title: 'Skins & inventory', description: 'Customize your dash hero with glowing skins and trails.' }
  ],
  howToPlay: [
    {
      title: 'Sync with the beat',
      description: 'Listen to the soundtrack and time your moves for bonus boosts.'
    },
    {
      title: 'Dodge & collect',
      description: 'Avoid incoming cubes while grabbing keys and gems along the track.'
    },
    {
      title: 'Open treasures',
      description: 'Cash in keys to unlock chests, upgrades, and rare skins.'
    }
  ],
  modes: {
    classic: {
      title: 'Classic Mode',
      description: 'An endless neon runway with escalating tempo. Survive as long as you can.'
    },
    adventure: {
      title: 'Adventure Mode',
      description: 'Hand-crafted levels packed with puzzles, shortcuts, and boss beats.'
    }
  },
  roadmap: [
    { title: 'Season 1: Neon Drift', timeline: 'Q2 2025', detail: 'Launch 20 adventure stages and new soundtracks.' },
    { title: 'Creator Tools', timeline: 'Q3 2025', detail: 'Level editor plus community sharing hub.' },
    { title: 'Global Tournaments', timeline: 'Q4 2025', detail: 'Live events with exclusive cosmetics and rewards.' }
  ],
  changelog: [
    { title: '1.2 Pulse Update', date: 'Mar 12, 2025', detail: 'Added boss beats and new treasure tiers.' },
    { title: '1.1 Flow Patch', date: 'Feb 3, 2025', detail: 'Improved hit feedback and swipe precision.' },
    { title: '1.0 Launch', date: 'Jan 10, 2025', detail: 'Released worldwide on iOS and Android.' }
  ],
  faq: [
    {
      question: 'Is Melody Dash free to play?',
      answer: 'Yes! The core game is free with optional cosmetic purchases.'
    },
    {
      question: 'Do I need an internet connection?',
      answer: 'Classic Mode works offline. Events and Adventure updates require online access.'
    },
    {
      question: 'How do treasures work?',
      answer: 'Collect keys during runs and open chests in the Treasures shop for rewards.'
    },
    {
      question: 'Can I play with friends?',
      answer: 'Co-op playlists are in active development for a future update.'
    },
    {
      question: 'Does the game support controllers?',
      answer: 'Bluetooth controller support is planned for a later release.'
    },
    {
      question: 'Where can I report feedback?',
      answer: 'Join our Discord to share feedback and vote on new features.'
    }
  ],
  testimonials: [
    {
      quote: '“The beat mapping is unreal. Every run feels like a music video.”',
      name: 'Aria N.',
      title: 'Rhythm game fan'
    },
    {
      quote: '“Melody Dash nails the cyberpunk vibe without sacrificing gameplay.”',
      name: 'Zane K.',
      title: 'Mobile reviewer'
    },
    {
      quote: '“Finally a runner that keeps me coming back for the soundtrack.”',
      name: 'Jules M.',
      title: 'Beta player'
    }
  ],
  screenshots: [
    {
      title: 'Neon Boulevard',
      src: '/screenshots/shot-1.svg'
    },
    {
      title: 'Adventure Vault',
      src: '/screenshots/shot-2.svg'
    },
    {
      title: 'Boss Beat',
      src: '/screenshots/shot-3.svg'
    },
    {
      title: 'Treasure Room',
      src: '/screenshots/shot-4.svg'
    },
    {
      title: 'Classic Dash',
      src: '/screenshots/shot-5.svg'
    },
    {
      title: 'Skyline Groove',
      src: '/screenshots/shot-6.svg'
    }
  ],
  pressKit: {
    description:
      'Melody Dash is a 3D mobile rhythm runner where players dodge incoming cubes, sync to the beat, and collect keys to unlock treasure chests.',
    bullets: [
      'Genre: Rhythm runner / action arcade',
      'Platforms: iOS, Android',
      'Release window: 2025',
      'Players: Single player with competitive leaderboards'
    ],
    contactEmail: 'press@melodydash.game',
    assets: [
      { label: 'Logo (dark)', href: '#' },
      { label: 'Logo (light)', href: '#' },
      { label: 'Press screenshots', href: '#' },
      { label: 'Fact sheet (PDF)', href: '#' }
    ]
  },
  trailer: {
    title: 'Official Trailer',
    videoId: 'dQw4w9WgXcQ'
  }
};

export type SiteConfig = typeof siteConfig;
