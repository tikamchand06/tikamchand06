---
name: design-system-home
description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.
---

<!-- TYPEUI_SH_MANAGED_START -->

# Home

## Mission
Deliver implementation-ready design-system guidance for Home that can be applied consistently across content site interfaces.

## Brand
- Product/brand: Home
- URL: https://ericfennis.com/
- Audience: readers and knowledge seekers
- Product surface: content site

## Style Foundations
- Visual style: structured, accessible, implementation-first
- Main font style: `font.family.primary=Work Sans`, `font.family.stack=Work Sans, sans-serif`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=32px`
- Typography scale: `font.size.xs=16px`, `font.size.sm=20px`, `font.size.md=24px`, `font.size.lg=36px`, `font.size.xl=40px`, `font.size.2xl=72px`
- Color palette: `color.text.primary=#222224`, `color.surface.base=#000000`, `color.surface.muted=#ffffff`, `color.surface.raised=#ff8a66`, `color.surface.strong=#45d1de`
- Spacing scale: `space.1=4px`, `space.2=8px`, `space.3=10px`, `space.4=12px`, `space.5=16px`, `space.6=32px`, `space.7=48px`, `space.8=60px`
- Radius/shadow/motion tokens: `radius.xs=6px`, `radius.sm=10px`, `radius.md=12px`, `radius.lg=16px`, `radius.xl=32px` | `shadow.1=rgba(0, 0, 0, 0.05) 0px 4px 4px 0px, rgba(0, 0, 0, 0.1) 0px 4px 24px 0px`, `shadow.2=rgba(0, 0, 0, 0.05) 0px 2px 2px 0px, rgba(0, 0, 0, 0.1) 0px 2px 12px 0px`, `shadow.3=rgba(0, 0, 0, 0.4) 0px -10px 32px 0px` | `motion.duration.instant=160ms`, `motion.duration.fast=200ms`, `motion.duration.normal=240ms`, `motion.duration.slow=600ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
concise, confident, implementation-focused

## Rules: Do
- Use semantic tokens, not raw hex values in component guidance.
- Every component must define required states: default, hover, focus-visible, active, disabled, loading, error.
- Responsive behavior and edge-case handling should be specified for every component family.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and tokens.
3. Define component anatomy, variants, and interactions.
4. Add accessibility acceptance criteria.
5. Add anti-patterns and migration notes.
6. End with QA checklist.

## Required Output Structure
- Context and goals
- Design tokens and foundations
- Component-level rules (anatomy, variants, states, responsive behavior)
- Accessibility requirements and testable acceptance criteria
- Content and tone standards with examples
- Anti-patterns and prohibited implementations
- QA checklist

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Prefer system consistency over local visual exceptions.

<!-- TYPEUI_SH_MANAGED_END -->
