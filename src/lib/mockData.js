// ChronoClaim Mock Data
// Nigerian-focused realistic dataset for insurance platform

export const guards = [
  {
    id: 'g1',
    name: 'Ahmed Musa',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed',
    site: 'Maiduguri Base',
    state: 'Borno',
    lastCheckin: '2026-02-13T07:12:00Z',
    status: 'active',
    coverage: 'Active',
    riskZone: 'High'
  },
  {
    id: 'g2',
    name: 'Chinedu Okoye',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Chinedu',
    site: 'Kagara Outpost',
    state: 'Kaduna',
    lastCheckin: '2026-02-12T23:47:00Z',
    status: 'missed',
    coverage: 'Active',
    riskZone: 'Medium'
  },
  {
    id: 'g3',
    name: 'Suleiman Bello',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Suleiman',
    site: 'Anka Detachment',
    state: 'Zamfara',
    lastCheckin: '2026-02-12T03:05:00Z',
    status: 'mia',
    coverage: 'Suspended',
    riskZone: 'Severe'
  },
  {
    id: 'g4',
    name: 'Fatima Ibrahim',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima',
    site: 'Kano Industrial Zone',
    state: 'Kano',
    lastCheckin: '2026-02-13T09:30:00Z',
    status: 'active',
    coverage: 'Active',
    riskZone: 'Low'
  },
  {
    id: 'g5',
    name: 'John Okpara',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    site: 'Port Harcourt Terminal',
    state: 'Rivers',
    lastCheckin: '2026-02-13T06:15:00Z',
    status: 'active',
    coverage: 'Active',
    riskZone: 'Medium'
  },
  {
    id: 'g6',
    name: 'Aisha Yusuf',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha',
    site: 'Abuja CBD',
    state: 'FCT',
    lastCheckin: '2026-02-13T08:00:00Z',
    status: 'active',
    coverage: 'Active',
    riskZone: 'Low'
  },
  {
    id: 'g7',
    name: 'Emeka Eze',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emeka',
    site: 'Owerri Mall',
    state: 'Imo',
    lastCheckin: '2026-02-13T07:45:00Z',
    status: 'active',
    coverage: 'Active',
    riskZone: 'Low'
  },
  {
    id: 'g8',
    name: 'Ibrahim Bala',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ibrahim',
    site: 'Sokoto Border Post',
    state: 'Sokoto',
    lastCheckin: '2026-02-12T19:20:00Z',
    status: 'missed',
    coverage: 'Active',
    riskZone: 'High'
  },
  {
    id: 'g9',
    name: 'Ngozi Okafor',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ngozi',
    site: 'Lagos VI Office',
    state: 'Lagos',
    lastCheckin: '2026-02-13T09:00:00Z',
    status: 'active',
    coverage: 'Active',
    riskZone: 'Low'
  },
  {
    id: 'g10',
    name: 'Yusuf Adamu',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Yusuf',
    site: 'Gusau Checkpoint',
    state: 'Zamfara',
    lastCheckin: '2026-02-13T05:30:00Z',
    status: 'active',
    coverage: 'Active',
    riskZone: 'Severe'
  },
  {
    id: 'g11',
    name: 'Efe Agbonlahor',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Efe',
    site: 'Warri Depot',
    state: 'Delta',
    lastCheckin: '2026-02-12T22:10:00Z',
    status: 'missed',
    coverage: 'Active',
    riskZone: 'Medium'
  },
  {
    id: 'g12',
    name: 'Blessing Udoh',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Blessing',
    site: 'Uyo Estate',
    state: 'Akwa Ibom',
    lastCheckin: '2026-02-13T08:20:00Z',
    status: 'active',
    coverage: 'Active',
    riskZone: 'Low'
  }
];

export const mpcQueue = [
  {
    id: 'm1',
    guardId: 'g3',
    name: 'Suleiman Bello',
    location: 'Anka Detachment, Zamfara',
    state: 'Zamfara',
    pm: 94,
    timeSinceSignalLossMins: 2160,
    lastSeen: '2026-02-12T03:05:00Z',
    confidence: 'High',
    status: 'pending'
  },
  {
    id: 'm2',
    guardId: 'g5',
    name: 'John Okpara',
    location: 'Port Harcourt Terminal, Rivers',
    state: 'Rivers',
    pm: 81,
    timeSinceSignalLossMins: 480,
    lastSeen: '2026-02-12T17:00:00Z',
    confidence: 'Medium-High',
    status: 'pending'
  },
  {
    id: 'm3',
    guardId: 'g11',
    name: 'Efe Agbonlahor',
    location: 'Warri Depot, Delta',
    state: 'Delta',
    pm: 64,
    timeSinceSignalLossMins: 660,
    lastSeen: '2026-02-12T22:10:00Z',
    confidence: 'Medium',
    status: 'pending'
  },
  {
    id: 'm4',
    guardId: 'g8',
    name: 'Ibrahim Bala',
    location: 'Sokoto Border Post, Sokoto',
    state: 'Sokoto',
    pm: 72,
    timeSinceSignalLossMins: 840,
    lastSeen: '2026-02-12T19:20:00Z',
    confidence: 'Medium-High',
    status: 'pending'
  }
];

export const events = [
  {
    id: 'e1',
    time: '2026-02-13T07:12:00Z',
    text: 'Ahmed Musa checked in at Maiduguri Base',
    state: 'Borno',
    type: 'checkin',
    severity: 'safe'
  },
  {
    id: 'e2',
    time: '2026-02-13T06:25:00Z',
    text: 'Conflict reported near Anka Detachment',
    state: 'Zamfara',
    type: 'conflict',
    severity: 'critical',
    casualties: 'Unknown'
  },
  {
    id: 'e3',
    time: '2026-02-12T23:47:00Z',
    text: 'Missed check-in: Chinedu Okoye',
    state: 'Kaduna',
    type: 'alert',
    severity: 'warning'
  },
  {
    id: 'e4',
    time: '2026-02-13T09:00:00Z',
    text: 'Ngozi Okafor checked in at Lagos VI Office',
    state: 'Lagos',
    type: 'checkin',
    severity: 'safe'
  },
  {
    id: 'e5',
    time: '2026-02-13T08:20:00Z',
    text: 'Blessing Udoh checked in at Uyo Estate',
    state: 'Akwa Ibom',
    type: 'checkin',
    severity: 'safe'
  },
  {
    id: 'e6',
    time: '2026-02-13T05:30:00Z',
    text: 'Yusuf Adamu checked in at Gusau Checkpoint',
    state: 'Zamfara',
    type: 'checkin',
    severity: 'safe'
  },
  {
    id: 'e7',
    time: '2026-02-12T22:10:00Z',
    text: 'Missed check-in: Efe Agbonlahor',
    state: 'Delta',
    type: 'alert',
    severity: 'warning'
  },
  {
    id: 'e8',
    time: '2026-02-12T19:20:00Z',
    text: 'Missed check-in: Ibrahim Bala',
    state: 'Sokoto',
    type: 'alert',
    severity: 'warning'
  },
  {
    id: 'e9',
    time: '2026-02-12T15:30:00Z',
    text: 'Bandit activity reported near Sokoto Border',
    state: 'Sokoto',
    type: 'conflict',
    severity: 'high',
    casualties: '3 reported'
  },
  {
    id: 'e10',
    time: '2026-02-12T03:05:00Z',
    text: 'Signal lost: Suleiman Bello',
    state: 'Zamfara',
    type: 'alert',
    severity: 'critical'
  },
  {
    id: 'e11',
    time: '2026-02-11T18:45:00Z',
    text: 'Armed conflict near Anka, Zamfara State',
    state: 'Zamfara',
    type: 'conflict',
    severity: 'critical',
    casualties: '12+ reported'
  },
  {
    id: 'e12',
    time: '2026-02-13T06:15:00Z',
    text: 'John Okpara checked in at Port Harcourt Terminal',
    state: 'Rivers',
    type: 'checkin',
    severity: 'safe'
  }
];

export const conflictEvents = [
  {
    id: 'c1',
    location: 'Anka, Zamfara',
    state: 'Zamfara',
    eventType: 'Armed Conflict',
    severity: 'Critical',
    time: '2026-02-11T18:45:00Z',
    casualties: 12,
    description: 'Multiple casualties reported in clash between security forces and bandits',
    acledId: 'NGA2024-12345',
    affectedGuards: 1
  },
  {
    id: 'c2',
    location: 'Sokoto Border Post',
    state: 'Sokoto',
    eventType: 'Bandit Activity',
    severity: 'High',
    time: '2026-02-12T15:30:00Z',
    casualties: 3,
    description: 'Highway ambush near border checkpoint',
    acledId: 'NGA2024-12346',
    affectedGuards: 1
  },
  {
    id: 'c3',
    location: 'Maiduguri Suburbs',
    state: 'Borno',
    eventType: 'IED Attack',
    severity: 'Critical',
    time: '2026-02-10T14:20:00Z',
    casualties: 8,
    description: 'Improvised explosive device detonated near military convoy',
    acledId: 'NGA2024-12340',
    affectedGuards: 0
  },
  {
    id: 'c4',
    location: 'Kagara, Kaduna',
    state: 'Kaduna',
    eventType: 'Kidnapping Attempt',
    severity: 'Medium',
    time: '2026-02-12T21:00:00Z',
    casualties: 0,
    description: 'Attempted abduction of workers near mining site',
    acledId: 'NGA2024-12347',
    affectedGuards: 1
  },
  {
    id: 'c5',
    location: 'Warri, Delta',
    state: 'Delta',
    eventType: 'Militant Activity',
    severity: 'Medium',
    time: '2026-02-12T20:30:00Z',
    casualties: 0,
    description: 'Reports of armed groups in vicinity of oil facilities',
    acledId: 'NGA2024-12348',
    affectedGuards: 1
  }
];

export const regionalRisks = [
  {
    region: 'North West',
    states: ['Zamfara', 'Sokoto', 'Katsina', 'Kaduna'],
    severity: 'Critical',
    eventCount: 127,
    trend: 'up',
    trendPercent: 18,
    primaryThreat: 'Banditry',
    riskScore: 89
  },
  {
    region: 'North East',
    states: ['Borno', 'Yobe', 'Adamawa'],
    severity: 'Critical',
    eventCount: 94,
    trend: 'stable',
    trendPercent: -3,
    primaryThreat: 'Insurgency',
    riskScore: 92
  },
  {
    region: 'North Central',
    states: ['Niger', 'Plateau', 'Benue', 'FCT'],
    severity: 'Medium',
    eventCount: 42,
    trend: 'down',
    trendPercent: -12,
    primaryThreat: 'Communal Violence',
    riskScore: 58
  },
  {
    region: 'South South',
    states: ['Delta', 'Rivers', 'Bayelsa'],
    severity: 'Medium',
    eventCount: 31,
    trend: 'stable',
    trendPercent: 2,
    primaryThreat: 'Militancy',
    riskScore: 54
  },
  {
    region: 'South West',
    states: ['Lagos', 'Oyo', 'Osun', 'Ogun'],
    severity: 'Low',
    eventCount: 8,
    trend: 'down',
    trendPercent: -5,
    primaryThreat: 'Urban Crime',
    riskScore: 22
  },
  {
    region: 'South East',
    states: ['Imo', 'Anambra', 'Enugu', 'Abia'],
    severity: 'Low',
    eventCount: 15,
    trend: 'stable',
    trendPercent: 1,
    primaryThreat: 'Separatist Activity',
    riskScore: 34
  }
];

export const personnelClaim = {
  id: 'claim-001',
  guardId: 'g3',
  guardName: 'Suleiman Bello',
  status: 'under_review',
  filedDate: '2026-02-12T10:00:00Z',
  estimatedPayout: '₦5,000,000',
  steps: [
    {
      id: 's1',
      title: 'Event Logged',
      status: 'completed',
      date: '2026-02-12T03:05:00Z',
      description: 'Signal loss detected and conflict event correlated'
    },
    {
      id: 's2',
      title: 'Claim Filed',
      status: 'completed',
      date: '2026-02-12T10:00:00Z',
      description: 'Family submitted claim documentation'
    },
    {
      id: 's3',
      title: 'Under Insurer Review',
      status: 'in_progress',
      date: '2026-02-12T14:30:00Z',
      description: 'MPC probability calculation: 94% - Awaiting manual approval'
    },
    {
      id: 's4',
      title: 'Payout Initiated',
      status: 'pending',
      date: null,
      description: 'Bridge benefit to be disbursed upon approval'
    },
    {
      id: 's5',
      title: 'Funds Transferred',
      status: 'pending',
      date: null,
      description: 'Final payment processing'
    }
  ],
  attachments: [
    { name: 'Biometric_Records.pdf', size: '245 KB', type: 'pdf' },
    { name: 'Deployment_Certificate.pdf', size: '180 KB', type: 'pdf' },
    { name: 'NSCDC_Compliance.pdf', size: '320 KB', type: 'pdf' }
  ],
  timeline: [
    {
      date: '2026-02-12T03:05:00Z',
      event: 'Last biometric check-in recorded'
    },
    {
      date: '2026-02-12T06:00:00Z',
      event: 'Missed scheduled check-in - system alert triggered'
    },
    {
      date: '2026-02-12T08:30:00Z',
      event: 'ACLED conflict event correlated with location'
    },
    {
      date: '2026-02-12T10:00:00Z',
      event: 'Family filed bridge benefit claim'
    },
    {
      date: '2026-02-12T14:30:00Z',
      event: 'MPC calculation completed - 94% probability'
    }
  ]
};

export const metrics = {
  employer: {
    totalActiveGuards: 147,
    missingCheckins: 3,
    dailyPremium: '₦294,000',
    complianceStatus: 'Compliant',
    biometricSyncActive: true,
    coverageRate: 98.6
  },
  insurer: {
    pendingMPCReviews: 4,
    averagePm: 77.75,
    capitalChargeAvoidance: '₦42.3M',
    liquidityRatio: 1.85,
    portfolioRisk: 'Medium-High'
  },
  personnel: {
    coverageStatus: 'Active',
    lastCheckIn: '2026-02-13T09:00:00Z',
    benefitReadiness: '48-72 hours',
    policyNumber: 'CHRONO-NG-2026-001'
  }
};

export const capitalAllocation = {
  shortTerm: {
    label: 'Short-term T-Bills (90-day)',
    percentage: 35,
    amount: '₦1.75B',
    purpose: 'Liquidity buffer for parametric triggers'
  },
  longTerm: {
    label: 'FGN Bonds (Long-term)',
    percentage: 65,
    amount: '₦3.25B',
    purpose: 'Yield generation for standard liabilities'
  }
};

export const premiumAdjustments = [
  {
    date: '2026-02-13',
    activeGuards: 147,
    premium: '₦294,000',
    adjustment: 'None'
  },
  {
    date: '2026-02-12',
    activeGuards: 145,
    premium: '₦290,000',
    adjustment: '+2 guards deployed'
  },
  {
    date: '2026-02-11',
    activeGuards: 148,
    premium: '₦296,000',
    adjustment: '-3 guards rotated off'
  },
  {
    date: '2026-02-10',
    activeGuards: 150,
    premium: '₦300,000',
    adjustment: 'Peak deployment'
  }
];
