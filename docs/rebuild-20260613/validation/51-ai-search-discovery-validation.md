# Validation Log - AI Search Discovery Infrastructure

Generated: 11:12, 25.06.2026 Europe/Oslo
Repository: `nanotech-solutions-norway/solarex`
Branch: `main`
Status: ROBOTS_SITEMAP_LIVE_VALIDATED_LLMS_FILES_ADDED_NLWEB_ASK_PENDING_REVIEW
Labels: SEO, AEO_GEO, AI_DISCOVERY, LINK, USER_CONFIRMATION

## User request

User uploaded screenshots of live `robots.txt` and `sitemap.xml`, attached `AI_Search_Discovery_Infrastructure_Report_0215_24062026-1.docx`, and requested validation plus relevant file updates.

## Screenshot validation

### robots.txt

Live screenshot confirmed:

```text
User-agent: *
Allow: /
Disallow: /backend-domeneshop/
Disallow: /project-memory/
Sitemap: https://www.solarex.no/sitemap.xml
```

Validation result: PASS.

Notes:

- Public crawl is allowed.
- Operational/private project paths are excluded from crawl.
- Sitemap is referenced with an absolute URL.
- No production-wide `Disallow: /` was visible.

### sitemap.xml

Live screenshot confirmed the sitemap loads as XML and includes the current SolarEX v5 public route set:

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

Validation result: PASS.

## Report guidance applied

The attached AI Search Discovery Infrastructure Report defines a layered discoverability stack:

1. crawler access layer through `robots.txt`
2. URL discovery layer through `sitemap.xml`
3. semantic understanding through metadata, canonical tags, structured data and internal links
4. LLM-readable context through `llms.txt`, optional `llms-full.txt`, and Markdown mirrors
5. conversational access through NLWeb/ASK endpoints
6. governance and monitoring

The report recommends implementing the stack in order: robots, sitemap, structured data, webmaster monitoring, then `llms.txt`, optional `llms-full.txt`, and only later NLWeb/ASK after governance and security review.

## Actions performed

Added:

- `llms.txt`
- `llms-full.txt`
- `docs/rebuild-20260613/validation/51-ai-search-discovery-validation.md`

## Files added

| File | Purpose |
|---|---|
| `llms.txt` | Curated AI-readable public source map for the SolarEX website. |
| `llms-full.txt` | Concise public context file summarizing the current SolarEX route structure and interpretation rules. |
| `docs/rebuild-20260613/validation/51-ai-search-discovery-validation.md` | This validation and change-control log. |

## llms.txt scope

`llms.txt` includes:

- H1 project name.
- Blockquote summary.
- Canonical website URL.
- Public contact email.
- AI interpretation rules.
- Core pages.
- Quartz SiO₂ and Titan TiO₂ routes.
- Applications branch.
- Markets branch.
- Evidence and documentation branch.
- Commercial and partner routes.

## llms-full.txt scope

`llms-full.txt` includes:

- Concise SolarEX identity.
- Critical Quartz/Titan interpretation rules.
- Current public route inventory.
- Application route summaries.
- Market route summaries.
- Evidence/documentation/commercial route summaries.
- AI-answering rules.

## Classification

| Source/material | Classification | Use |
|---|---|---|
| User screenshots | PUBLIC_APPROVED validation evidence | robots/sitemap live validation. |
| Attached AI Search Discovery Infrastructure Report | PUBLIC_APPROVED technical guidance | Discovery-stack implementation guidance. |
| Current GitHub route implementation | PUBLIC_APPROVED source baseline | Route inventory and canonical URLs. |
| Backend/admin/SQL material | INTERNAL_ONLY | Not exposed. |
| NLWeb/ASK endpoint layer | PENDING_REVIEW | Not implemented; requires security/governance review. |

## Decisions

- Keep `robots.txt` unchanged because the live screenshot validates the current policy and it does not block production crawl.
- Keep `sitemap.xml` unchanged in this pass because the live screenshot validates the current consolidated route inventory.
- Add `llms.txt` now because robots and sitemap are already present and validated.
- Add a concise `llms-full.txt` because SolarEX is a technical B2B product site with multiple route branches and strict product-interpretation rules.
- Do not implement NLWeb, `/ask`, `/await` or MCP endpoints in this pass. The report treats those as advanced conversational access layers requiring endpoint governance, rate limiting, source allowlists, logging policy and security review.

## Safety status

No backend, SQL, credentials, API keys, customer data, private admin material, private files, form logic, production-publish action, NLWeb endpoint, ASK endpoint, MCP endpoint, or binary visual assets were added.

## Pending validation

After deployment/cache refresh, validate:

- `https://nanotech-solutions-norway.github.io/solarex/llms.txt`
- `https://nanotech-solutions-norway.github.io/solarex/llms-full.txt`
- `https://nanotech-solutions-norway.github.io/solarex/sitemap.xml`
- `https://nanotech-solutions-norway.github.io/solarex/robots.txt`

Later production-domain validation should also confirm:

- `https://www.solarex.no/llms.txt`
- `https://www.solarex.no/llms-full.txt`
- `https://www.solarex.no/sitemap.xml`
- `https://www.solarex.no/robots.txt`

## Next step

Validate `llms.txt` and `llms-full.txt` live, then proceed with structured-data JSON-LD consolidation for priority pages or build a controlled AI-discovery validation script.
