# notchnotch-site

Documentation and landing page for [notchnotch](https://github.com/KikinaStudio/Notchnotch).

Built with [Nextra 4](https://nextra.site) (Next.js App Router) and deployed on Vercel.

## Local development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Push to GitHub and import in [Vercel](https://vercel.com). Default Next.js settings work out of the box.

## Structure

```
app/
  layout.jsx          # Root layout with Nextra docs theme
  page.jsx            # Landing page (custom React)
  globals.css         # NotchNotch dark theme overrides
  docs/[[...mdxPath]] # Catch-all route for MDX content

content/docs/         # MDX documentation pages
  _meta.js            # Navigation structure
  index.mdx           # Introduction
  getting-started.mdx # Install + first launch
  chat.mdx            # Chat features
  brain.mdx           # Memory, Skills, Wiki
  routines.mdx        # Cron jobs and templates
  telegram.mdx        # Mobile continuity
  voice.mdx           # Voice memos
  settings.mdx        # Provider and agent config
  troubleshooting.mdx # FAQ and fixes
  clipper.mdx         # Chrome extension
  hermes.mdx          # About the Hermes agent
  architecture.mdx    # For contributors
  api.mdx             # API reference
```
