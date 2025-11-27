# Velox Collaboration Guide

## Table of Contents

- [Main Branches](#main-branches)
- [Architecture & Modules](#architecture--modules)
- [Naming Conventions](#naming-conventions)
  - [Branch Naming](#branch-naming)
  - [PR Title Convention](#pr-title-convention)
  - [File Naming Conventions](#file-naming-conventions)
- [Pull Request Guidelines](#pull-request-guidelines)
  - [Allowed Pull Request Flows](#allowed-pull-request-flows)
  - [Restrictions](#restrictions)
  - [Pull Request Process](#pull-request-process)
- [Branch Structure Visualization](#branch-structure-visualization)
- [Frontend Development Guidelines](#frontend-development-guidelines)
  - [Code Quality Standards](#code-quality-standards)
  - [Project Structure](#project-structure)

## Main Branches

- **main**: Contains code currently active on production.
- **staging**: Contains code currently active on the staging environment for QA/Testing.
- **module/{epic}**: Contains code based on a specific module, interpreted as an epic in project management (e.g., `module/auth`, `module/dashboard`).

## Architecture & Modules

Based on the Velox Starter Kit structure:

- **routes**: TanStack Router file-based routing (`src/routes`).
- **components**:
  - **ui**: Shadcn primitive components.
  - **common**: Shared custom components.
- **services**: Axios API integration and endpoints (`src/services`).
- **hooks**:
  - **queries**: TanStack Query hooks.
  - General custom hooks.
- **types**: Global TypeScript definitions (`src/types`).
- **forms**: React Hook Form schemas and validation (zod).

## Naming Conventions

### Branch Naming

**Module Development**: `{developer-name}/{epic}`

- Example: `alex/dashboard`

**Feature Development**: `{developer-name}/{epic}/feature/{feature-name}`

- Example: `alex/dashboard/feature/analytics-chart`

**Bugfix**: `{developer-name}/{epic}/bugfix/{issue-name}`

- Example: `alex/auth/bugfix/login-validation`

**Component Development**: `{developer-name}/components/{component-name}`

- Example: `alex/components/data-table`

### PR Title Convention

**Format**: `{source-branch} -> {target-branch}: {brief-description}`

- Example: `alex/users -> module/users: implement user data table with pagination`

### File Naming Conventions

- **Components**: PascalCase (`UserCard.tsx`, `ModeToggle.tsx`)
- **Hooks**: camelCase with "use" prefix (`useTheme.ts`, `useUserQuery.ts`)
- **Services**: camelCase with service suffix (`authService.ts`, `userService.ts`)
- **Types**: camelCase (`apiTypes.ts`, `userTypes.ts`)
- **Routes**: flat-file or directory based (TanStack Router standard) (`users.tsx`, `posts/index.tsx`)

## Pull Request Guidelines

### Allowed Pull Request Flows

**Developer branches → Module branches**

- `{developer-name}/*` → `module/{epic}`

**Module branches → Staging**

- `module/{epic}` → `staging`

**Staging → Main**

- `staging` → `main`

### Restrictions ⛔

- **No Direct Merges**: Developer branches cannot merge directly into `main` or `staging`.
- **Linear Flow**: `main` only accepts merges from `staging`.

### Pull Request Process

**Development Phase:**

1. Work in your `{developer-name}` branch.
2. Run `npm run dev` to test locally.
3. Ensure no linting errors (`npm run lint` if configured).

**Pre-PR Checklist:**

- [ ] Application builds successfully (`npm run build`).
- [ ] No TypeScript errors in the changed files.
- [ ] Prettier formatting applied.
- [ ] If adding a new page, ensure the Route Loader handles errors/loading.

**Module Integration:**

- Create PR to `module/{epic}`.
- Attach Screenshots/GIFs for UI changes (Shadcn components, Layouts).
- Reviewer: Peer developer.

**Staging Integration:**

- Create PR from `module/{epic}` to `staging`.
- Reviewer: Tech Lead / Maintainer.

## Branch Structure Visualization

```
🍕 main (production)
├── 🍔 staging (QA/Testing)
│   ├── 🍟 module/auth
│   │   ├── 🌭 alex/auth/feature/login-form
│   │   └── 🌭 sarah/auth/bugfix/token-refresh
│   │
│   ├── 🍟 module/dashboard
│   │   ├── 🌭 alex/dashboard/feature/stats-card
│   │   └── 🥨 alex/components/stats-widget
```

## Frontend Development Guidelines

### Code Quality Standards

**TypeScript Strictness:**

- Avoid `any`. Use strict interfaces in `src/types`.
- Use `z.infer<typeof schema>` for Form types.

**TanStack Ecosystem:**

- **Router**: Do not use `useEffect` for data fetching. Use loader functions or `useQuery` inside components.
- **Query**: Define keys in `src/lib/query-keys.ts` (optional) or keep them consistent in hooks.

**Styling (Tailwind v4):**

- Use `className` for 99% of styling.
- Use CSS variables in `index.css` for theming (Dark/Light mode).
- Do not create new CSS files; use `@apply` in `index.css` sparingly.

### Project Structure

```
src/
├── components/
│   ├── ui/          # Shadcn (Do not edit logic manually)
│   └── common/      # Your custom components
├── routes/          # Pages (File-based routing)
├── services/        # Axios instances & endpoints
├── hooks/
│   └── queries/     # React Query hooks
├── lib/             # Utils (cn, axios instance)
└── types/           # Interfaces
```
