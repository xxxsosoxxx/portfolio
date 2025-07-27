import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Index() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Helmet>
        <title>Souheila Said – Model & Creative</title>
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
        <section
          className={`relative h-screen flex items-center justify-center transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 z-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F32dbebdc41de4f02a397c4bcb49e3699%2F7f99b673551e42f7a1aa9f5d299383b4"
              alt="Souheila Said Fashion Model"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
          <div
            className={`relative z-10 text-center text-white px-6 transition-transform duration-700 ${
              isLoaded ? "translate-y-0" : "translate-y-8"
            }`}
          >
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
              <div
                className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-1000 delay-300 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
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
                    <a
                      href="/portfolio"
                      className="btn-minimal inline-block"
                      style={{
                        cursor: "pointer",
                        fontFamily: "Orbitron, sans-serif",
                        fontSize: "14px",
                        lineHeight: "22.4px",
                        fontWeight: 400,
                      }}
                    >
                      View Portfolio
                    </a>
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
                  <a
                    href="/portfolio"
                    className="tracking-wider uppercase hover:text-muted-foreground transition-colors duration-300"
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      fontSize: "14px",
                      lineHeight: "20px",
                      fontWeight: 500,
                    }}
                  >
                    Explore Work →
                  </a>
                </div>

                {/* About */}
                <div className="group">
                  <h3 className="text-xl font-heading font-semibold mb-4 group-hover:text-muted-foreground transition-colors duration-300">
                    About
                  </h3>
                  <p className="text-body text-muted-foreground mb-6">
                    Background and measurements
                  </p>
                  <a
                    href="/about"
                    className="tracking-wider uppercase hover:text-muted-foreground transition-colors duration-300"
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      fontSize: "14px",
                      lineHeight: "20px",
                      fontWeight: 500,
                    }}
                  >
                    Learn More →
                  </a>
                </div>

                {/* Contact */}
                <div className="group">
                  <h3 className="text-xl font-heading font-semibold mb-4 group-hover:text-muted-foreground transition-colors duration-300">
                    Contact
                  </h3>
                  <p className="text-body text-muted-foreground mb-6">
                    Ready to collaborate?
                  </p>
                  <a
                    href="/contact"
                    className="tracking-wider uppercase hover:text-muted-foreground transition-colors duration-300"
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      fontSize: "14px",
                      lineHeight: "20px",
                      fontWeight: 500,
                    }}
                  >
                    Get In Touch →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}


