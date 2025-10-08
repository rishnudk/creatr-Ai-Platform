# Project Environment Variables

This project uses **Next.js**, **Convex**, **Clerk**, **Imagekit**, **Unsplash**, and **Google Gemini API**.  
This file documents all environment variables required for local development and deployment.

> ⚠️ To run the project locally, always run:
>
> ```bash
> npm run dev
> npx convex dev
> ```

---

# Deployment used by `npx convex dev`
CONVEX_DEPLOYMENT=

NEXT_PUBLIC_CONVEX_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

CLERK_JWT_ISSUER_DOMAIN=

# Imagekit
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=
IMAGEKIT_PRIVATE_KEY=

# Unsplash
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=

# Gemini
GEMINI_API_KEY=
