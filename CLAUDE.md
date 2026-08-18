# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Frontend for CSE Transportation Services — a marketing site with ride-reservation and driver-application forms for a Kern County medical transportation company. This repo is the React/TypeScript frontend only; it talks to a separate Go REST API (not in this repo) via `VITE_API_URL`.

## Commands

- `npm run dev` — start Vite dev server (bound to `0.0.0.0`)
- `npm run build` — type-check (`tsc -b`) then production build via Vite
- `npm run lint` — run ESLint over the project
- `npm run preview` — preview the production build locally

There is no test suite configured in this repo.

## Environment

- `VITE_API_URL` — base URL of the backend API; forms POST to `${VITE_API_URL}/api/reservation` and `${VITE_API_URL}/api/...` for applications. Required for form submission to work locally (e.g. via `.env.local`) and is injected as a GitHub Actions secret at build time in CI.

## Architecture

- **Routing** (`src/App.tsx`): `react-router` v7 with three routes — `/` (`LandingPage`), `/reservation` (`ReservationForm`), `/apply` (`ApplicationForm`) — wrapped by a persistent `Navbar`/`Footer` and MUI `CssBaseline`. `BrowserRouter` is set up in `src/main.tsx`.

- **Forms** (`src/components/Forms/`): `ReservationForm.tsx` and `ApplicationForm.tsx` follow the same pattern — worth matching when adding new forms:
  - `useForm` from `react-hook-form` with `zodResolver` bound to a schema from `src/schemas/`.
  - Every field is wrapped in a `Controller` rendering an MUI input, with `error`/`helperText` wired to `formState.errors`.
  - Local `useState` for `responseMessage`, `alertSeverity` (`"error" | "success" | "info"`), and `isSubmitting`, surfaced via an MUI `Alert` and a submit `Button`'s `loading` prop.
  - Submission is an Axios call to `${import.meta.env.VITE_API_URL}/api/...`; `ApplicationForm` builds a `FormData` (for resume file upload) instead of posting JSON.

- **Schemas** (`src/schemas/`): each file pairs a Zod object schema with an exported `*FormData` type derived from it, imported by the corresponding form for both validation and TS typing.

- **Styling**: MUI `sx` props for most component styling, plus SCSS files in `src/styles/` for the landing page (`LandingPage.scss`, `ServiceCard.scss`) imported directly into their components.

- **Deployment** (`.github/workflows/build_and_deploy.yml`): pushes to `main` trigger a GitHub Actions build (`npm ci && npm run build` with `VITE_API_URL` secret) and deploy to GitHub Pages. `CNAME` pins the custom domain `www.csemedi.com`. `public/404.html` exists to support SPA client-side routing on GitHub Pages.
