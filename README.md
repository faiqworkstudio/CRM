# Client demo: Aeterna Estates (website + admin + CRM)

A working sample of the full system proposed to the real estate client. **Aeterna Estates is a fictional company.** Its projects, people and leads are invented sample content, so the demo does not show or imply any real client's brand or data. The names were checked against real developments, and the site states that it is fictional in the top bar, footer and admin login.

- **Website:** `/`
- **Admin & CRM:** `/admin/`. Demo password: `aeterna-demo`

## What it shows (mapped to the client's checklist)

| Client requirement | Where in the demo |
|---|---|
| Worldwide audience; project presentation | Home, three collections, project pages with gallery, key facts, highlights and map |
| Search & filter | Hero search, collection cards (Beachfront / City Living / Investment), filter bar (collection, location, type, budget, status), sorting; links like `#/?cat=longevity` can be shared |
| Multilingual: English and Thai switched on (German, Chinese and Arabic are translated but off; re-enable in `LANGS` in `assets/seed.js`) | Language switcher; Arabic is fully right-to-left when enabled; script-specific fonts; `?lang=` in the URL plus hreflang tags |
| Standard pages | Home, projects, project detail, about, contact, footer with legal links |
| Backend customization | Admin → Projects & content: edit details, collections, highlights, photo, publish/feature, and translations side by side per language |
| Sales pipeline / lead management | Admin → Dashboard, Pipeline (drag and drop), Leads (search, filters, CSV export), lead detail with notes, agent assignment and an activity log |
| CRM connected directly to the website | Every website form (enquiry, brochure, viewing, waiting list) creates a lead with language, project, UTM and page data |
| Facebook leads into the CRM | "Simulate Facebook lead" shows the Meta webhook → Graph API → lead flow. The real webhook verification endpoint is `/api/webhooks/facebook` |
| Google Analytics / Search Console / Meta Pixel | Consent banner; tracked events appear in the top demo bar; Admin → Integrations |
| Other integrations | WhatsApp, LINE, email alerts and auto-reply, outgoing webhook / Zapier |
| Developer + client access | Admin → Users & roles, with a permissions matrix |
| Responsive | Tested at 375px and up, for both the website and the admin |

## Suggested pitch walkthrough (5 minutes)

1. Open the website in English, then switch to **ไทย** (Thai).
2. Click **Beachfront**, set the location to **Phuket**, then open a project.
3. Click **Download brochure** and submit the form. The thank-you message shows the new lead ID.
4. Open the **admin** (password above). The lead is at the top of the Dashboard, already assigned to an agent who speaks the buyer's language.
5. Under **Pipeline**, drag the lead to *Contacted*. Open it, add a note and look at the activity log.
6. Under **Integrations**, click **Send test lead** to show a Facebook Lead Ad arriving.
7. Under **Projects & content**, change a price or the Thai text, save, then click **Preview**. The website updates immediately.
8. To clean up before the next pitch, go to **Settings → Reset demo data**.

## How it works

- `index.html`, `assets/site.*`: the public website (no framework).
- `admin/`: the admin and CRM.
- `assets/core.js`: the API router (leads, projects, settings, stats, Facebook simulation).
- `netlify/functions/api.mjs`: serves `core.js` at `/api/*` and stores the data in **Netlify Blobs**. This is the real shared backend once deployed.
- `assets/api.js`: calls the backend. When no backend is reachable (for example on a plain static server), it runs the same router in the browser using localStorage. The admin footer shows which mode is active.

### Run locally

```bash
npm install
npm run dev           # http://localhost:8888/  (backend state is kept in memory)
```

### Deploy

In Netlify choose **Add new site → Import an existing project → GitHub → faiqworkstudio/CRM**, branch `main`. Leave the build command empty and set the publish directory to `.` (`netlify.toml` already sets both). Netlify installs `@netlify/blobs` and deploys the function automatically (`netlify.toml` sets the functions directory). No environment variables are needed. You can optionally set `FB_VERIFY_TOKEN` for the Meta webhook handshake.

## Not production-ready, by design

- There is one shared demo password; production would have a login per user, with roles enforced on the server.
- Facebook leads are simulated. Going live needs a Meta app, the `leads_retrieval` permission and a page access token.
- Photos come from Unsplash and fall back to a branded gradient if they fail to load.
- Translations are sample drafts and need review by native speakers.
- The production site would use language paths (`/th/`, `/ar/` …) with server-rendered pages for SEO.
