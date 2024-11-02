import NavLinks from "./nav-links";
import { ThemeToggle } from "@/components/theme-toggle";

import { Github } from "lucide-react";
import Link  from "next/link";

const NavBar = () => {
  return (
    <header className="fixed top-0 overflow-hidden w-full flex items-center justify-end px-4 h-16 z-10 border-b backdrop-blur-md">
     
      <div className="flex items-center justify-center gap-4">
        <NavLinks />
        <Link
          href="https://github.com/ZeeUnltd/react-tailwind-shadcn"
          target="_blank"
          className="h-10 w-10 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground"
        >
          <Github />
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default NavBar;
