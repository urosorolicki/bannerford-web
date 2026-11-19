# Bannerford website

The project site for Bannerford, a medieval settlement builder. It uses the Next.js App Router, TypeScript, and Tailwind CSS.

## Local development

Requires Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Run `npm run typecheck` for TypeScript checks and `npm run build` to create the static export in `out/`.

Set `NEXT_PUBLIC_SITE_URL` to the final site origin at build time to generate absolute social image URLs. For a future Cloudflare Pages deployment, use `npm run build` and publish `out/`. The site needs no runtime server or storage.

The illustrations in `public/art` are original concept art commissioned for this site through image generation. Font licenses are in `public/fonts`. The development journal starts empty and its content lives in `app/page.tsx`.
