# Validation Log - Full Link / CTA Crawl

Generated: 11:08, 29.06.2026 Europe/Oslo
Repository: `nanotech-solutions-norway/solarex`
Branch: `main`
Status: SOURCE_LEVEL_LINK_CTA_CRAWL_COMPLETE_MANIFEST_FIX_COMMITTED_LIVE_CLICK_VALIDATION_PENDING
Labels: LINK, CTA, SEO, AEO_GEO, MENU_FOOTER

## Scope

Performed a source-level crawl of the current SolarEX v5 public route set, internal navigation targets, primary CTA targets, footer targets, sitemap, robots, AI-discovery files and common linked assets.

This is not a production publish action. Browser click validation and live HTTP validation remain separate release-gate checks.

## Source scan summary

Sources checked before/during this pass:

- Google Drive core SolarEX folder `1HoXnE-a_4e949tkZW0XCpxtGmqvGZLLN`.
- Google Drive secondary SolarEX folder `1MY6CG2TmzRuEWvBO7roU5qK8HTqJ_pNU`.
- GitHub repository `nanotech-solutions-norway/solarex`, branch `main`.
- Current `sitemap.xml`.
- Current `robots.txt`.
- Current representative route files including Home, Technical Review, Contact and ROI Calculator handoff.
- Current public AI-discovery files validated in the prior step.

## Route inventory checked

The sitemap currently lists these public routes:

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

Result: PASS at source level.

## Navigation / menu targets checked

Representative route navigation contains:

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
- `/contact/`
- `/technical-review/`

Result: PASS at source level.

## CTA targets checked

Representative high-priority CTA targets checked:

| CTA target | Source-level status | Notes |
|---|---|---|
| `/technical-review/` | PASS | Route exists and is used as the main project qualification route. |
| `/contact/` | PASS | Route exists and contains public email handling via `info@solarex.no`. |
| `/documentation/` | PASS | Route exists and is used for documentation review CTAs. |
| `/applications/` | PASS | Route exists and is used from ROI, Markets and route hubs. |
| `/markets/` | PASS | Route exists and is used from Markets subpages. |
| `/roi-calculator/` | PASS | Route exists and performs canonical handoff to approved standalone ROI Calculator. |
| `https://nanotech-solutions-norway.github.io/SolarEX-ROI-Calculator/` | PASS_SOURCE_REFERENCE | External canonical ROI target is intentionally outside this repository; live user validation already passed in ROI repo. |
| `mailto:info@solarex.no` | PASS_SOURCE_REFERENCE | Public email target is correct. |
| `https://forms.nanotech-solutions.com/solarex_admin/` | EXTERNAL_PENDING_LIVE_VALIDATION | Admin link exists as an external operational route; not live-tested in this crawl. |

## Sitemap / robots / AI discovery status

| File | Source-level status | Notes |
|---|---|---|
| `sitemap.xml` | PASS | Contains current v5 public route inventory only. |
| `robots.txt` | PASS | Allows public crawl and points to sitemap. |
| `llms.txt` | PASS_PREVIOUS_LIVE_VALIDATED | Live screenshot validation was already recorded. |
| `llms-full.txt` | PASS_PREVIOUS_LIVE_VALIDATED | Live screenshot validation was already recorded. |

## Missing asset found and fixed

### Issue

The current route templates link to:

`/site.webmanifest`

The file was missing from the repository before this crawl.

### Fix

Added:

`site.webmanifest`

The manifest contains:

- `name`: SolarEX
- `short_name`: SolarEX
- SolarEX description
- `start_url`: `/`
- `scope`: `/`
- `display`: `standalone`
- dark background and theme colors
- language `en`

### Result

The web app manifest target is no longer a known source-level 404.

## Removed/missing SEO landing routes check

Checked for the previously removed sitemap-only routes:

- `/anti-soiling-coating/`
- `/pv-soiling-loss-mitigation/`
- `/cleaning-cost-reduction/`

No active repository references were found in this crawl. These remain removed from the sitemap and should only be recreated as controlled SEO landing pages if approved.

## Files changed

| File | Purpose |
|---|---|
| `site.webmanifest` | Added missing manifest file referenced by public pages. |
| `docs/rebuild-20260613/validation/53-link-cta-crawl-validation.md` | This link/CTA crawl validation log. |

## Safety status

No backend, SQL, credentials, API keys, customer data, private admin material, form logic, production-publish action, NLWeb endpoint, ASK endpoint, MCP endpoint, product claim text or binary visual assets were added or changed. Only a public static manifest and this validation log were added.

## Remaining live validation

- Fetch `https://nanotech-solutions-norway.github.io/solarex/site.webmanifest` after deployment/cache refresh.
- Run live click validation for representative CTA links on mobile and desktop.
- Confirm external admin link behavior only if approved for operational validation.
- Confirm menu lower-scroll/click targets on mobile.
- Full desktop validation remains pending for newer route branches.

## Next recommended step

Proceed with structured-data JSON-LD consolidation for priority pages, then run a browser/live link-click pass before visual replacement or release packaging.
