// MOCK DATA ONLY - Frontend sample widgets data
// Note: Community statistics are mock sample metrics for UI demonstration purposes only.

export const TRENDING_TOPICS = [
  { tag: '#AnxietyRelief', postsCount: '2.4k posts', category: 'Mental Wellbeing' },
  { tag: '#OvercomingBurnout', postsCount: '1.8k posts', category: 'Career & Work' },
  { tag: '#HealthyBoundaries', postsCount: '1.2k posts', category: 'Relationships' },
  { tag: '#ExamPressure', postsCount: '980 posts', category: 'Education' },
  { tag: '#SmallVictories', postsCount: '750 posts', category: 'Personal Growth' },
];

export const COMMUNITY_STATS = {
  isMockData: true,
  disclaimer: 'Frontend UI Demo Data',
  metrics: [
    { label: 'Anonymous Stories', value: '18,400+', icon: 'ShieldAlert', description: 'Safely shared voices' },
    { label: 'Words of Support', value: '94,200+', icon: 'Heart', description: 'Empathetic responses' },
    { label: 'Active Listeners', value: '2,800+', icon: 'Users', description: 'Available peer supporters' },
    { label: 'Safe Moderation', value: '99.8%', icon: 'ShieldCheck', description: 'Respectful atmosphere' },
  ],
};

export const SUPPORT_RESOURCES = [
  {
    name: 'Tele-MANAS (Govt. of India)',
    number: '14416 / 1800 891 4416',
    hours: '24/7 • Toll-Free • Multi-language',
    type: 'Emergency Helpline',
    available: true,
  },
  {
    name: 'Vandrevala Foundation',
    number: '+91 9999 666 555',
    hours: '24/7 • Free Counseling via Call/WhatsApp',
    type: 'Mental Health Support',
    available: true,
  },
  {
    name: 'KIRAN Mental Health',
    number: '1800-599-0019',
    hours: '24/7 • Toll-Free Support',
    type: 'National Helpline',
    available: true,
  },
  {
    name: 'AASRA Crisis Line',
    number: '+91 98204 66726',
    hours: '24/7 • Confidential Listening',
    type: 'Crisis Helpline',
    available: true,
  },
];

export const MOCK_NOTIFICATIONS = [
  {
    id: 'n-1',
    type: 'support',
    text: 'Silent Wanderer #482 and 3 others supported your post "Learning to breathe..."',
    time: '12 mins ago',
    read: false,
  },
  {
    id: 'n-2',
    type: 'comment',
    text: 'Priya Sharma left a warm response on your shared story in Mental Wellbeing.',
    time: '45 mins ago',
    read: false,
  },
  {
    id: 'n-3',
    type: 'system',
    text: 'Welcome to Silent Help! Your privacy is protected with automated anonymous aliases.',
    time: '2 hours ago',
    read: true,
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Share Anonymously',
    description: 'Post your deepest thoughts, struggles, or questions without exposing your real identity or face.',
    iconName: 'Shield',
  },
  {
    step: '02',
    title: 'Receive Genuine Empathy',
    description: 'Get warm, non-judgmental support, practical advice, and encouragement from peers who truly understand.',
    iconName: 'Heart',
  },
  {
    step: '03',
    title: 'Heal & Grow Together',
    description: 'Track your emotional journey, save helpful wisdom, and discover that you were never alone in the quiet.',
    iconName: 'Sparkles',
  },
];

export const COMMUNITY_GUIDELINES_SUMMARY = [
  {
    title: 'Empathy First',
    description: 'Every voice here is vulnerable. Approach every post with kindness, respect, and emotional care.',
    iconName: 'Smile',
  },
  {
    title: 'Strict Anonymity',
    description: 'Never reveal your own or another member’s phone numbers, emails, addresses, or identifying details.',
    iconName: 'Lock',
  },
  {
    title: 'Zero Harassment',
    description: 'Trolling, hate speech, bullying, or invalidation of feelings results in immediate account suspension.',
    iconName: 'ShieldAlert',
  },
  {
    title: 'Constructive Encouragement',
    description: 'Offer uplifting perspective rather than harsh criticism. If you cannot help, do no harm.',
    iconName: 'MessageSquareHeart',
  },
];
