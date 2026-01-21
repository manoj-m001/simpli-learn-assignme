# Simplilearn Executive Roundtable

An invite-only executive event website built with Next.js, showcasing a workforce transformation roundtable focused on AI readiness and leadership evolution.

## 📋 Event Details

- **Date:** February 20, 2026
- **Location:** Chamberlain's Steak & Fish House, Dallas, TX
- **Type:** Invite-Only Executive Roundtable
- **Audience:** CHROs, CLOs, and Enterprise Workforce Leaders

## 🎯 Event Focus

Discusses critical workforce shifts and capability-building strategies as organizations prepare for the AI era, featuring perspectives from senior leaders including the former CLO of McDonald's.

## 🛠️ Tech Stack

- **Framework:** Next.js 16.1.1
- **UI Library:** React 19.2.3
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Database:** Airtable (RSVP submissions)
- **Icons:** Tabler Icons React
- **Font:** Satoshi Variable (custom local font)

## 📁 Project Structure

```bash
src
├── app
│   ├── api
│   │   └── auth
│   │       ├── [...nextauth]
│   │       └── route.ts
│   ├── components
│   │   ├── ui
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   └── modal.tsx
│   │   └── layout
│   │       ├── navbar.tsx
│   │       └── footer.tsx
│   ├── (app)
│   │   ├── about
│   │   │   └── page.tsx
│   │   ├── contact
│   │   │   └── page.tsx
│   │   ├── events
│   │   │   └── page.tsx
│   │   ├── login
│   │   │   └── page.tsx
│   │   ├── rsvp
│   │   │   └── page.tsx
│   │   └── page.tsx
│   └── styles
│       ├── globals.css
│       └── tailwind.css
├── public
│   ├── images
│   │   ├── logo.png
│   │   └── banner.jpg
│   └── favicon.ico
├── .env
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install
```

AIRTABLE_API_KEY=your_airtable_api_key
AIRTABLE_BASE_ID=your_base_id
AIRTABLE_TABLE_NAME=attendee
