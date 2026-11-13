// MOCK DATA ONLY - Frontend sample data for Silent Help feed
// Never contains real production user data or personally identifiable information.

export const MOCK_POSTS = [
  {
    id: 'post-1',
    author: {
      name: 'Silent Wanderer #482',
      avatarInitial: 'S',
      isAnonymous: true,
      color: '#8b5cf6',
      badge: 'Anonymous Soul',
    },
    category: 'Mental Wellbeing',
    categorySlug: 'mental-wellbeing',
    createdAt: '25 minutes ago',
    timestamp: '2026-11-13T17:30:00Z',
    title: 'Learning to breathe through sudden waves of panic',
    content: `For the past two months, my chest gets tight out of nowhere, especially during quiet evenings. Everyone around me thinks I have everything under control because I keep smiling at work and saying "I am fine". 

In reality, there are moments where just sitting in my room feels overwhelming. Today was the first time I tried a simple 4-7-8 breathing exercise that someone mentioned here. While it didn't cure my anxiety entirely, it helped me feel grounded enough to write this. 

If anyone else is feeling like their thoughts are running faster than their breath tonight, please know you are not alone. We will take it one hour at a time.`,
    supportCount: 47,
    commentCount: 12,
    isSupported: false,
    isSaved: false,
    tags: ['Anxiety', 'Breathing', 'OvercomingPanic'],
    feedType: ['all', 'latest', 'recommended'],
    commentsPreview: [
      {
        id: 'c-1',
        author: 'Kind Listener #104',
        text: 'The 4-7-8 method saved me so many times. Proud of you for recognizing what your body needs.',
        time: '18 mins ago',
      },
      {
        id: 'c-2',
        author: 'Peaceful Echo #89',
        text: 'Holding space for you tonight. You did a brave thing by sharing this.',
        time: '10 mins ago',
      },
    ],
  },
  {
    id: 'post-2',
    author: {
      name: 'Priya Sharma',
      avatarInitial: 'P',
      isAnonymous: false,
      color: '#a855f7',
      badge: 'Community Member',
    },
    category: 'Career & Work',
    categorySlug: 'career-work',
    createdAt: '1 hour ago',
    timestamp: '2026-11-13T16:50:00Z',
    title: 'Failing three job interviews in one week, but refusing to give up',
    content: `Got the third rejection email this afternoon. It was for a role I prepared 3 weeks for. The imposter syndrome hit hard initially, questioning whether 4 years in my field meant anything at all.

I took a walk, drank a glass of water, and spoke to a mentor. I realized one rejection—or even ten—is not an assessment of my human value. It is just an outcome of fit and timing. 

Posting publicly because I know so many tech and creative graduates are facing the same quiet rejections right now. Let us be gentle with ourselves. Our worth is not tied to a hiring manager's checkbox.`,
    supportCount: 89,
    commentCount: 24,
    isSupported: true,
    isSaved: true,
    tags: ['CareerAdvice', 'JobHunt', 'Resilience'],
    feedType: ['all', 'latest', 'following', 'recommended'],
    commentsPreview: [
      {
        id: 'c-3',
        author: 'Silent Seeker #991',
        text: 'Needed this exact reminder today. Got rejected by my dream company yesterday.',
        time: '45 mins ago',
      },
    ],
  },
  {
    id: 'post-3',
    author: {
      name: 'Quiet Thinker #715',
      avatarInitial: 'Q',
      isAnonymous: true,
      color: '#7c3aed',
      badge: 'Anonymous Soul',
    },
    category: 'Relationships',
    categorySlug: 'relationships',
    createdAt: '3 hours ago',
    timestamp: '2026-11-13T14:45:00Z',
    title: 'Setting boundaries with parents without feeling guilty',
    content: `Growing up in a traditional household, saying "no" to parents was always seen as disrespect. But now in my mid-twenties, constantly absorbing their unresolved tensions while trying to build my own life has drained me completely.

Last weekend, for the first time, I calmly told my father that I could not attend a family confrontation because my mental health was fragile. He was surprised, and there was heavy silence.

The guilt inside me was intense for two days. But today, I woke up without the sinking feeling in my stomach. Boundary setting feels uncomfortable at first because we are breaking generations of silent suffering. Has anyone else walked this path? How did you deal with the lingering remorse in the beginning?`,
    supportCount: 132,
    commentCount: 38,
    isSupported: false,
    isSaved: false,
    tags: ['FamilyDynamics', 'Boundaries', 'EmotionalGrowth'],
    feedType: ['all', 'latest', 'recommended'],
    commentsPreview: [
      {
        id: 'c-4',
        author: 'Gentle Harbor #55',
        text: 'Guilt is the price of admission to healthy self-respect. It softens with time. Keep standing your ground.',
        time: '2 hours ago',
      },
    ],
  },
  {
    id: 'post-4',
    author: {
      name: 'Hopeful Horizon #209',
      avatarInitial: 'H',
      isAnonymous: true,
      color: '#9333ea',
      badge: 'Anonymous Soul',
    },
    category: 'Education',
    categorySlug: 'education',
    createdAt: '5 hours ago',
    timestamp: '2026-11-13T12:30:00Z',
    title: 'Final semester exhaustion is real, please don’t forget to sleep',
    content: `To anyone pulling their third all-nighter for semester submissions: your GPA matters, but your physical and emotional sanity matters infinitely more. 

I collapsed from dehydration and sleep deprivation two days before my internal review last year. What I learned the hard way is that no academic milestone is worth burning out your nervous system. Take thirty minutes away from your screen. Eat a nutritious meal. A rested brain solves equations twice as fast anyway.`,
    supportCount: 76,
    commentCount: 14,
    isSupported: false,
    isSaved: false,
    tags: ['StudentLife', 'ExamStress', 'SelfCare'],
    feedType: ['all', 'latest'],
    commentsPreview: [],
  },
  {
    id: 'post-5',
    author: {
      name: 'Arjun Mehta',
      avatarInitial: 'A',
      isAnonymous: false,
      color: '#6d28d9',
      badge: 'Community Member',
    },
    category: 'Personal Growth',
    categorySlug: 'personal-growth',
    createdAt: '8 hours ago',
    timestamp: '2026-11-13T09:15:00Z',
    title: 'One full year without alcohol: what changed inside my mind',
    content: `Today marks 365 days of sobriety. When I stopped drinking, I thought I was giving up social fun. What I actually gained was my own presence.

1. Mornings are no longer filled with dread or anxiety flashbacks.
2. I learned how to process anger and sadness instead of muting them.
3. My relationships became authentic—friends who only wanted to drink together slowly drifted, but genuine connections deepened.

If you are thinking of taking a break from any dependency, take it one single weekend at a time. The clarity on the other side is worth every awkward social moment.`,
    supportCount: 215,
    commentCount: 52,
    isSupported: true,
    isSaved: true,
    tags: ['Sobriety', 'MentalClarity', 'Milestones'],
    feedType: ['all', 'following', 'recommended'],
    commentsPreview: [
      {
        id: 'c-5',
        author: 'Silent Wanderer #482',
        text: 'Congratulations Arjun! Celebrating your huge milestone with you.',
        time: '6 hours ago',
      },
    ],
  },
  {
    id: 'post-6',
    author: {
      name: 'Gentle Soul #303',
      avatarInitial: 'G',
      isAnonymous: true,
      color: '#c084fc',
      badge: 'Anonymous Soul',
    },
    category: 'Life Challenges',
    categorySlug: 'life-challenges',
    createdAt: '1 day ago',
    timestamp: '2026-11-12T16:00:00Z',
    title: 'Grief does not follow a clean 5-step calendar',
    content: `It has been 14 months since I lost my older sister. People around me think because I go to work and smile in pictures, I have "moved on". 

Yesterday in the grocery aisle, I saw her favorite brand of cardamom tea and burst into tears right by the checkout counter. Grief is not linear. It ebbs and flows like waves on a stormy shore. 

If you are carrying a loss today that nobody else seems to remember anymore, I remember you. Your sorrow has a seat at the table here. Take all the time you need.`,
    supportCount: 310,
    commentCount: 68,
    isSupported: false,
    isSaved: true,
    tags: ['GriefSupport', 'Loss', 'HealingJourney'],
    feedType: ['all', 'recommended'],
    commentsPreview: [
      {
        id: 'c-6',
        author: 'Quiet River #720',
        text: 'Cardamom tea made me tear up reading this. Sending you love across the screen.',
        time: '18 hours ago',
      },
    ],
  },
  {
    id: 'post-7',
    author: {
      name: 'Quiet River #720',
      avatarInitial: 'Q',
      isAnonymous: true,
      color: '#8b5cf6',
      badge: 'Anonymous Soul',
    },
    category: 'General Discussion',
    categorySlug: 'general-discussion',
    createdAt: '2 days ago',
    timestamp: '2026-11-11T19:30:00Z',
    title: 'What small thing made you feel a spark of happiness this week?',
    content: `Sometimes reading everyone's heavy struggles makes me want to pause and ask for a little light. 

For me: I noticed a pigeon built a nest on my balcony flowerpot, and today two tiny chicks hatched. It reminded me that life continues quietly even when the world feels loud.

What is one tiny, ordinary moment that made you smile this week? No accomplishment is too small to mention.`,
    supportCount: 164,
    commentCount: 45,
    isSupported: false,
    isSaved: false,
    tags: ['Gratitude', 'DailyMoments', 'CommunityLove'],
    feedType: ['all', 'latest'],
    commentsPreview: [
      {
        id: 'c-7',
        author: 'Silent Wanderer #482',
        text: 'A colleague made me a cup of warm ginger chai without me even asking.',
        time: '1 day ago',
      },
    ],
  },
];
