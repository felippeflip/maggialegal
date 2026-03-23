# Universal Web Quality Skill

## Objective

Ensure every webpage or web application component generated or modified meets high standards of SEO, performance, security, accessibility, and mobile responsiveness.

This skill must apply to any project, domain, or company.

---

# Activation Rules

The agent MUST execute this skill whenever:

* a webpage is created
* HTML or frontend components are modified
* landing pages are generated
* blog or documentation pages are written
* layout or UI components are changed
* metadata is missing or incomplete

The task is only complete when all checks in this skill pass.

---

# 1. SEO Optimization

## Metadata

Ensure required metadata exists:

```html
<title>Page Title</title>
<meta name="description" content="Short description of the page">
<meta name="robots" content="index, follow">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Guidelines:

* title length: 50–60 characters
* description length: 140–160 characters
* include the main keyword naturally

## Open Graph

Add social metadata if missing:

```html
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Page description">
<meta property="og:type" content="website">
<meta property="og:image" content="/images/preview.jpg">

<meta name="twitter:card" content="summary_large_image">
```

## Structured Data

Add Schema.org structured data where applicable.

Example:

```json
{
 "@context": "https://schema.org",
 "@type": "WebPage",
 "name": "Page Title",
 "description": "Page description"
}
```

## Heading Structure

Rules:

* one `<h1>` per page
* `<h2>` for sections
* `<h3>` for subsections

---

# 2. Performance Optimization

Ensure fast loading and efficient resources.

Checks:

* compress images
* use modern image formats when possible
* enable lazy loading

```html
<img loading="lazy">
```

* minimize CSS and JavaScript
* avoid render-blocking scripts
* reduce unused code
* optimize asset delivery

Goal: fast page load and efficient rendering.

---

# 3. Security Best Practices

Verify secure implementation.

## HTTPS

All pages must use secure connections.

## Content Security Policy

Add security headers when possible:

```
Content-Security-Policy
X-Frame-Options
X-Content-Type-Options
Strict-Transport-Security
```

## Input Validation

Ensure that forms and inputs are protected against:

* XSS
* SQL injection
* malicious input

## Dependency Safety

Avoid outdated or vulnerable packages.

---

# 4. Accessibility (A11Y)

Ensure pages are usable by all users.

## Image Accessibility

```html
<img src="image.jpg" alt="descriptive text">
```

## Semantic HTML

Use semantic tags:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

## Keyboard Navigation

Ensure UI elements are accessible via keyboard.

## ARIA Labels

Add ARIA attributes when needed.

Example:

```html
<button aria-label="Open menu">
```

---

# 5. Mobile Responsiveness

Ensure pages work well on mobile devices.

## Responsive Layout

Use responsive design techniques:

* flexible grids
* responsive images
* scalable typography

## Viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## Breakpoints

Design must adapt to:

* mobile
* tablet
* desktop

Avoid horizontal scrolling and ensure touch-friendly spacing.

---

# 6. URL and Navigation Quality

URLs must be:

* readable
* lowercase
* hyphen separated
* descriptive

Example:

```
/complete-seo-guide
```

Avoid:

```
/page?id=1032
```

Include internal links to improve navigation and discoverability.

---

# 7. Crawlability

Verify the project includes:

```
/robots.txt
/sitemap.xml
```

Example robots.txt:

```
User-agent: *
Allow: /
Sitemap: https://example.com/sitemap.xml
```

---

# 8. Completion Rule

Before completing any web-related task, the agent MUST:

1. verify SEO compliance
2. optimize page performance
3. confirm security best practices
4. ensure accessibility standards
5. validate mobile responsiveness

Only when all checks pass is the task considered complete.

---

# Global Rule

This skill must apply to:

* all websites
* all web applications
* all generated pages
* all frontend components

The agent must treat this as a mandatory final validation step for web development tasks.
