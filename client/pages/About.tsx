import { useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { PageTransition } from "@/components/ui/PageTransition";
import { HeroBlock } from "@/components/ui/HeroBlock";

export default function About() {
  const textRef = useRef<HTMLDivElement>(null);
  const [textHeight, setTextHeight] = useState<number>(0);

  useEffect(() => {
    const updateHeight = () => {
      if (textRef.current) {
        setTextHeight(textRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <>
      <Helmet>
        <title>About – Souheila Said</title>
        <meta name="description" content="Meet Souheila Said, a Brussels-based model and creative whose body becomes structure, and fashion a language. Presence as resistance, style as declaration." />
        <meta name="keywords" content="Souheila Said, model biography, creative direction, fashion manifesto, body architecture, editorial identity, Brussels" />
        <meta name="author" content="Souheila Said" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <PageTransition>
          <HeroBlock />

          <section className="bg-background py-24">
            <div className="container-narrow grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              
              {/* Text */}
              <div ref={textRef} className="text-muted-foreground space-y-6 max-w-xl text-[clamp(1rem,2vw,1.125rem)] leading-[1.8]">
                <p>I believe in fashion as form, not distraction.</p>
                <p className="about-text-highlight">
                  My body is not a product. It is an expression.<br />
                  It belongs to form, to movement, to substance.
                </p>
                <p>
                  I stand with those who design, construct, and reflect.<br />
                  Those who see fabric as structure, and the body as narrative.
                </p>
                <p>Not a label. Not a passing style. Not an accessory.</p>
                <p>
                  I believe in silhouettes that create presence.<br />
                  In visions that endure.<br />
                  In quiet strength that speaks beyond the noise.
                </p>
                <p>
                  I move with designers who imagine the future.<br />
                  With creators who build meaning.
                </p>
                <p>I am not here to embellish.<br />I am here to contribute.</p>
              </div>

              {/* Photo */}
              <div className="flex justify-center items-start min-w-[300px]" style={{ height: textHeight || "auto" }}>
                <img
                  src="/DSC_0666.jpg"
                  alt="Souheila"
                  className="rounded-lg shadow-lg object-cover w-auto h-full max-h-[1000px]"
                />
              </div>
            </div>

            {/* Background & Measurements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-24">
              <div>
                <h2 className="font-heading text-[clamp(2rem,4vw,2.25rem)] font-semibold leading-tight mb-6">Background</h2>
                <div className="text-muted-foreground space-y-4 text-[18px] leading-[28px] max-w-xl">
                  <p>Souheila collaborates on editorial, conceptual, and runway projects, focusing on sculptural silhouettes and quiet power.</p>
                  <p>Her presence is precise and instinctive, where structure meets sensuality.</p>
                  <p>She gravitates towards creative directions that value strength, elegance, and intention.</p>
                  <p>Based in Brussels, available for opportunities in Paris, Antwerp, and beyond.</p>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-[clamp(2rem,4vw,2.25rem)] font-semibold leading-tight mb-6">Measurements</h3>
                <div className="space-y-3 text-muted-foreground text-[18px] font-semibold">
                  {[
                    ["Height", "177 cm | 5'9.5"],
                    ["Chest", "81 cm | 32"],
                    ["Waist", "63 cm | 25"],
                    ["Hips", "81 cm | 32"],
                    ["Shoes", "39 EU"],
                    ["Hair", "Dark Brown"],
                    ["Eyes", "Brown"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between">
                      <span>{label}</span>
                      <span className="font-normal">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </PageTransition>
      </div>
    </>
  );
}
