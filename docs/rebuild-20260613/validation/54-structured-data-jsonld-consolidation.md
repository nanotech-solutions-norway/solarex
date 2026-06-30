# Validation Log - Structured Data JSON-LD Consolidation

Generated: 11:24, 29.06.2026 Europe/Oslo
Repository: `nanotech-solutions-norway/solarex`
Branch: `main`
Status: STRUCTURED_DATA_LAYER_COMMITTED_PENDING_LIVE_DOM_VALIDATION
Labels: SEO, AEO_GEO, STRUCTURED_DATA, LINK, CLAIM

## Scope

Added a centralized route-aware structured-data layer for the current SolarEX v5 public route set.

The implementation is source-controlled as a public JavaScript JSON-LD injector loaded through the existing shared navigation loader. This avoids editing every route file separately and keeps the public structured-data model consistent across current pages.

## Source scan summary

Sources checked before/during this pass:

- Google Drive core SolarEX folder `1HoXnE-a_4e949tkZW0XCpxtGmqvGZLLN`.
- Google Drive secondary SolarEX folder `1MY6CG2TmzRuEWvBO7roU5qK8HTqJ_pNU`.
- GitHub repository `nanotech-solutions-norway/solarex`, branch `main`.
- Current `assets/js/navigation.js` shared loader.
- Current route inventory from `sitemap.xml`.
- Existing route metadata pattern from representative public pages.
- Previously validated `llms.txt` and `llms-full.txt` files.

## Files changed

| File | Purpose |
|---|---|
| `assets/js/structured-data.js` | New route-aware JSON-LD injector. |
| `assets/js/navigation.js` | Loads `structured-data.js` through the shared enhancement loader. |
| `docs/rebuild-20260613/validation/54-structured-data-jsonld-consolidation.md` | This validation log. |

## Structured-data coverage

The structured-data layer covers:

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

## Schema types used

| Route category | Schema type |
|---|---|
| Home and most routes | `WebPage` |
| Technology | `TechArticle` |
| Applications, Markets, Proof, Projects, Case Studies, Documentation | `CollectionPage` where appropriate |
| FAQ | `FAQPage` with two controlled public Q&A entries |
| Technical Review and Contact | `ContactPage` |
| Global graph nodes | `Organization`, `WebSite`, `BreadcrumbList` where applicable |

## Claim-control decisions

- No `Product`, `Offer`, `AggregateRating`, `Review`, `Certification`, `WarrantyPromise`, or price/availability schema was added.
- No performance guarantees were added.
- No unsupported ROI guarantees were added.
- No certifications or third-party approvals were inferred.
- Quartz/Titan distinction is preserved in structured descriptions:
  - Quartz = passive SiO₂ route.
  - Titan = active TiO₂ route.
- Contact email is set to public `info@solarex.no` only.
- ROI route structured data points to the approved standalone ROI Calculator through a `ViewAction` target.

## Technical behavior

- `structured-data.js` strips the GitHub Pages `/solarex` prefix when determining the page route.
- Structured data uses canonical `https://www.solarex.no/` URLs, matching public production URL strategy.
- A single `<script type="application/ld+json" id="solarex-structured-data">` is inserted if the route is recognized.
- Breadcrumb JSON-LD is inserted for routes below Home.
- The shared navigation loader now calls `loadScript('structured-data.js', 'data-solarex-structured-data-js')`.

## Validation performed

- Verified `assets/js/structured-data.js` exists on `main`.
- Verified the route map includes the current sitemap route inventory.
- Verified `navigation.js` loads `structured-data.js` through the shared loader.
- Verified structured data uses canonical production URLs rather than GitHub Pages URLs.
- Verified structured descriptions use `SiO₂` and `TiO₂` where product routes are named.
- Verified the layer does not expose backend, admin, SQL, credentials, private project content or customer data.

## Known limitation

The JSON-LD layer is injected client-side via JavaScript. This is acceptable as an implementation step for modern crawlers and validation tooling that executes JavaScript, but source-only validators that do not execute JavaScript will not see the injected graph. A later hardening pass can inline JSON-LD into priority HTML pages if static-source validation is required.

## Safety status

No backend, SQL, credentials, API keys, customer data, private admin material, form logic, production-publish action, NLWeb endpoint, ASK endpoint, MCP endpoint, public body copy, product claim text or binary visual assets were added or changed.

## Pending live validation

After deployment/cache refresh:

1. Open representative routes and confirm `#solarex-structured-data` appears in the live DOM.
2. Validate Home, Technology, Quartz, Titan, FAQ, Contact, Technical Review and ROI Calculator with a structured-data testing tool.
3. Confirm no duplicate/conflicting structured data warnings requiring correction.
4. Decide whether priority pages need static inline JSON-LD instead of JS-injected JSON-LD before final release.

## Next step

Run live DOM validation on representative pages, then proceed with browser/live click validation or static inline JSON-LD hardening for the highest-priority pages.
