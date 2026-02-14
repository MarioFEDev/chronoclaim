# ChronoClaim

**Automated MIA/KIA Insurance Platform for Nigerian Security Sectors**

A production-ready B2B insurtech mockup demonstrating parametric bridge benefits for Missing in Action (MIA) cases using Bayesian spatio-temporal modeling and real-time conflict data integration.

---

## 🎯 Project Overview

ChronoClaim addresses the 7-year "Valley of Death" in Nigerian security insurance by providing:

- **Mortality Probability Calculator (MPC)**: Bayesian modeling of ACLED conflict data
- **Bridge Benefits**: 48-72 hour payouts vs. 7-year statutory wait
- **Pay-As-You-Guard™**: Dynamic premium calculation based on biometric check-ins
- **NSCDC Compliance**: Integration with Nigerian Security and Civil Defence Corps biometrics
- **NIIRA 2025 Aligned**: Risk-Based Capital optimization and ALM strategies

---

## 🏗️ Tech Stack

- **Framework**: Vite + React 19 (JSX)
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS v3
- **Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Utilities**: date-fns for date formatting

---

## 📁 Project Structure

```
Heirs-Mockup/
├── src/
│   ├── components/
│   │   ├── ui/                    # shadcn/ui components
│   │   ├── MetricCard.jsx         # Metric display cards
│   │   ├── StatusBadge.jsx        # Status indicators
│   │   ├── EventTimeline.jsx      # Activity timeline
│   │   ├── RiskScoreIndicator.jsx # Risk visualization
│   │   ├── ComplianceIndicator.jsx # NSCDC compliance badge
│   │   ├── ClaimStepper.jsx       # Claim progress stepper
│   │   ├── GuardTable.jsx         # Guard roster table
│   │   ├── MPCQueueTable.jsx      # MPC review queue
│   │   ├── Sidebar.jsx            # Navigation sidebar
│   │   ├── Topbar.jsx             # Top navigation
│   │   └── LayoutShell.jsx        # Dashboard layout wrapper
│   ├── pages/
│   │   ├── Gateway.jsx            # Role selection gateway
│   │   ├── employer/
│   │   │   ├── CommandCenter.jsx  # Main employer dashboard
│   │   │   ├── Roster.jsx         # Guard management
│   │   │   ├── Incidents.jsx      # Conflict monitoring
│   │   │   └── Premium.jsx        # Premium management
│   │   ├── insurer/
│   │   │   ├── MPCQueue.jsx       # MIA triage queue
│   │   │   ├── RiskSurface.jsx    # Regional risk analysis
│   │   │   └── Capital.jsx        # ALM & capital efficiency
│   │   └── personnel/
│   │       ├── Home.jsx           # Personnel dashboard
│   │       └── ClaimDetails.jsx   # Claim tracking
│   ├── lib/
│   │   └── mockData.js            # Hardcoded Nigerian datasets
│   ├── App.jsx                    # Route configuration
│   └── index.css                  # Tailwind + shadcn styles
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🚀 Setup & Installation

### Prerequisites

- Node.js 18+ and npm/pnpm
- Modern browser with ES6+ support

### Installation Steps

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open browser
# Navigate to http://localhost:5173
```

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🎮 Using the Application

### 1. Gateway (Entry Point)

Navigate to `/` to see the dimensional gateway with three role-based portals:

- **Insurer**: Risk assessment and MPC queue management
- **Employer**: Guard roster and compliance management
- **Personnel/Family**: Coverage and claim tracking

### 2. Employer Dashboard

**Command Center** (`/employer`)
- Real-time metrics: active guards, missing check-ins, daily premium
- Biometric sync toggle (affects derived metrics)
- Activity timeline with ACLED conflict correlation
- NSCDC compliance indicator

**Guard Roster** (`/employer/roster`)
- Searchable/filterable table of all guards
- Status indicators: Active, Missed Check-in, MIA
- Risk zone classification
- Profile view and manual review triggers

**Incident Monitoring** (`/employer/incidents`)
- ACLED-verified conflict events
- Automatic guard-to-conflict correlation
- Severity indicators and casualty reports
- Real-time alert feed

**Premium Overview** (`/employer/premium`)
- Pay-As-You-Guard calculator
- Dynamic pricing based on active deployments
- Premium adjustment history
- CSV export functionality

### 3. Insurer Dashboard

**MPC Queue** (`/insurer`)
- Triage of MIA cases with probability scores
- Human-in-the-loop approval workflow
- Bridge benefit authorization dialog
- NAICOM-compliant decision support

**Risk Surface** (`/insurer/risk-surface`)
- Regional risk modeling (6 Nigerian regions)
- SPDE methodology explanation
- Trend analysis with sparklines
- Event count and primary threat identification

**Capital Efficiency** (`/insurer/capital`)
- NIIRA 2025 RBC framework explanation
- Barbell investment strategy visualization
- Liquidity stress testing scenarios
- Capital charge avoidance metrics

### 4. Personnel Portal

**Home** (`/personnel`)
- Active coverage status
- Recent biometric check-ins
- Policy information
- Support contact information

**Claim Details** (`/personnel/claim`)
- Claim stepper showing progress
- Event timeline
- Estimated payout and documents
- Bridge benefit explainer

---

## 🗂️ Mock Data

All data is hardcoded in `src/lib/mockData.js` with Nigerian-focused locations:

### States Represented

- **North West**: Zamfara, Sokoto, Kaduna, Katsina
- **North East**: Borno, Yobe, Adamawa
- **North Central**: Niger, Plateau, Benue, FCT
- **South South**: Delta, Rivers, Bayelsa
- **South West**: Lagos, Oyo, Osun, Ogun
- **South East**: Imo, Anambra, Enugu, Abia

### Sample Datasets

- **Guards**: 12 personnel across various risk zones
- **MPC Queue**: 4 cases with probability scores (64%-94%)
- **Conflict Events**: 5 ACLED-style incidents with casualties
- **Regional Risks**: 6 regions with severity scoring
- **Events**: 12 timeline entries (check-ins, alerts, conflicts)

---

## 🎨 Design System

### Color Palette (Tailwind Classes)

- **Primary**: `bg-slate-900`, `text-slate-900`
- **Background**: `bg-gray-50`, `bg-white`
- **Accent**: `text-cyan-400`, `bg-cyan-600`
- **Safe/Active**: `bg-emerald-500`, `text-emerald-700`
- **Warning**: `bg-amber-400`, `text-amber-900`
- **Danger**: `bg-rose-600`, `text-rose-700`

### Component Styling

- **Cards**: `rounded-2xl shadow-sm border`
- **Buttons**: `rounded-lg` with hover states
- **Badges**: `rounded-full px-3 py-1`
- **Typography**: Inter/system fonts, confident sizing

---

## ♿ Accessibility Features

- **Keyboard Navigation**: All interactive elements are keyboard-accessible
- **ARIA Labels**: Meaningful labels on all buttons and form controls
- **Screen Reader Support**: Proper semantic HTML structure
- **High Contrast**: Text meets WCAG AA standards
- **Focus States**: Visible focus indicators with `ring-cyan-400`
- **Status Indicators**: Color + text/icon redundancy

---

## 🧪 Testing Suggestions

### Unit Tests

- **MetricCard**: Props rendering, delta display logic
- **StatusBadge**: Status-to-class mapping
- **RiskScoreIndicator**: Score thresholds and color logic
- **EventTimeline**: Date sorting and filtering

### Integration Tests

- **GuardTable**: Search and filter interactions
- **MPCQueueTable**: Approval dialog workflow
- **ClaimStepper**: Step status progression

### E2E Tests

- **Role Navigation**: Gateway → Dashboard navigation
- **Employer Flow**: Command Center → Roster → Guard Profile
- **Insurer Flow**: MPC Queue → Approve Bridge Benefit
- **Personnel Flow**: Home → Claim Details

---

## 🔐 Security & Compliance Notes

### Regulatory Framework

- **NIIRA 2025**: Nigerian Insurance Industry Reform Act
- **NAICOM Guidelines 2025**: Insurtech Operations
- **Evidence Act 2011**: 7-year presumption of death rule
- **NSCDC Regulations**: Private Guard Companies compliance

### Data Privacy

- No real user data is collected (demo only)
- In production:
  - Encrypt biometric data at rest
  - Comply with Nigeria Data Protection Regulation (NDPR)
  - Secure ACLED API integration with rate limiting
  - Audit logs for all MPC approvals

### Human-in-the-Loop

Per NAICOM Guidelines:
- No automated claim rejections
- All high-confidence MPC scores require manual approval
- Appeals process for edge cases
- Manual review buttons throughout UI

---

## 🚧 Known Limitations (Demo)

- **No Backend**: All data is hardcoded (no API calls)
- **No Auth**: No email/password login system
- **No Persistence**: State resets on page refresh
- **No Real ACLED**: Would require ACLED API key in production
- **No Maps**: Conflict intelligence via lists/indicators only
- **Static Biometric Sync**: Toggle affects UI but doesn't persist
- **CSV Export**: Creates blob from mock data (not real backend)

---

## 🔮 Production Roadmap

### Phase 1: Private Security MVP

1. **Backend Integration**
   - Node.js/Python API with PostgreSQL/MongoDB
   - ACLED API integration with caching
   - Real-time biometric sync via NSCDC

2. **Authentication**
   - OAuth 2.0 with multi-factor authentication
   - Role-based access control (RBAC)
   - Session management and JWT

3. **MPC Engine**
   - Implement SPDE/INLA Bayesian model (R/Python)
   - Zero-inflated Poisson distributions
   - Mesh triangulation for spatial smoothing

4. **Payment Processing**
   - Nigerian payment gateway integration
   - Escrow for bridge benefits
   - Automated reconciliation

### Phase 2: Military Integration

1. **NOTICAS Integration**
   - API integration with Military Pensions Board
   - Secure Board of Inquiry data pipeline

2. **Classification Handling**
   - On-premise deployment option
   - End-to-end encryption for troop telemetry

3. **Legal Framework**
   - Evidence Act workaround via "Conflict Interruption" product
   - Partnership with NAICOM for regulatory sandbox

---

## 📞 Support & Contact

### Demo Support

This is a hackathon demonstration. For questions:
- **GitHub**: [Your GitHub URL]
- **Email**: [Your Email]

### Regulatory References

- NAICOM: https://naicom.gov.ng
- NSCDC: https://nscdc.gov.ng
- ACLED: https://acleddata.com

---

## 📄 License

This project is a demonstration for the Heirs Hackathon. All regulatory references and data modeling concepts are based on real Nigerian legislation and actuarial research.

**Disclaimer**: This is a mockup for educational purposes. Not intended for production use without proper licensing, regulatory approval, and actuarial certification.

---

## 🙏 Acknowledgments

- **ACLED**: Armed Conflict Location and Event Data Project
- **NAICOM**: National Insurance Commission
- **NSCDC**: Nigeria Security and Civil Defence Corps
- **shadcn/ui**: Component system
- **Heirs Holdings**: Hackathon organizers

---

## 🏆 Built for Heirs Hackathon 2026

**ChronoClaim** - Bridging the protection gap in Nigerian security insurance.

*"From the Valley of Death to the Bridge of Hope in 72 hours."*
