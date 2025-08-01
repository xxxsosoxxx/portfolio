import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation /> 

      <main className="flex-1">
        {children} 
      </main>

      <Footer /> 
    </div>
  );
}

