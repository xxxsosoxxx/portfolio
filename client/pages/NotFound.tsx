import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-24 bg-background">
        <div className="section-padding">
          <div className="container-narrow text-center">
            <h1 className="text-6xl md:text-8xl font-heading font-bold mb-8 text-muted-foreground">
              404
            </h1>
            <h2 className="text-section-title mb-6">Page Not Found</h2>
            <p className="text-body-large text-muted-foreground mb-12 max-w-lg mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <a
              href="/"
              className="btn-minimal"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              Return Home
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
