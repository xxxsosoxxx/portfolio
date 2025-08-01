import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useNavigationDirection } from "@/hooks/useNavigationDirection";
import { AnimatedCTA } from "@/components/ui/animatedCTA";

export default function Index() {
  const direction = useNavigationDirection();


  return (
      <div className="min-h-screen relative overflow-hidden animate-fade-in-up">
        <Helmet>
          <title>Souheila Said</title>
          <meta
            name="description"
            content="Discover the editorial and visual universe of Souheila Said — a model and creative voice based in Brussels."
          />
          <meta
            name="keywords"
            content="Souheila Said, fashion model, creative, editorial portfolio, Brussels"
          />
          <meta name="author" content="Souheila Said" />
        </Helmet>

        <main className="relative overflow-clip">
          {/* Navigation */}
          <Navigation />

          {/* Hero Section */}
          <section className="relative h-screen flex items-center justify-center text-white transition-opacity duration-700">
            <div className="absolute inset-0 z-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F32dbebdc41de4f02a397c4bcb49e3699%2F7f99b673551e42f7a1aa9f5d299383b4"
                alt="Souheila Said Fashion Model"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>

            <div className="relative z-10 text-center px-6">
              <h1
                className="text-6xl md:text-7xl mb-4 leading-tight"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                SOUHEILA SAID
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto">
                Model based in Brussels.
                <br />
                Available for editorial and runway.
              </p>
            </div>
          </section>


          {/* Brief Introduction Section */}
          <section className="py-24 bg-background">
            <div className="section-padding">
              <div className="container-narrow">
                <div className="grid md:grid-cols-2 gap-16 items-center opacity-100 translate-y-0 transition-all duration-1000 delay-300">
                  <div className="space-y-6">
                    <h2 className="text-section-title text-foreground">
                      Long legs don't care.
                    </h2>
                    <p className="text-body-large text-muted-foreground">
                      Too tall to hide.
                      <br />
                      Too tired to conform.
                    </p>
                    <div className="pt-4">
                      <AnimatedCTA href="/portfolio" label="View Portfolio" direction="right" />
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F32dbebdc41de4f02a397c4bcb49e3699%2Fd50b715b548f4eaca830b5aa1af7221e"
                      alt="Souheila Said Portrait"
                      className="w-full max-h-[80vh] object-contain sm:object-cover sm:h-[600px]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Links Section */}
          <section className="py-20 border-t border-border bg-blurred">
            <div className="section-padding">
              <div className="container-wide">
                <div className="grid md:grid-cols-3 gap-12 text-center">
                  {/* Portfolio */}
                  <div className="group">
                    <h3 className="text-xl font-heading font-semibold mb-4 group-hover:text-muted-foreground transition-colors duration-300">
                      Portfolio
                    </h3>
                    <p className="text-body text-muted-foreground mb-6">
                      Editorial shoots and polaroïds
                    </p>
                    <AnimatedCTA href="/portfolio" label="Explore Work" direction="right" />
                  </div>

                  {/* About */}
                  <div className="group">
                    <h3 className="text-xl font-heading font-semibold mb-4 group-hover:text-muted-foreground transition-colors duration-300">
                      About
                    </h3>
                    <p className="text-body text-muted-foreground mb-6">
                      Background and measurements
                    </p>
                    <AnimatedCTA href="/about" label="Learn More" direction="right" />
                  </div>

                  {/* Contact */}
                  <div className="group">
                    <h3 className="text-xl font-heading font-semibold mb-4 group-hover:text-muted-foreground transition-colors duration-300">
                      Contact
                    </h3>
                    <p className="text-body text-muted-foreground mb-6">
                      Ready to collaborate?
                    </p>
                    <AnimatedCTA href="/contact" label="Get In Touch" direction="right" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </main>
      </div>
  );
}



