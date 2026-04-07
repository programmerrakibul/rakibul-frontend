# PPA - Landing Page

A modern, high-converting landing page for **PPA** online course. Built with
Next.js, React, TypeScript, and Tailwind CSS.

## Overview

This is a sales funnel landing page for a self-paced productivity course
designed to help professionals master focus, eliminate procrastination, and
boost deep work capabilities. The course includes 4 modules with 6+ hours of
video content and live Q&A sessions.

## Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4 + PostCSS
- **UI Components:** shadcn/ui + Base UI
- **Carousel:** Embla Carousel
- **Theme:** next-themes (dark/light mode)
- **Icons:** Lucide React

## Project Structure

```
src/
├── app/              # Next.js pages and layout
├── components/
│   ├── pages/home/   # Homepage sections (banner, benefits, curriculum, testimonials)
│   ├── ui/           # Reusable UI components
│   └── providers/    # Theme provider
├── data/             # Course and testimonial data
├── assets/           # Images and icons
├── lib/              # Utilities
└── types/            # TypeScript definitions
```

## Features

- ✨ Responsive design optimized for all devices
- 🌓 Dark/light theme toggle
- 📺 Interactive curriculum accordion
- 🎠 Auto-playing testimonials carousel
- 🎯 Conversion-focused CTA sections
- ⚡ Optimized performance with Next.js 16

## Deployment

Ready to deploy on Vercel or any Next.js-compatible hosting platform.

```bash
npm run build
npm start
```
