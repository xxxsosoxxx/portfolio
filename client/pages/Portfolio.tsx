import { Navigation } from "@/components/Navigation";
import { PhotoGallery } from "@/components/PhotoGallery";
import { Footer } from "@/components/Footer";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { Helmet } from "react-helmet";

export default function Portfolio() {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Portfolio – Souheila Said</title>
        <meta
          name="description"
          content="Discover the editorial and visual work of Souheila Said, a model and creative based in Brussels."
        />
        <meta
          name="keywords"
          content="portfolio, fashion, editorial, creative, Brussels, runway"
        />
        <meta name="author" content="Souheila Said" />
      </Helmet>

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="section-padding">
          <div className="container-narrow text-center">
            <h1
            className="text-hero mb-8 animate-fade-in-up font-heading font-semibold"
            style={{
            fontSize: "36px",
            fontWeight: 600,
            letterSpacing: "-0.2px",
            lineHeight: "44px"
            }}
            >
              Portfolio
            </h1>
            <p className="text-subhero text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
              A curated collection of studio shoots and creative collaborations.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="pb-0 bg-background">
        <PhotoGallery />
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-background">
        <div className="section-padding">
          <div className="container-narrow text-center">
            <h2 className="text-section-title mb-6">Interested in working together?</h2>
            <a
              href="/contact"
              className="btn-minimal"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
