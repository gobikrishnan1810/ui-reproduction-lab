import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Brain, Stethoscope, Activity, Users } from "lucide-react";
import { Link } from "react-router-dom";
import healthcareHero from "@/assets/healthcare-hero.jpg";
import caseHealthcare from "@/assets/case-healthcare.jpg";

const features = [
  {
    icon: Heart,
    title: "Patient Engagement Platforms",
    description: "We build intuitive patient portals and mobile apps that improve engagement rates by up to 60%, enabling self-scheduling, telehealth, and real-time health tracking.",
  },
  {
    icon: Shield,
    title: "HIPAA-Compliant Infrastructure",
    description: "Our cloud architectures are designed from the ground up for healthcare compliance, with end-to-end encryption, audit logging, and zero-trust access controls.",
  },
  {
    icon: Brain,
    title: "Clinical AI & Analytics",
    description: "Leverage machine learning models trained on clinical data to support diagnostic decision-making, predict patient outcomes, and optimize resource allocation.",
  },
  {
    icon: Stethoscope,
    title: "EHR Integration Services",
    description: "Seamless interoperability with Epic, Cerner, and Allscripts through HL7 FHIR APIs, reducing data silos and enabling unified patient records across networks.",
  },
  {
    icon: Activity,
    title: "Remote Patient Monitoring",
    description: "IoT-enabled monitoring solutions that track vitals in real time, trigger automated alerts, and reduce hospital readmissions by up to 35%.",
  },
  {
    icon: Users,
    title: "Population Health Management",
    description: "Data-driven platforms that aggregate clinical, claims, and social determinants data to identify at-risk populations and improve community health outcomes.",
  },
];

const Healthcare = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section
        className="relative bg-primary"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${healthcareHero})` }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center md:py-32">
          <h1 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight text-primary-foreground md:text-5xl">
            Transforming Healthcare Through Intelligent Technology
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
            From patient portals to clinical AI, we partner with healthcare organizations to build technology that improves outcomes, reduces costs, and saves lives.
          </p>
          <Button size="lg" variant="secondary" className="mt-8 font-semibold">
            View Healthcare Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Features Grid - Row 1 */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-3">
            {features.slice(0, 3).map((f) => (
              <div key={f.title} className="rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                  <f.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid - Row 2 */}
      <section className="bg-section-alt py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-3">
            {features.slice(3).map((f) => (
              <div key={f.title} className="rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                  <f.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Bottom Section */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Partner With Us on Your Next Healthcare Initiative
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Whether you're a hospital network, health tech startup, or insurance provider, we have the domain expertise and technical depth to deliver.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="font-semibold">
              Start a Conversation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/">View All Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Healthcare;
