import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="section-padding">
          <div className="container-narrow">
            <h1 className="text-hero mb-8 animate-fade-in-up">Terms of Use</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="section-padding">
          <div className="container-narrow">
            <div className="prose prose-lg max-w-none">
              <div className="text-body text-muted-foreground leading-relaxed space-y-8">
                <p>
                  Welcome to souheilasaid.com. By accessing or using this
                  website, you agree to be bound by the following terms and
                  conditions.
                </p>

                <div>
                  <h2 className="text-section-title mb-4">
                    1. Intellectual Property
                  </h2>
                  <p>
                    All content on this website, including text, images, and
                    design elements, is the property of Souheila Said unless
                    otherwise stated. Reuse or reproduction without permission
                    is prohibited.
                  </p>
                </div>

                <div>
                  <h2 className="text-section-title mb-4">2. Use of Website</h2>
                  <p>
                    This site is intended for personal, non-commercial use only.
                    Any misuse or unauthorized use may result in legal action.
                  </p>
                </div>

                <div>
                  <h2 className="text-section-title mb-4">3. Contact</h2>
                  <p>For questions about these terms, you may contact me at:</p>
                  <div className="my-4">
                    <p className="text-lg">
                      📧{" "}
                      <a
                        href="mailto:contact@souheilasaid.com"
                        className="text-foreground hover:text-muted-foreground transition-colors duration-300 underline"
                      >
                        contact@souheilasaid.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground italic">
                    Last updated: July 2025
                  </p>
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
