import { Navigation } from "@/components/Navigation";
import { PhotoGallery } from "@/components/PhotoGallery";
import { Footer } from "@/components/Footer";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { Helmet } from "react-helmet";
import { PageTransition } from "@/components/ui/PageTransition";
import { useNavigationDirection } from "@/hooks/useNavigationDirection";
import { HeroBlock } from "@/components/ui/HeroBlock";

export default function Portfolio() {
  useSmoothScroll();
  const direction = useNavigationDirection();

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <Helmet>
          <title>Portfolio – Souheila Said</title>
          <meta name="description" content="Discover the editorial and visual work of Souheila Said, a model and creative based in Brussels." />
          <meta name="keywords" content="portfolio, fashion, editorial, creative, Brussels, runway" />
          <meta name="author" content="Souheila Said" />
        </Helmet>

        <Navigation />
        <HeroBlock />

        {/* Photo Gallery */}
        <section className="pb-0 bg-background">
          <PhotoGallery />
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-background">
          <div className="section-padding">
            <div className="container-narrow text-center">
              <h2 className="text-section-title mb-6">Interested in working together?</h2>
              <a href="/contact" className="btn-minimal" style={{ fontFamily: "Orbitron, sans-serif" }}>
                Get In Touch
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}

