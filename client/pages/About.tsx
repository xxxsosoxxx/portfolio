import React, { useState, useRef, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";

<Helmet>
  <title>About – Souheila Said</title>
  <meta
    name="description"
    content="Meet Souheila Said, a Brussels-based model and creative whose body becomes structure, and fashion a language. Presence as resistance, style as declaration."
  />
  <meta
    name="keywords"
    content="Souheila Said, model biography, creative direction, fashion manifesto, body architecture, editorial identity, Brussels"
  />
  <meta name="author" content="Souheila Said" />
</Helmet>

export default function About() {
  const aboutContentRef = useRef<HTMLDivElement>(null);
  const [aboutHeight, setAboutHeight] = useState<number>(0);

  useEffect(() => {
    function updateHeight() {
      if (aboutContentRef.current) {
        setAboutHeight(aboutContentRef.current.offsetHeight);
      }
    }
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="flex-1 bg-background pt-32 pb-16">
        <div className="section-padding">
          <div className="container-narrow">
            {/* About Section */}
            <div className="flex flex-col md:flex-row md:gap-16">
              {/* Photo */}
              <div
                className="order-1 md:order-2 flex items-start justify-center mb-8 md:mb-0"
                style={{
                  height: aboutHeight || "auto",
                  minWidth: "300px",
                  flex: 1,
                }}
              >
                <img
                  src="/DSC_0666.jpg"
                  alt="Souheila"
                  className="rounded-lg shadow-lg w-auto h-full object-cover max-h-[1000px]"
                />
              </div>

              {/* About Text */}
              <div
                ref={aboutContentRef}
                className="order-2 md:order-1 max-w-xl flex flex-col justify-between flex-1"
                style={{ fontSize: "16px", lineHeight: "24px" }}
              >
                {/* Title at the top */}
                <h2 className="text-4xl font-semibold mb-6">About</h2>

                {/* Text aligned bottom */}
                <div className="text-subhero text-muted-foreground mt-auto">
                  <br />
                  <br />
                  I believe in fashion as form, not distraction.
                  <br />
                  <span className="about-text">
                    <span className="about-text-highlight">
                      My body is not a product. It is an expression.
                      <br />
                      It belongs to form, to movement, to substance.
                    </span>
                    <br />
                    <br />
                    I stand with those who design, construct, and reflect.
                    Those who see fabric as structure, and the body as
                    narrative.
                    <br />
                    <br />
                    Not a label. Not a passing style. Not an accessory.
                    <br />
                    <br />
                    I believe in silhouettes that create presence.
                    <br />
                    In visions that endure.
                    <br />
                    In quiet strength that speaks beyond the noise.
                    <br />
                    <br />
                    I move with designers who imagine the future.
                    <br />
                    With creators who build meaning.
                    <br />
                    <br />
                    I am not here to embellish.
                    <br />I am here to contribute.
                  </span>
                </div>
              </div>
            </div>

            {/* Background & Measurements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
              {/* Background */}
              <div>
                <h2
                  className="font-heading font-semibold mb-6"
                  style={{
                    fontSize: "36px",
                    fontWeight: "600",
                    letterSpacing: "-0.2px",
                    lineHeight: "44px",
                  }}
                >
                  Background
                </h2>
                <div
                  className="text-body text-muted-foreground max-w-xl"
                  style={{ fontSize: "18px", lineHeight: "28px" }}
                >
                  <p>
                    Souheila collaborates on editorial, conceptual, and runway
                    projects, focusing on sculptural silhouettes and quiet
                    power.
                    <br />
                    <br />
                  </p>
                  <p>
                    Her presence is precise and instinctive, where structure
                    meets sensuality.
                  </p>
                  <p>
                    She gravitates towards creative directions that value
                    strength, elegance, and intention.
                    <br />
                    <br />
                  </p>
                  <p>
                    Based in Brussels, available for opportunities in Paris,
                    Antwerp, and beyond.
                  </p>
                </div>
              </div>

              {/* Measurements */}
              <div className="font-semibold text-xl self-start">
                <h3
                  className="font-heading font-semibold mb-6"
                  style={{
                    fontSize: "36px",
                    fontWeight: "600",
                    letterSpacing: "-0.2px",
                    lineHeight: "44px",
                  }}
                >
                  Measurements
                </h3>
                <div
                  className="space-y-3 text-muted-foreground"
                  style={{ fontSize: "18px" }}
                >
                  <div className="flex justify-between">
                    <span>Height</span>
                    <span>177 cm | 5'9.5</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Chest</span>
                    <span>81 cm | 32</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Waist</span>
                    <span>63 cm | 25</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hips</span>
                    <span>81 cm | 32</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shoes</span>
                    <span>
                      <span style={{ fontWeight: "normal" }}>39 </span>
                      <span style={{ fontWeight: "normal" }}>EU</span>
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hair</span>
                    <span>
                      <span style={{ fontWeight: "normal" }}>Dark Brown</span>
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Eyes</span>
                    <span>
                      <span style={{ fontWeight: "normal" }}>Brown</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
