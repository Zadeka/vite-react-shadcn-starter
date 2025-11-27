import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Terminal,
  Zap,
  ShieldCheck,
  Rocket,
  Code2,
  Palette,
  Database,
  Route as RouteIcon,
  FileJson,
  Layers,
  ArrowRightLeft,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ModeToggle } from "@/components/common/mode-toggle";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  const features = [
    {
      name: "Vite",
      description: "Super-fast build tool with instant HMR.",
      icon: <Rocket className="h-6 w-6 text-orange-500" />,
    },
    {
      name: "React + TypeScript",
      description: "Industry standard for type-safe and scalable UIs.",
      icon: <Code2 className="h-6 w-6 text-blue-500" />,
    },
    {
      name: "Tailwind CSS v4",
      description: "Modern styling with zero configuration.",
      icon: <Palette className="h-6 w-6 text-cyan-500" />,
    },
    {
      name: "Shadcn UI",
      description: "Beautiful, accessible, and copy-paste components.",
      icon: <Layers className="h-6 w-6 text-slate-900 dark:text-white" />,
    },
    {
      name: "TanStack Query",
      description: "Server-side state management & automatic caching.",
      icon: <Database className="h-6 w-6 text-red-500" />,
    },
    {
      name: "TanStack Router",
      description: "Next-generation type-safe routing.",
      icon: <RouteIcon className="h-6 w-6 text-emerald-500" />,
    },
    {
      name: "Form & Zod",
      description: "Robust and type-safe form validation.",
      icon: <FileJson className="h-6 w-6 text-pink-500" />,
    },
    {
      name: "Axios",
      description: "Powerful and easy-to-use HTTP client.",
      icon: <ArrowRightLeft className="h-6 w-6 text-purple-600" />,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-white transition-colors duration-300 selection:bg-blue-100 dark:bg-slate-950 dark:selection:bg-blue-900">
      {/* --- NAVBAR --- */}
      <nav className="absolute top-0 right-0 left-0 z-50 pt-6">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-slate-900 dark:text-white">
            <Terminal className="h-5 w-5 text-blue-600" />
            Velox<span className="text-blue-600">.</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Zadeka/vite-react-shadcn-starter"
              target="_blank"
              rel="noreferrer"
              className="hidden text-sm font-medium text-slate-600 hover:underline sm:block dark:text-slate-400"
            >
              Documentation
            </a>
            <ModeToggle />
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Column: Copywriting */}
            <div className="relative z-10 space-y-8">
              <Badge
                variant="secondary"
                className="border-blue-100 bg-blue-50 text-blue-600 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
              >
                v1.0.0 Production Ready
              </Badge>
              <h1 className="text-5xl leading-[1.1] font-extrabold tracking-tight text-slate-900 lg:text-7xl dark:text-white">
                Build React apps <br />
                <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  at warp speed.
                </span>
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                An opinionated starter kit with the best configuration. Focus on
                building features and let this boilerplate handle the tedious
                setup.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="ring-offset-background cursor-pointer rounded-full bg-blue-600 px-8 text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  <a
                    href="https://github.com/Zadeka/vite-react-shadcn-starter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                {/* <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8"
                >
                  <Github className="mr-2 h-4 w-4" /> View on GitHub
                </Button> */}
              </div>

              <div className="flex gap-6 pt-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-yellow-500" /> Instant Server
                  Start
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-green-500" /> Type Safe
                </div>
              </div>
            </div>

            {/* Right Column: Code Mockup */}
            <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
              {/* Blur/Glow Effects */}
              <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 animate-pulse rounded-full bg-blue-500/30 opacity-50 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/30 opacity-50 blur-3xl" />

              {/* Window Editor */}
              <div className="relative rotate-1 transform overflow-hidden rounded-xl border border-slate-200 bg-slate-950 shadow-2xl transition-transform duration-500 hover:rotate-0 dark:border-slate-800">
                <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900/50 px-4 py-3 backdrop-blur">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  <div className="ml-4 font-mono text-xs text-slate-500">
                    src/App.tsx
                  </div>
                </div>
                <div className="overflow-x-auto bg-slate-950 p-6">
                  <pre className="font-mono text-sm leading-relaxed">
                    <code className="text-slate-300">
                      <span className="text-purple-400">import</span> {"{"}{" "}
                      <span className="text-yellow-300">useQuery</span> {"}"}{" "}
                      <span className="text-purple-400">from</span>{" "}
                      <span className="text-green-300">
                        '@tanstack/react-query'
                      </span>
                      <br />
                      <span className="text-purple-400">import</span> {"{"}{" "}
                      <span className="text-yellow-300">Button</span> {"}"}{" "}
                      <span className="text-purple-400">from</span>{" "}
                      <span className="text-green-300">
                        '@/components/ui/button'
                      </span>
                      <br />
                      <br />
                      <span className="text-blue-400">
                        export default function
                      </span>{" "}
                      <span className="text-yellow-300">App</span>() {"{"}
                      <br />
                      {"  "}
                      <span className="text-blue-400">const</span> {"{"} data{" "}
                      {"}"} = <span className="text-yellow-300">useQuery</span>
                      (...)
                      <br />
                      <br />
                      {"  "}
                      <span className="text-purple-400">return</span> (
                      <br />
                      {"    "}&lt;<span className="text-red-400">div</span>{" "}
                      <span className="text-blue-300">className</span>="
                      <span className="text-green-300">p-8 space-y-4</span>"&gt;
                      <br />
                      {"      "}&lt;<span className="text-red-400">h1</span>
                      &gt;Hello World&lt;/
                      <span className="text-red-400">h1</span>&gt;
                      <br />
                      {"      "}&lt;
                      <span className="text-yellow-300">Button</span>&gt;Click
                      Me&lt;/<span className="text-yellow-300">Button</span>&gt;
                      <br />
                      {"    "}&lt;/<span className="text-red-400">div</span>&gt;
                      <br />
                      {"  "})
                      <br />
                      {"}"}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TECH STACK GRID SECTION --- */}
      <section className="border-t border-slate-200 bg-slate-50 py-24 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Under the hood
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400">
              We've handpicked the best technologies so you don't have to worry
              about comparing frameworks anymore.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
              >
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                  <div className="rounded-xl bg-slate-100 p-2.5 dark:bg-slate-800">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-base font-semibold">
                    {feature.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-slate-200 bg-white py-8 dark:border-slate-800 dark:bg-slate-950">
        <div className="container mx-auto flex flex-col items-center justify-between px-4 text-sm text-slate-500 md:flex-row">
          <p>© 2024 StarterKit Inc. Open Source.</p>
          <p className="mt-2 flex items-center gap-1 md:mt-0">
            Made with <span className="text-red-500">❤</span> using Vite &
            React
          </p>
        </div>
      </footer>
    </div>
  );
}
