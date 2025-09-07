import { Helmet } from "react-helmet";
import { PageTransition } from "@/components/ui/PageTransition";
import { HeroBlock } from "@/components/ui/HeroBlock";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About – Souheila Said</title>
        <meta name="description" content="Meet Souheila Said, a Brussels-based model and creative whose body becomes structure, and fashion a language." />
        <meta name="keywords" content="Souheila Said, model biography, creative direction, fashion manifesto, body architecture, editorial identity, Brussels" />
        <meta name="author" content="Souheila Said" />
      </Helmet>

      <PageTransition>
        <HeroBlock />

        {/* Mobile immersive version */}
        <section className="md:hidden relative h-[80vh] overflow-hidden group">
          <img
            src="/DSC_0666.jpg"
            alt="Portrait of Souheila Said"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.5] z-0"
          />
        </section>

        {/* Mobile: Background & Measurements */}
        <section className="md:hidden px-6 py-12 space-y-12 font-body text-[clamp(1rem,4vw,1.125rem)] leading-[1.8]">
          <div>
            <h2 className="font-heading text-[clamp(1.75rem,5vw,2rem)] font-semibold mb-4">Background</h2>
            <p>Souheila collaborates on editorial, conceptual, and runway projects, focusing on sculptural silhouettes and quiet power.</p>
            <p>Her presence is precise and instinctive, where structure meets sensuality.</p>
            <p>She gravitates towards creative directions that value strength, elegance, and intention.</p>
            <p>Based in Brussels, available for opportunities in Paris, Antwerp, and beyond.</p>
          </div>

          <div>
            <h3 className="font-heading text-[clamp(1.75rem,5vw,2rem)] font-semibold mb-4">Measurements</h3>
            <ul className="space-y-2 font-semibold">
              <li>Height: 177 cm | 5'9.5</li>
              <li>Chest: 81 cm | 32</li>
              <li>Waist: 63 cm | 25</li>
              <li>Hips: 81 cm | 32</li>
              <li>Shoes: 39 EU</li>
              <li>Hair: Dark Brown</li>
              <li>Eyes: Brown</li>
            </ul>
          </div>
        </section>

        {/* Desktop grid version */}
        <section className="hidden md:block bg-background py-16">
          <div className="container-narrow grid grid-cols-2 grid-rows-2 gap-x-16 gap-y-24 items-start" style={{
            display: "grid",
            gridTemplateAreas: `
              "manifesto photo"
              "bio measurements"
            `
          }}>

            <div className="about-photo relative" style={{ gridArea: "photo" }}>
              <img
                src="/DSC_0666.jpg"
                alt="Portrait of Souheila Said"
                className="rounded-lg shadow-lg object-cover w-full max-w-[500px] aspect-[3/4] gallery-item"
              />
            </div>

            <div className="about-bio font-body space-y-4 text-muted-foreground text-[18px] leading-[28px] max-w-xl" style={{ gridArea: "bio" }}>
              <h2 className="font-heading text-[clamp(2rem,4vw,2.25rem)] font-semibold leading-tight mb-4">Background</h2>
              <p>Souheila collaborates on editorial, conceptual, and runway projects, focusing on sculptural silhouettes and quiet power.</p>
              <p>Her presence is precise and instinctive, where structure meets sensuality.</p>
              <p>She gravitates towards creative directions that value strength, elegance, and intention.</p>
              <p>Based in Brussels, available for opportunities in Paris, Antwerp, and beyond.</p>
            </div>

            <div className="about-measurements font-body space-y-3 text-muted-foreground text-[18px] font-semibold" style={{ gridArea: "measurements" }}>
              <h3 className="font-heading text-[clamp(2rem,4vw,2.25rem)] font-semibold leading-tight mb-4">Measurements</h3>
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
        </section>
      </PageTransition>
    </>
  );
}