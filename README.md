# Luma Health

A full-stack hospital appointment and admin management system (in development).

Luma Health is a real-world healthcare web app: patients can book appointments and manage their profiles; staff can run clinic operations from a role-based admin dashboard. It is a portfolio project built with a modern AI-assisted workflow.

**Status:** Frontend in progress. Layout, design system, and core UI components are in place. No database or authentication yet.

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4, shadcn/ui, next-themes |
| Icons | Lucide React |

Planned: Prisma + PostgreSQL, NextAuth v5, Zod, React Hook Form, PayPal, UploadThing, Recharts.

## What's in the repo today

- Responsive site chrome: sticky header, footer, desktop nav, and a mobile menu (shadcn Sheet)
- Light / dark theme toggle
- Sign-in CTA with a loading state (auth page not wired yet)
- Book Appointment button (placeholder until scheduling exists)
- Reusable `DepartmentCard` and `DoctorCard` (preview at `/examples`)
- Atomic-style component layout: `ui` → `molecules` → `organisms`
- Design tokens in `app/globals.css` (brand, text, borders, light/dark)

## Coming next

1. **Homepage** — hero, departments, and doctors using the cards already built
2. **Authentication** — NextAuth v5 (sign in / sign up, session)
3. **Database** — Prisma + PostgreSQL
4. **Patient profiles** — account and medical details
5. **Appointment scheduling** — book, view, and manage visits
6. **Payments** — PayPal checkout
7. **File uploads** — UploadThing (avatars, documents)
8. **Admin dashboard** — role-based access for doctors, appointments, users, and site content
9. **Charts** — Recharts for admin analytics

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
