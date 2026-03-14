import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyCard from "@/components/CaseStudyCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import caseFintech from "@/assets/case-fintech.jpg";
import caseRetail from "@/assets/case-retail.jpg";
import caseEducation from "@/assets/case-education.jpg";
import caseLogistics from "@/assets/case-logistics.jpg";
import caseSecurity from "@/assets/case-security.jpg";
import caseHealthcare from "@/assets/case-healthcare.jpg";

const caseStudies = [
  {
    slug: "fintech-platform",
    title: "Modernizing Digital Banking for 2M+ Users",
    category: "Fintech",
    imageUrl: caseFintech,
  },
  {
    slug: "retail-transformation",
    title: "Omnichannel Retail Platform Driving 40% Revenue Growth",
    category: "Retail",
    imageUrl: caseRetail,
  },
  {
    slug: "edtech-lms",
    title: "AI-Powered Learning Platform for 500K Students",
    category: "Education",
    imageUrl: caseEducation,
  },
  {
    slug: "supply-chain",
    title: "Real-Time Supply Chain Visibility Across 12 Countries",
    category: "Logistics",
    imageUrl: caseLogistics,
  },
  {
    slug: "cybersecurity-overhaul",
    title: "Enterprise Security Transformation Reducing Incidents by 94%",
    category: "Cybersecurity",
    imageUrl: caseSecurity,
  },
  {
    slug: "patient-portal",
    title: "Patient Portal Serving 3 Hospital Networks",
    category: "Healthcare",
    imageUrl: caseHealthcare,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-primary">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 md:flex-row md:py-24">
          <div className="flex-1 space-y-6">
            <h1 className="text-3xl font-extrabold leading-tight text-primary-foreground md:text-5xl">
              Technology Solutions That Deliver Real Results
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-primary-foreground/80">
              Explore how we've helped industry leaders transform their operations, accelerate growth, and outperform the competition through strategic technology partnerships.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="mt-2 font-semibold"
            >
              Explore Our Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1">
            <div className="overflow-hidden rounded-lg shadow-2xl">
              <img
                src={heroDashboard}
                alt="Analytics dashboard showcasing consulting results"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Featured Case Studies
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Each project represents a unique challenge solved with tailored technology strategy and execution.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.slice(0, 3).map((cs) => (
              <CaseStudyCard key={cs.slug} {...cs} />
            ))}
          </div>
        </div>
      </section>

      {/* Second Row */}
      <section className="bg-section-alt py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              More Success Stories
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              From logistics to cybersecurity, our impact spans every critical business function.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.slice(3).map((cs) => (
              <CaseStudyCard key={cs.slug} {...cs} />
            ))}
          </div>
        </div>
      </section>

      {/* Spacer / CTA Section */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Ready to Write Your Success Story?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Let's discuss how we can apply our expertise to solve your toughest business challenges and drive meaningful growth.
          </p>
          <Button size="lg" className="mt-8 font-semibold">
            Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
