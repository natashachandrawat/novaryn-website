/**
 * Single hardcoded source of truth for the production site URL.
 *
 * Hardcoded to remove all dependency on environment variables. Vercel build
 * environments without NEXT_PUBLIC_SITE_URL set were previously falling
 * through to default branches in metadata serialization, which triggered
 * "Only absolute URLs are supported" inside Next.js's metadata layer.
 *
 * If the production domain ever changes, change this single constant.
 */
export const SITE_URL = "https://www.nyravon.com" as const;
export const SITE_NAME = "Novaryn" as const;
