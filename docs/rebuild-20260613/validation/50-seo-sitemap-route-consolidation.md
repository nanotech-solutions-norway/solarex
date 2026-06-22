# Validation Log - SEO Sitemap Route Consolidation

Generated: 22:08, 22.06.2026 Europe/Oslo
Repository: `nanotech-solutions-norway/solarex`
Branch: `main`
Status: SITEMAP_CONSOLIDATED_EXISTING_ROUTES_ONLY_PENDING_LIVE_FETCH_VALIDATION
Labels: SEO, AEO_GEO, LINK, ROUTE, USER_CONFIRMATION

## Trigger

User confirmed ROI Calculator live validation: `All checks out. Proceed`.

## Actions performed

1. Logged ROI Calculator user validation pass in the canonical ROI repository.
2. Started SolarEX v5 SEO/sitemap/robots route consolidation.
3. Checked current `sitemap.xml` and `robots.txt`.
4. Checked sitemap routes that looked potentially missing.
5. Updated `sitemap.xml` to include current existing v5 routes only.

## Source scan summary

Sources checked before/during this pass:

- Google Drive core SolarEX folder `1HoXnE-a_4e949tkZW0XCpxtGmqvGZLLN`.
- Google Drive secondary SolarEX folder `1MY6CG2TmzRuEWvBO7roU5qK8HTqJ_pNU`.
- Google Drive ROI folder `SolarEX-ROI-Calculator`.
- GitHub repository `nanotech-solutions-norway/SolarEX-ROI-Calculator`, branch `gh-pages`.
- GitHub repository `nanotech-solutions-norway/solarex`, branch `main`.
- Current `sitemap.xml` and `robots.txt`.
- Uploaded ROI future-self note.

## Sitemap changes

### Added / retained current route set

- `/`
- `/technology/`
- `/quartz/`
- `/titan/`
- `/applications/`
- `/applications/desert-and-dust/`
- `/applications/coastal-and-salt/`
- `/applications/commercial-rooftop/`
- `/applications/utility-scale/`
- `/markets/`
- `/markets/europe/`
- `/markets/middle-east-gcc/`
- `/markets/nordics/`
- `/proof-results/`
- `/projects/`
- `/case-studies/`
- `/documentation/`
- `/faq/`
- `/partners/`
- `/technical-review/`
- `/roi-calculator/`
- `/contact/`

All listed routes now use `2026-06-22` as `lastmod`.

### Removed sitemap-only missing route targets

The previous sitemap contained three routes that were not present as route files in the repository:

- `/anti-soiling-coating/`
- `/pv-soiling-loss-mitigation/`
- `/cleaning-cost-reduction/`

They were removed from the sitemap to avoid advertising known missing routes as crawlable pages. These can be recreated later as controlled SEO landing pages if approved.

## Robots status

`robots.txt` was checked and remains unchanged:

- Allows public crawl.
- Disallows `/backend-domeneshop/`.
- Disallows `/project-memory/`.
- Points to `https://www.solarex.no/sitemap.xml`.

## Files changed

| File | Purpose |
|---|---|
| `sitemap.xml` | Consolidated sitemap to existing v5 routes only and added Applications subroutes. |
| `docs/rebuild-20260613/validation/50-seo-sitemap-route-consolidation.md` | This validation log. |

## Safety status

No backend, SQL, credentials, customer data, private files, form logic, product claims, route content, visual assets or production-publish action were changed in this pass.

## Open items

- Live fetch validation of `https://nanotech-solutions-norway.github.io/solarex/sitemap.xml` after GitHub Pages deployment.
- Live fetch validation of `https://nanotech-solutions-norway.github.io/solarex/robots.txt` after GitHub Pages deployment.
- Decision needed later: create or permanently archive the three removed sitemap-only SEO landing pages.
- Full link/CTA crawl still pending.
- Desktop validation still pending where screenshots are unavailable.

## Next step

After sitemap deployment is visible, run a final link/CTA crawl across the current route set or create the three removed SEO landing pages if they are still part of the desired public search strategy.
