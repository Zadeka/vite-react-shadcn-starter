# Velox Starter Kit 🚀

A production-ready React starter template powered by modern web technologies and best practices.

[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC.svg)](https://tailwindcss.com/)
[![Prettier](https://img.shields.io/badge/Prettier-38B2AC.svg)](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)
[![Shadcn](https://img.shields.io/badge/Shadcn-FFF.svg)](https://ui.shadcn.com/)
[![Tanstack](https://img.shields.io/badge/TanStack-FF4154.svg)](https://tanstack.com/)
[![Axios](https://img.shields.io/badge/Axios-5A29E4.svg)](https://axios-http.com/)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Build](#build)
- [Workflow & Collaboration](#workflow--collaboration)
- [Code Quality](#code-quality)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

**Velox Starter Kit** is an opinionated, production-ready React boilerplate designed to accelerate your development workflow. It combines industry-standard tools with a well-structured architecture, allowing you to focus on building features instead of configuring tooling.

This starter kit is perfect for:

- ✅ Building modern web applications with type safety
- ✅ Teams following strict collaboration and commit conventions
- ✅ Projects requiring server-state management and type-safe routing
- ✅ Developers who want a pre-configured setup without compromises

---

## Features

### 🔥 **Core Technologies**

- **[React 18](https://react.dev/)** - Modern UI library with Hooks and Concurrent Features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript for scalable codebases
- **[Vite](https://vitejs.dev/)** - Lightning-fast build tool with instant HMR
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework with zero configuration

### 🎨 **UI & Components**

- **[Shadcn UI](https://ui.shadcn.com/)** - Beautiful, accessible, and customizable component library
- **Dark Mode Support** - Built-in theme toggle with system preference detection
- **Responsive Design** - Mobile-first approach with Tailwind utilities

### 🛣️ **Routing & Data Fetching**

- **[TanStack Router](https://tanstack.com/router)** - Type-safe, file-based routing with loaders
- **[TanStack Query](https://tanstack.com/query)** - Powerful server-state management with automatic caching
- **[Axios](https://axios-http.com/)** - Promise-based HTTP client for API integration

### 📋 **Forms & Validation**

- **[React Hook Form](https://react-hook-form.com/)** - Performant form handling
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation

### 🧰 **Developer Experience**

- **ESLint** - Code linting with React and TypeScript rules
- **Prettier** - Opinionated code formatter
- **Path Aliases** - Clean imports with `@/` prefix
- **Conventional Commits** - Standardized commit messages for better collaboration

---

## Tech Stack

| Technology                                                                                               | Purpose                 |
| -------------------------------------------------------------------------------------------------------- | ----------------------- |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)                   | Build tool & dev server |
| ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)                | UI library              |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) | Type safety             |
| ![Tailwind](https://img.shields.io/badge/Tailwind-38B2AC?style=flat&logo=tailwind-css&logoColor=white)   | Styling                 |
| ![TanStack](https://img.shields.io/badge/TanStack-FF4154?style=flat&logo=react-query&logoColor=white)    | Routing & Data fetching |
| ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white)                | HTTP client             |

---

## Project Structure

```
vite-react-shadcn-starter/
├── src/
│   ├── assets/              # Static assets (images, fonts)
│   ├── components/
│   │   ├── common/          # Shared custom components
│   │   │   └── mode-toggle.tsx
│   │   ├── layout/          # Layout components (Navbar, Sidebar, Footer)
│   │   └── ui/              # Shadcn primitive components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── ...
│   ├── constants/           # Global constants and enums
│   ├── hooks/
│   │   ├── queries/         # TanStack Query hooks
│   │   ├── use-theme.ts     # Theme management hook
│   │   └── use-mobile.ts
│   ├── lib/
│   │   └── utils.ts         # Utility functions (cn, etc.)
│   ├── routes/              # TanStack Router file-based routes
│   │   ├── __root.tsx       # Root route component
│   │   └── index.tsx        # Home page
│   ├── services/            # Axios instances & API endpoints
│   ├── types/               # Global TypeScript definitions
│   ├── index.css            # Global styles & Tailwind directives
│   ├── main.tsx             # Application entry point
│   └── routeTree.gen.ts     # Auto-generated route tree (DO NOT EDIT)
├── public/                  # Public static files
├── .prettierrc              # Prettier configuration
├── components.json          # Shadcn UI configuration
├── eslint.config.js         # ESLint configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
├── COLLABORATION-GUIDE.md   # Team collaboration guidelines
├── COMMIT-GUIDE.md          # Commit message conventions
└── package.json
```

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** >= 18.x
- **npm** >= 9.x or **yarn** >= 1.22.x or **pnpm** >= 8.x

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/velox-starter-kit.git
   cd velox-starter-kit
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create a production-ready build:

```bash
npm run build
```

Build output will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

---

## Workflow & Collaboration

This project follows a structured Git workflow with strict branch naming and PR conventions.

### Branch Structure

```
main (production)
  └── staging (QA/Testing)
      └── module/{epic} (e.g., module/auth, module/dashboard)
          └── {developer-name}/{epic}/feature/{feature-name}
```

### Branch Naming Conventions

| Type                   | Format                                           | Example                                  |
| ---------------------- | ------------------------------------------------ | ---------------------------------------- |
| **Module Development** | `{developer-name}/{epic}`                        | `alex/dashboard`                         |
| **Feature**            | `{developer-name}/{epic}/feature/{feature-name}` | `alex/dashboard/feature/analytics-chart` |
| **Bugfix**             | `{developer-name}/{epic}/bugfix/{issue-name}`    | `alex/auth/bugfix/login-validation`      |
| **Component**          | `{developer-name}/components/{component-name}`   | `alex/components/data-table`             |

### Pull Request Flow

1. **Developer → Module**: `alex/dashboard` → `module/dashboard`
2. **Module → Staging**: `module/dashboard` → `staging`
3. **Staging → Production**: `staging` → `main`

**⛔ Restrictions:**

- No direct merges from developer branches to `main` or `staging`
- All changes must go through module branches first

For detailed collaboration guidelines, see [COLLABORATION-GUIDE.md](COLLABORATION-GUIDE.md).

---

## Code Quality

### Commit Conventions

This project uses **Conventional Commits** for standardized commit messages:

```
<type>(<scope>): <subject>

[optional body]
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `ui`: UI-only changes
- `refactor`: Code refactoring
- `docs`: Documentation
- `chore`: Build/config changes

**Examples:**

```bash
feat(routes): add user details page with loader
fix(forms): resolve email validation regex
ui(components): update button hover states
```

For complete commit guidelines, see [COMMIT-GUIDE.md](COMMIT-GUIDE.md).

### Linting & Formatting

```bash
# Run ESLint
npm run lint

# Format code with Prettier
npm run format
```

---

## Contributing

We welcome contributions! Please follow these steps:

1. Read [COLLABORATION-GUIDE.md](COLLABORATION-GUIDE.md) and [COMMIT-GUIDE.md](COMMIT-GUIDE.md)
2. Create a feature branch following naming conventions
3. Make your changes with proper commit messages
4. Submit a PR to the appropriate module branch
5. Wait for code review and approval

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [Vite](https://vitejs.dev/) for blazing-fast development experience
- [Shadcn UI](https://ui.shadcn.com/) for beautiful components
- [TanStack](https://tanstack.com/) for powerful routing and data fetching
- The React and TypeScript communities

---

<div align="center">
  <p>Built with ❤️ using Vite & React</p>
  <p>© 2024 Velox Starter Kit. Open Source.</p>
</div>
