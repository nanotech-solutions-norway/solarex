# SolarEX v5.0 Website Build

Generated: 22:00, 12.06.2026 Europe/Oslo  
Deployment workflow added: 00:55, 13.06.2026 Europe/Oslo

This repository contains the controlled SolarEX v5.0 static website baseline generated according to the SolarEX v5.0 Automated Website Creation Playbook.

## Test site

GitHub Pages test URL:

https://nanotech-solutions-norway.github.io/solarex/

The deployment workflow unpacks `SolarEX_v5_website_build_package_20260612_2200.zip` into the GitHub Pages artifact and rewrites root-relative paths for the `/solarex/` test route.

## Runtime

- Static GitHub Pages-compatible website
- Public forms route to Domeneshop endpoint references only
- No credentials or private backend configuration included
- ROI calculator is a frontend screening tool
- Animation integrated as iframe plus fallback and requires live validation

## Validation

```bash
npm run validate
```

## Publication rule

Final production publication to `solarex.no` / `www.solarex.no` requires explicit approval after QA gates pass. When the production domain is connected, staging path rewriting should be removed or replaced with production-root deployment settings.
