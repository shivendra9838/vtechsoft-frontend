# VTECHSOFT Technology — Frontend

React + Vite + Tailwind CSS frontend for VTECHSOFT Technology, with pages: Home, About, Services, Blog, Login, and Register. Styled to match the VTECHSOFT logo (dark blue, teal, modern tech look).

## Stack

- **React 19** + **Vite**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **React Router** for navigation

## Setup

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview production build locally

## Project structure

```
src/
├── components/
│   ├── Header.jsx    # Sticky nav with logo + links
│   ├── Footer.jsx    # Site footer
│   ├── Layout.jsx    # Layout with header/footer + <Outlet />
│   └── Logo.jsx      # VTECHSOFT logo (full + compact)
├── pages/
│   ├── Home.jsx      # Hero, features, CTA
│   ├── About.jsx     # Story, values, stats
│   ├── Services.jsx  # Services grid
│   ├── Blog.jsx      # Blog listing
│   ├── BlogPost.jsx  # Single blog post (route: /blog/:id)
│   ├── Login.jsx     # Login form
│   └── Register.jsx  # Registration form
├── App.jsx           # React Router routes
├── main.jsx
└── index.css         # Tailwind + theme
```

## Routes

| Path       | Page     |
|-----------|----------|
| `/`       | Home     |
| `/about`  | About    |
| `/services` | Services |
| `/blog`   | Blog     |
| `/blog/:id` | Blog post |
| `/login`  | Login    |
| `/register` | Register |

## Brand colors (Tailwind / CSS)

- **Dark blue**: `#0f2942` (primary)
- **Blue**: `#1e4a6f`
- **Teal**: `#2dd4bf`, `#00c9b7`
- **Gray**: `#374151`

## Backend (next step)

Login and Register currently use local state and simulated submit. The next phase is to add a backend (e.g. Node/Express) and **MongoDB Atlas** for:

- User registration and login
- Storing and loading blog posts
- Auth (e.g. JWT) and protected routes

Run `npm install` and `npm run dev` on your machine to work with the frontend; the backend will be implemented in a separate step.
