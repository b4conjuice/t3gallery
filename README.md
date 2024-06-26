# t3 gallery

## todo

- [x] make it deploy (vercel)
- [x] scaffold basic ui with mock data
- [x] tidy up build process
- [x] actually set up db (vercel postgres)
- [x] attach db to ui
- [x] add auth (clerk)
- [x] add image upload
- [x] "taint" (server-only)
- [x] use next/image component
- [x] error management (sentry)
- [x] routing/image page (parallel router)
- [x] update upload button to be less cringe
- [x] add shadcn/ui toast component
- [x] analytics (posthog)
- [x] delete button (server actions)
- [x] ratelimiting (upstash)

## challenges

- fix page layout for images of different resolutions
- selecting images
- infinite scroll
- folders/albums

## t3 stack 2024

- next
- react
- typescript
- tailwind
- shadcn/ui
- drizzle orm
- pnpm

- sponsers:
- vercel
- posthog
- upstash
- clerk
- sentry

```bash
pnpm create t3-app@latest

   ___ ___ ___   __ _____ ___   _____ ____    __   ___ ___
  / __| _ \ __| /  \_   _| __| |_   _|__ /   /  \ | _ \ _ \
 | (__|   / _| / /\ \| | | _|    | |  |_ \  / /\ \|  _/  _/
  \___|_|_\___|_/‾‾\_\_| |___|   |_| |___/ /_/‾‾\_\_| |_|


│
◇  What will your project be called?
│  t3gallery
│
◇  Will you be using TypeScript or JavaScript?
│  TypeScript
│
◇  Will you be using Tailwind CSS for styling?
│  Yes
│
◇  Would you like to use tRPC?
│  No
│
◇  What authentication provider would you like to use?
│  None
│
◇  What database ORM would you like to use?
│  Drizzle
│
◇   EXPERIMENTAL  Would you like to use Next.js App Router?
│  Yes
│
◇  What database provider would you like to use?
│  PostgreSQL
│
◇  Should we initialize a Git repository and stage the changes?
│  No
│
◇  Should we run 'pnpm install' for you?
│  Yes
│
◇  What import alias would you like to use?
│  @/
```
