import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

export function ModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full transition-all duration-300 cursor-pointer hover:bg-accent hover:text-accent-foreground active:outline-none active:ring-2 active:ring-ring active:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
      title="Toggle theme"
    >
      {/* Logika Icon: Putar dan Fade */}
      {theme === "dark" ? (
        <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 transition-all dark:rotate-0 fill-blue-500 stroke-blue-500" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 transition-all dark:-rotate-90 fill-yellow-500 stroke-yellow-500" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
