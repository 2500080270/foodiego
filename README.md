# Foodie Go

Foodie Go is a frontend-only food ordering demo built with React and Vite. It includes a user login/signup screen, an admin demo dashboard, restaurant browsing, menu filters, cart, demo checkout, and order tracking.

## Requirements
- Node.js 20.19+ (or 22.12+)
- npm

## Run locally
1. Open this folder in VS Code.
2. Open Terminal > New Terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Demo accounts
- User: `user@foodiego.com` / `1234`
- Admin: `admin@foodiego.com` / `admin123`

You can also create a user account from the signup link. Demo users, cart and orders are stored in the browser's Local Storage. This is not production authentication: passwords are stored locally and there is no backend or real payment processing.

## Hero image
The homepage hero uses `public/images/veg-biryani.svg`. Keep this file in that exact location. In the HTML template it is referenced with the root-relative URL `/images/veg-biryani.svg`, which Vite serves from the `public` folder.

## Production build
Run `npm run build`. Vite writes the deployable site to `dist/`. Deploy the project to Vercel using the Vite preset; the build command is `npm run build` and the output directory is `dist`.
