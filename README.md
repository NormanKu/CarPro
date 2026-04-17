# About the project
This is a minimalist e-commerce website built with React and Tailwind. This website features a modern and intuitive design, with easy-to-use navigation and a simple shopping experience that puts the focus on the products.

👉 Live Demo: [CarPro](https://car-pro-five.vercel.app/)

Build with:
» Scss
» React JS

## Setup

```bash
npm install
cp .env.example .env
# Edit .env and fill in your Mapbox token and Firebase config
npm run dev
```

## Environment variables

See `.env.example`. Required:
- `VITE_APP_MAPBOX_TOKEN` — Mapbox public token
- `VITE_FIREBASE_*` — Firebase web configuration (6 variables)

## ⚠️ Security notes

A Mapbox public token and Firebase web config were previously hardcoded in this repo. Both types of keys are public-by-design for client-side apps — actual security comes from platform restrictions:

**Mapbox token**
- Restrict to your deployed domain(s) in the Mapbox dashboard
- See https://docs.mapbox.com/accounts/guides/tokens/

**Firebase config**
- Configure Security Rules for Firestore/Storage (deny-by-default is safest)
- Add authorized domains in Authentication → Settings
- See https://firebase.google.com/docs/projects/api-keys

The previously committed Mapbox token should be rotated and the Firebase project's authorized domains double-checked.

Screenshots of the Project 📸
