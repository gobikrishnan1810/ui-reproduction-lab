import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Building2, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import caseFintech from "@/assets/case-fintech.jpg";
import caseRetail from "@/assets/case-retail.jpg";
import caseEducation from "@/assets/case-education.jpg";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const stats = [
  { value: "2.4M+", label: "Active Users" },
  { value: "40%", label: "Cost Reduction" },
  { value: "99.97%", label: "Uptime SLA" },
];

const relatedStudies = [
  { slug: "retail-transformation", title: "Omnichannel Retail Platform", category: "Retail", imageUrl: caseRetail },
  { slug: "edtech-lms", title: "AI-Powered Learning Platform", category: "Education", imageUrl: caseEducation },
  { slug: "fintech-platform", title: "Digital Banking Modernization", category: "Fintech", imageUrl: caseFintech },
];

const CaseStudyDetail = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-primary/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-16 md:flex-row md:py-20">
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
              Modernizing Digital Banking for 2M+ Users
            </h1>
            <p className="text-lg text-muted-foreground">
              How we helped a leading fintech company rebuild their core banking platform to handle massive scale while improving user experience.
            </p>
          </div>
          <div className="flex-1">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={heroDashboard}
                alt="Fintech platform dashboard"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meta + Stats */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Building2 className="h-4 w-4" /> NovaPay Financial
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" /> Completed Q3 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" /> 14-Month Engagement
            </span>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-lg bg-primary/10 p-6 text-center">
                <p className="text-3xl font-extrabold text-primary">{s.value}</p>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section (blue bg) */}
      <section className="bg-primary/10 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-6 text-xl font-bold text-foreground md:text-2xl">The Challenge</h2>
          <p className="max-w-3xl leading-relaxed text-muted-foreground">
            NovaPay's legacy banking infrastructure was struggling to keep pace with user growth. Their monolithic architecture resulted in frequent outages during peak transaction periods, a fragmented mobile experience that frustrated users, and compliance gaps that put regulatory standing at risk. The platform needed a ground-up rethinking that could handle 10x traffic spikes while maintaining sub-200ms response times and meeting SOC 2 Type II requirements.
          </p>
        </div>
      </section>

      {/* Approach Section (white bg) */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-6 text-xl font-bold text-foreground md:text-2xl">Our Approach</h2>
          <p className="max-w-3xl leading-relaxed text-muted-foreground">
            We decomposed the monolith into 47 event-driven microservices running on Kubernetes, implemented a CQRS pattern for transaction processing, and introduced a React Native mobile application with biometric authentication. Our team embedded with NovaPay's engineering org for 14 months, running two-week sprints with continuous deployment pipelines that achieved 98% test coverage. We also implemented a real-time fraud detection engine using gradient-boosted decision trees trained on historical transaction data.
          </p>
        </div>
      </section>

      {/* Results Section (blue bg) */}
      <section className="bg-primary/10 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-6 text-xl font-bold text-foreground md:text-2xl">The Results</h2>
          <p className="max-w-3xl leading-relaxed text-muted-foreground">
            Within six months of launch, NovaPay saw a 40% reduction in infrastructure costs, a 3.2x improvement in transaction throughput, and a Net Promoter Score increase from 34 to 72. The new fraud detection system blocked over $12M in fraudulent transactions in its first quarter. The platform now serves 2.4 million active users with 99.97% uptime, and NovaPay has expanded into three new markets using the modular architecture we built.
          </p>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-foreground">
            Related Case Studies
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relatedStudies.map((cs) => (
              <div key={cs.slug} className="group overflow-hidden rounded-lg border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img src={cs.imageUrl} alt={cs.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-primary">{cs.category}</span>
                  <h3 className="mb-4 text-lg font-semibold leading-snug text-foreground">{cs.title}</h3>
                  <Button asChild variant="default" size="sm">
                    <Link to={`/case-study/${cs.slug}`}>
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
