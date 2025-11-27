# Velox Starter Kit Commit Guide

This commit guide is specifically designed for the development of Velox Starter Kit using React, TypeScript, Tailwind CSS v4, TanStack Stack, and Shadcn UI.

Consistency in commit messages is crucial for maintaining a clean history, facilitating debugging, and generating automated changelogs.

## Table of Contents

- [Commit Message Format](#commit-message-format)
- [Commit Types](#commit-types)
- [Scopes](#scopes)
  - [Architectural Scopes](#architectural-scopes)
  - [Feature Scopes](#feature-scopes)
  - [System Scopes](#system-scopes)
- [Subject & Body](#subject--body)
- [Tech Stack Specific Guidelines](#tech-stack-specific-guidelines)
  - [Shadcn UI & Tailwind v4](#shadcn-ui--tailwind-v4)
  - [TanStack Router](#tanstack-router)
  - [TanStack Query & API](#tanstack-query--api)
- [Usage Examples](#usage-examples)

## Commit Message Format

Use the standard Conventional Commits format:

<type>(<scope>): <subject>

[optional body]

[optional footer]

Commit Types

Use the following types to categorize changes:

- **feat**: A new feature (new page, new component, new logic).
- **fix**: A bug fix (logic error, UI glitch, TS type error).
- **ui**: Purely visual changes without logic modification (colors, spacing, animations).
- **docs**: Documentation changes (README, code comments).
- **style**: Code formatting changes (whitespace, semi-colons, Prettier formatting).
- **refactor**: Code changes that neither fix a bug nor add a feature (clean code, folder restructuring).
- **perf**: Performance optimizations (rendering, load time, query caching).
- **test**: Adding or correcting tests.
- **chore**: Changes to the build process, config, or dependencies.
- **types**: Specific changes to TypeScript definitions (interface, type).

## Scopes

Scopes provide context on where the change happened. Align these with the Velox folder structure:

### Architectural Scopesopes

- **routes**: Related to TanStack Router (`src/routes`, `__root.tsx`).
- **components**: Common/custom components (`src/components/common`).
- **ui**: Shadcn primitive components (`src/components/ui`).
- **layout**: Page layout structure (Navbar, Sidebar, Footer).
- **hooks**: Custom React Hooks (`src/hooks`).

### Feature Scopesopes

- **query**: TanStack Query hooks & configuration (`src/hooks/queries`).
- **services**: Axios & API integration (`src/services`).
- **forms**: React Hook Form & Zod schemas.
- **types**: Global types & interfaces (`src/types`).

### System Scopesopes

- **config**: Tooling configuration (Vite, TypeScript, Eslint).
- **deps**: Dependency updates (`package.json`).
- **assets**: Static images, fonts, or icons.
- **theme**: Tailwind v4 configuration & CSS variables (`src/index.css`).

## Subject & Bodyody

### Subject (Header)

- Use the imperative mood: "add" not "added" or "adds".
- Do not capitalize the first letter.
- Do not use a period (.) at the end.
- Limit to 50 characters if possible.

### Body (Description)

- Explain why this change is being made, not just how.
- Mention side effects if any.

## Tech Stack Specific Guidelinesnes

### Shadcn UI & Tailwind v4

Distinguish between modifying core Shadcn components and common components.

# Adding a new Shadcn component

feat(ui): add badge component via cli

# Updating global styling in Tailwind v4

style(theme): update dark mode primary colors in index.css

# Creating a new component using Shadcn primitives

feat(components): add UserCard component using Card and Avatar

TanStack Router

Focus on routing file and loader changes.

# Adding a new page

feat(routes): add users dashboard route and loader

# Fixing navigation logic

fix(routes): resolve redirect loop in protected route

TanStack Query & API

Describe changes to data fetching or mutations.

# Adding new service endpoints

feat(services): add auth endpoints for login and register

# Optimizing caching

perf(query): increase staleTime for dashboard statistics

Usage Examples

1. Adding a New Feature (TanStack Router + Query)

feat(routes): implement user details page

- Create /users/$userId route file
- Implement useUserQuery hook for data fetching
- Add loading skeleton state
- Handle 404 error boundary for invalid IDs

Closes #12

2. Updating UI Components (Shadcn)

ui(components): update button variant styles

- Add 'ghost' variant hover effect
- Fix padding on mobile view
- Update focus-visible ring color

3. API Integration (Service Pattern)

feat(services): implement CRUD for products

- Add getProducts, createProduct, updateProduct functions
- Define Product and APIResponse interfaces in types
- Add axios interceptor for error handling

4. Bug Fixes (Logic)

fix(forms): resolve validation error on email field

Fix zod schema regex for email validation not accepting
subdomains. Updated form-schema.ts.

5. Configuration (Vite/Tailwind)

chore(config): enable path alias in vite config

- Add resolution alias for @/components
- Update tsconfig.json paths

6. Refactoring (TypeScript)

refactor(types): centralize API response types

Move strict typing from component file to src/types/api.ts
to allow reusability across services.

### 7. Performance Optimization

```
perf(routes): implement code splitting for admin module

Use lazy loading for admin routes to reduce initial
bundle size by 150kb.
```
