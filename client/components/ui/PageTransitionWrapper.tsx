import { PageTransition } from "./PageTransition";

export function PageTransitionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <PageTransition>
      {children}
    </PageTransition>
  );
}
