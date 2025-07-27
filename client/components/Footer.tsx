import DarkModeToggle from "@/components/ui/darkmodetoggle";

export function Footer() {
  return (
    <footer className="bg-background text-foreground border-t border-border py-12 transition-colors duration-500">
      <div className="section-padding">
        <div className="container-narrow">
          {/* Layout principal responsive */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* © à gauche */}
            <div className="text-sm text-muted-foreground md:text-left text-center">
              © Souheila Said 2025 – All rights reserved
            </div>

            {/* Toggle centré uniquement sur desktop */}
            <div className="hidden md:flex justify-center">
              <DarkModeToggle />
            </div>

            {/* Mentions légales à droite */}
            <div className="flex md:justify-end justify-center space-x-6">
              <a
                href="/accessibility"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Accessibility statement
              </a>
              <a
                href="/terms-of-use"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Terms of Use
              </a>
            </div>
          </div>

          {/* Toggle uniquement visible sur mobile — en dessous des mentions */}
          <div className="mt-8 flex md:hidden justify-center">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}



