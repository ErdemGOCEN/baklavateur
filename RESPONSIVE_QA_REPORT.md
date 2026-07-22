# Baklavateur Responsive QA — v3.0.0-qa2

## Mobile navigation fixes

- Prevented the header hamburger/close control and the drawer close control from appearing simultaneously.
- The header control is hidden only while the mobile drawer is open; the drawer retains one clear close button.
- Reduced mobile navigation title and link typography.
- Reduced product category submenu typography and vertical spacing.
- Narrowed the drawer on tablets and compact phones while preserving scrollability.
- Added an extra compact rule for screens up to 380 px.

## Validation

- CSS block delimiters validated.
- Sitemap generation remains available through `npm run generate:sitemap`.
- Run `npm install` followed by `npm run build` in the project environment for the production build.
