export default function Accessibility() {
  return (
    <div className="h-screen overflow-y-auto">

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-background">
        <div className="section-padding">
          <div className="container-narrow">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              Accessibility Statement
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="section-padding">
          <div className="container-narrow">
            <div className="prose prose-lg max-w-none">
              <div className="text-body text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Souheila Said is committed to ensuring digital accessibility
                  for people with disabilities. We aim to improve the user
                  experience for everyone and apply relevant accessibility
                  standards where possible.
                </p>

                <p>
                  If you encounter accessibility barriers on this website, or if
                  you have suggestions to improve the user experience, please
                  contact us at:
                </p>

                <div className="my-8">
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

                <p>
                  We will do our best to respond and address the issue in a
                  timely manner.
                </p>

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
    </div>
  );
}
