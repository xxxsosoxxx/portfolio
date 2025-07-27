import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Merci() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-32 text-center">
        <h1 className="text-hero mb-4">Email sent 🎉</h1>
        <p className="text-subhero text-muted-foreground">
          Thank you for your message. I will get back to you as soon as possible.
        </p>
        <div className="pt-8">
          <a href="/" className="btn-minimal">
            Back to Home
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
