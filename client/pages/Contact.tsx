import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";

<Helmet>
  <title>Contact – Souheila Said</title>
  <meta
    name="description"
    content="Get in touch with Souheila Said — available for editorial shoots, runway projects and creative collaborations across Europe. Based in Brussels."
  />
  <meta
    name="keywords"
    content="Contact Souheila Said, fashion collaboration, editorial inquiries, runway availability, Brussels model contact, Europe model creative"
  />
  <meta name="author" content="Souheila Said" />
</Helmet>

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "success" | "error" | "loading">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        "service_2fxp84m",
        "contact_form_template",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "FE0d3sdUzojv9oAQ3"
      );

      setFormData({ name: "", email: "", message: "" });
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="section-padding">
          <div className="container-narrow text-center">
            <h1 className="text-hero mb-8 animate-fade-in-up">Contact</h1>
            <p className="text-subhero text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
              Ready to collaborate? Let's create something beautiful together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-24">
        <div className="section-padding">
          <div className="container-narrow">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="animate-fade-in">
                <h2 className="text-section-title mb-8">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      className="w-full px-0 py-3 border-0 border-b border-border bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      className="w-full px-0 py-3 border-0 border-b border-border bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-0 py-3 border-0 border-b border-border bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="btn-minimal w-full md:w-auto"
                      style={{ fontFamily: "Orbitron, sans-serif" }}
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? "Sending..." : "Send Message"}
                    </button>
                    {status === "success" && (
                      <p className="text-green-600 mt-4">
                        Thank you! Your message has been sent.
                      </p>
                    )}
                    {status === "error" && (
                      <p className="text-red-600 mt-4">
                        Something went wrong. Please try again later.
                      </p>
                    )}
                  </div>
                </form>
              </div>

              {/* Contact Information */}
              <div className="animate-fade-in space-y-8">
                <div>
                  <h2 className="text-section-title mb-8">Get in Touch</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-heading font-semibold mb-2">Email</h3>
                      <a
                        href="mailto:contact@souheilasaid.com"
                        className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                      >
                        contact@souheilasaid.com
                      </a>
                    </div>

                    <div>
                      <h3 className="text-lg font-heading font-semibold mb-2">Location</h3>
                      <p className="text-body text-muted-foreground">Brussels, Belgium</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-heading font-semibold mb-2">Social</h3>
                      <div className="space-y-2">
                        <a
                          href="https://instagram.com/souheila.said"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-muted-foreground hover:text-foreground transition-colors duration-300"
                        >
                          Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <h3 className="text-lg font-heading font-semibold mb-4">Professional Inquiries</h3>
                  <p className="text-body text-muted-foreground">
                    Available for editorial shoots, runway shows, and creative collaborations.
                    Based in Brussels with availability for travel across Europe.
                  </p>
                </div>

                <div className="pt-8">
                  <h3 className="text-lg font-heading font-semibold mb-4">Response Time</h3>
                  <p className="text-body text-muted-foreground">
                    I typically respond to inquiries within 24–48 hours.
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
