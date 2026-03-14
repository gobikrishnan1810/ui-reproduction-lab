import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calendar,
  Building2,
  Clock,
  Target,
  TrendingUp,
  Users,
  CheckCircle2,
  Zap,
  Shield,
  BarChart3,
  Globe,
} from "lucide-react";
import caseFintech from "@/assets/case-fintech.jpg";
import caseRetail from "@/assets/case-retail.jpg";
import caseEducation from "@/assets/case-education.jpg";
import caseLogistics from "@/assets/case-logistics.jpg";
import caseSecurity from "@/assets/case-security.jpg";
import caseHealthcare from "@/assets/case-healthcare.jpg";
import heroDashboard from "@/assets/hero-dashboard.jpg";

interface CaseStudyData {
  title: string;
  subtitle: string;
  heroImage: string;
  client: string;
  completed: string;
  duration: string;
  stats: { value: string; label: string; icon: React.ReactNode }[];
  challenge: string;
  challengePoints: string[];
  approach: string;
  approachPoints: string[];
  results: string;
  resultsPoints: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  technologies: string[];
  relatedSlugs: string[];
}

const caseStudyDataMap: Record<string, CaseStudyData> = {
  "fintech-platform": {
    title: "Modernizing Digital Banking for 2M+ Users",
    subtitle:
      "How we helped a leading fintech company rebuild their core banking platform to handle massive scale while improving user experience.",
    heroImage: heroDashboard,
    client: "NovaPay Financial",
    completed: "Q3 2025",
    duration: "14-Month Engagement",
    stats: [
      { value: "2.4M+", label: "Active Users", icon: <Users className="h-5 w-5" /> },
      { value: "40%", label: "Cost Reduction", icon: <TrendingUp className="h-5 w-5" /> },
      { value: "99.97%", label: "Uptime SLA", icon: <Shield className="h-5 w-5" /> },
    ],
    challenge:
      "NovaPay's legacy banking infrastructure was struggling to keep pace with user growth. Their monolithic architecture resulted in frequent outages during peak transaction periods, a fragmented mobile experience that frustrated users, and compliance gaps that put regulatory standing at risk.",
    challengePoints: [
      "Monolithic architecture causing frequent outages during peak hours",
      "Mobile experience fragmented across 3 separate codebases",
      "SOC 2 Type II compliance gaps putting regulatory standing at risk",
      "Sub-second response times impossible under 10x traffic spikes",
    ],
    approach:
      "We decomposed the monolith into 47 event-driven microservices running on Kubernetes, implemented a CQRS pattern for transaction processing, and introduced a React Native mobile application with biometric authentication.",
    approachPoints: [
      "Migrated to 47 event-driven microservices on Kubernetes",
      "Implemented CQRS pattern for high-throughput transaction processing",
      "Built unified React Native app with biometric authentication",
      "Deployed real-time fraud detection using gradient-boosted decision trees",
      "Achieved 98% test coverage with continuous deployment pipelines",
    ],
    results:
      "Within six months of launch, NovaPay saw transformative improvements across every key metric, positioning them for aggressive expansion into new markets.",
    resultsPoints: [
      "40% reduction in infrastructure costs saving $3.2M annually",
      "3.2x improvement in transaction throughput",
      "Net Promoter Score increased from 34 to 72",
      "Blocked over $12M in fraudulent transactions in Q1",
      "Expanded into 3 new markets using the modular architecture",
    ],
    testimonial: {
      quote:
        "ApexLabs didn't just modernize our platform — they transformed how we think about technology. The results speak for themselves: happier customers, lower costs, and a foundation that scales with our ambition.",
      author: "Sarah Chen",
      role: "CTO, NovaPay Financial",
    },
    technologies: [
      "Kubernetes",
      "React Native",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "Terraform",
      "Datadog",
    ],
    relatedSlugs: ["retail-transformation", "edtech-lms", "cybersecurity-overhaul"],
  },
  "retail-transformation": {
    title: "Omnichannel Retail Platform Driving 40% Revenue Growth",
    subtitle:
      "Building a seamless shopping experience across web, mobile, and in-store touchpoints for a national retailer.",
    heroImage: caseRetail,
    client: "BrightMart Retail",
    completed: "Q1 2025",
    duration: "10-Month Engagement",
    stats: [
      { value: "40%", label: "Revenue Growth", icon: <TrendingUp className="h-5 w-5" /> },
      { value: "2.8M", label: "Monthly Orders", icon: <BarChart3 className="h-5 w-5" /> },
      { value: "62%", label: "Mobile Conversion Lift", icon: <Zap className="h-5 w-5" /> },
    ],
    challenge:
      "BrightMart operated separate technology stacks for their e-commerce, mobile app, and in-store POS systems. Inventory data was fragmented, leading to overselling and customer frustration.",
    challengePoints: [
      "Three separate tech stacks with no data synchronization",
      "Inventory overselling causing 15% order cancellation rate",
      "Mobile app had a 2.1-star rating with frequent crashes",
      "No unified customer profile across channels",
    ],
    approach:
      "We built a unified commerce platform with real-time inventory sync, a composable frontend architecture, and an AI-powered recommendation engine.",
    approachPoints: [
      "Unified commerce API layer connecting all sales channels",
      "Real-time inventory synchronization across 340 stores",
      "Composable frontend with shared component library",
      "AI recommendation engine increasing average order value by 23%",
      "Integrated loyalty program across all touchpoints",
    ],
    results:
      "BrightMart experienced a complete transformation of their digital commerce capabilities, driving substantial revenue growth and customer satisfaction improvements.",
    resultsPoints: [
      "40% year-over-year revenue growth in digital channels",
      "Order cancellation rate dropped from 15% to 1.2%",
      "Mobile app rating improved from 2.1 to 4.7 stars",
      "Customer retention increased by 28%",
      "Average order value grew 23% through personalized recommendations",
    ],
    testimonial: {
      quote:
        "The unified platform completely changed our business trajectory. We went from losing customers to overselling issues to being recognized as one of the best omnichannel experiences in retail.",
      author: "James Rodriguez",
      role: "VP of Digital, BrightMart",
    },
    technologies: [
      "Next.js",
      "GraphQL",
      "Elasticsearch",
      "AWS Lambda",
      "DynamoDB",
      "Stripe",
      "Algolia",
      "Segment",
    ],
    relatedSlugs: ["fintech-platform", "supply-chain", "edtech-lms"],
  },
  "edtech-lms": {
    title: "AI-Powered Learning Platform for 500K Students",
    subtitle:
      "Designing and building a next-generation learning management system with personalized AI tutoring at scale.",
    heroImage: caseEducation,
    client: "EduVerse Academy",
    completed: "Q4 2025",
    duration: "12-Month Engagement",
    stats: [
      { value: "500K+", label: "Active Students", icon: <Users className="h-5 w-5" /> },
      { value: "34%", label: "Completion Rate Lift", icon: <Target className="h-5 w-5" /> },
      { value: "4.8★", label: "Student Rating", icon: <Zap className="h-5 w-5" /> },
    ],
    challenge:
      "EduVerse's existing LMS was a decade-old platform that couldn't support modern pedagogical approaches. Engagement was declining and course completion rates had dropped to 18%.",
    challengePoints: [
      "Course completion rates had fallen to just 18%",
      "No adaptive learning — one-size-fits-all approach",
      "Platform couldn't handle live video for more than 50 concurrent users",
      "Content authoring took weeks with rigid, outdated tooling",
    ],
    approach:
      "We built a cloud-native LMS with AI-driven adaptive learning paths, real-time collaboration tools, and a drag-and-drop content studio.",
    approachPoints: [
      "AI engine that personalizes learning paths based on student performance",
      "WebRTC-based live classrooms supporting 10,000+ concurrent users",
      "Drag-and-drop content studio reducing authoring time by 80%",
      "Gamification system with badges, streaks, and leaderboards",
      "Offline-first mobile app for low-connectivity regions",
    ],
    results:
      "EduVerse became the fastest-growing edtech platform in their segment, with dramatic improvements in engagement and learning outcomes.",
    resultsPoints: [
      "Course completion rates increased from 18% to 52%",
      "500K active students within 6 months of relaunch",
      "Content authoring time reduced from weeks to hours",
      "Platform handles 10K+ concurrent live sessions seamlessly",
      "Expanded to 12 countries with localized content delivery",
    ],
    testimonial: {
      quote:
        "ApexLabs understood that technology alone doesn't improve education — the experience does. They built a platform our students actually love using, and the data proves it.",
      author: "Dr. Priya Sharma",
      role: "CEO, EduVerse Academy",
    },
    technologies: [
      "React",
      "Python",
      "TensorFlow",
      "WebRTC",
      "PostgreSQL",
      "Redis",
      "AWS",
      "CloudFront",
    ],
    relatedSlugs: ["fintech-platform", "patient-portal", "retail-transformation"],
  },
  "supply-chain": {
    title: "Real-Time Supply Chain Visibility Across 12 Countries",
    subtitle:
      "Delivering end-to-end supply chain transparency with IoT integration and predictive analytics for a global logistics leader.",
    heroImage: caseLogistics,
    client: "TransGlobal Logistics",
    completed: "Q2 2025",
    duration: "16-Month Engagement",
    stats: [
      { value: "12", label: "Countries Connected", icon: <Globe className="h-5 w-5" /> },
      { value: "28%", label: "Cost Savings", icon: <TrendingUp className="h-5 w-5" /> },
      { value: "99.5%", label: "Tracking Accuracy", icon: <Target className="h-5 w-5" /> },
    ],
    challenge:
      "TransGlobal managed shipments across 12 countries with disconnected systems, spreadsheets, and manual tracking calls. Shipment visibility was limited and delays were costing millions.",
    challengePoints: [
      "No real-time visibility into 60% of in-transit shipments",
      "Manual tracking processes consuming 200+ staff hours weekly",
      "Delay-related penalties exceeding $8M annually",
      "Fragmented vendor communication across 12 countries",
    ],
    approach:
      "We built a unified logistics platform with IoT sensor integration, predictive ETA modeling, and automated vendor communication workflows.",
    approachPoints: [
      "IoT sensor integration across 15,000+ shipping containers",
      "Machine learning ETA prediction with 94% accuracy",
      "Automated vendor communication and alert system",
      "Real-time dashboard with drill-down analytics by region",
      "API-first architecture for partner integration",
    ],
    results:
      "TransGlobal achieved unprecedented supply chain visibility, dramatically reducing costs and improving delivery reliability across all markets.",
    resultsPoints: [
      "Real-time visibility increased from 40% to 99.5% of shipments",
      "28% reduction in logistics costs saving $12M annually",
      "Delay-related penalties reduced by 85%",
      "Manual tracking hours cut from 200 to 15 per week",
      "Partner onboarding time reduced from months to days",
    ],
    testimonial: {
      quote:
        "We went from flying blind to having complete visibility across our entire global network. This platform has fundamentally changed how we operate.",
      author: "Michael Torres",
      role: "COO, TransGlobal Logistics",
    },
    technologies: [
      "IoT Hub",
      "Apache Kafka",
      "TimescaleDB",
      "React",
      "Python",
      "Docker",
      "Azure",
      "Power BI",
    ],
    relatedSlugs: ["retail-transformation", "cybersecurity-overhaul", "fintech-platform"],
  },
  "cybersecurity-overhaul": {
    title: "Enterprise Security Transformation Reducing Incidents by 94%",
    subtitle:
      "Overhauling cybersecurity infrastructure for a Fortune 500 company to achieve zero-trust architecture and near-zero incident rates.",
    heroImage: caseSecurity,
    client: "Meridian Corp",
    completed: "Q4 2024",
    duration: "18-Month Engagement",
    stats: [
      { value: "94%", label: "Incident Reduction", icon: <Shield className="h-5 w-5" /> },
      { value: "<4min", label: "Threat Response", icon: <Zap className="h-5 w-5" /> },
      { value: "100%", label: "Audit Compliance", icon: <CheckCircle2 className="h-5 w-5" /> },
    ],
    challenge:
      "Meridian Corp faced an escalating threat landscape with outdated perimeter-based security. A significant breach exposed 200K customer records, triggering regulatory scrutiny.",
    challengePoints: [
      "Major data breach exposing 200K customer records",
      "Average threat detection time exceeding 72 hours",
      "Legacy VPN-based access with no zero-trust controls",
      "Failed SOC 2 and ISO 27001 audit requirements",
    ],
    approach:
      "We implemented a comprehensive zero-trust security architecture with AI-powered threat detection, micro-segmentation, and continuous compliance monitoring.",
    approachPoints: [
      "Zero-trust architecture with identity-based access controls",
      "AI-powered SIEM with sub-4-minute threat detection",
      "Network micro-segmentation isolating critical assets",
      "Automated compliance monitoring for SOC 2, ISO 27001, GDPR",
      "24/7 Security Operations Center with automated response playbooks",
    ],
    results:
      "Meridian Corp went from a high-profile breach to becoming an industry benchmark for cybersecurity excellence.",
    resultsPoints: [
      "Security incidents reduced by 94% year-over-year",
      "Threat detection time dropped from 72 hours to under 4 minutes",
      "Achieved full SOC 2 Type II and ISO 27001 certification",
      "Zero customer data breaches since implementation",
      "Security team efficiency improved 5x with automation",
    ],
    testimonial: {
      quote:
        "After the breach, we needed a partner who could move fast and think strategically. ApexLabs delivered a security posture that our board, our regulators, and our customers all trust.",
      author: "David Park",
      role: "CISO, Meridian Corp",
    },
    technologies: [
      "CrowdStrike",
      "Splunk",
      "Okta",
      "HashiCorp Vault",
      "Terraform",
      "AWS",
      "Kubernetes",
      "PagerDuty",
    ],
    relatedSlugs: ["fintech-platform", "supply-chain", "patient-portal"],
  },
  "patient-portal": {
    title: "Patient Portal Serving 3 Hospital Networks",
    subtitle:
      "Creating a unified patient experience platform connecting three major hospital networks with seamless data sharing and telehealth integration.",
    heroImage: caseHealthcare,
    client: "CareConnect Health",
    completed: "Q2 2025",
    duration: "15-Month Engagement",
    stats: [
      { value: "1.2M", label: "Patients Served", icon: <Users className="h-5 w-5" /> },
      { value: "67%", label: "Wait Time Reduction", icon: <Clock className="h-5 w-5" /> },
      { value: "HIPAA", label: "Fully Compliant", icon: <Shield className="h-5 w-5" /> },
    ],
    challenge:
      "Three hospital networks operating on incompatible EHR systems needed a unified patient-facing portal with telehealth, scheduling, and secure messaging.",
    challengePoints: [
      "Three incompatible EHR systems with no interoperability",
      "Patients managing separate accounts per hospital network",
      "Average appointment scheduling time exceeding 12 minutes",
      "No telehealth capability during growing virtual care demand",
    ],
    approach:
      "We built an interoperability layer using FHIR standards, a responsive patient portal, and an integrated telehealth platform with end-to-end encryption.",
    approachPoints: [
      "FHIR-based interoperability layer unifying 3 EHR systems",
      "Single sign-on patient portal with unified health records",
      "HIPAA-compliant telehealth with end-to-end encryption",
      "AI-powered appointment scheduling reducing booking to 2 minutes",
      "Secure messaging with care team integration",
    ],
    results:
      "CareConnect Health delivered a seamless patient experience that improved satisfaction, reduced administrative burden, and enabled modern virtual care delivery.",
    resultsPoints: [
      "1.2M patients now using a single unified portal",
      "Appointment scheduling time reduced from 12 to 2 minutes",
      "Wait times decreased by 67% through intelligent scheduling",
      "Telehealth visits grew 340% in the first quarter",
      "Patient satisfaction scores improved from 3.2 to 4.6 out of 5",
    ],
    testimonial: {
      quote:
        "For the first time, our patients have one place to manage their entire health journey across all our facilities. The impact on satisfaction and operational efficiency has been remarkable.",
      author: "Dr. Amanda Foster",
      role: "Chief Digital Officer, CareConnect Health",
    },
    technologies: [
      "React",
      "FHIR",
      "Node.js",
      "PostgreSQL",
      "WebRTC",
      "AWS",
      "Docker",
      "Auth0",
    ],
    relatedSlugs: ["fintech-platform", "edtech-lms", "cybersecurity-overhaul"],
  },
};

const allStudies = [
  { slug: "fintech-platform", title: "Modernizing Digital Banking for 2M+ Users", category: "Fintech", imageUrl: caseFintech },
  { slug: "retail-transformation", title: "Omnichannel Retail Platform", category: "Retail", imageUrl: caseRetail },
  { slug: "edtech-lms", title: "AI-Powered Learning Platform", category: "Education", imageUrl: caseEducation },
  { slug: "supply-chain", title: "Real-Time Supply Chain Visibility", category: "Logistics", imageUrl: caseLogistics },
  { slug: "cybersecurity-overhaul", title: "Enterprise Security Transformation", category: "Cybersecurity", imageUrl: caseSecurity },
  { slug: "patient-portal", title: "Patient Portal for 3 Hospital Networks", category: "Healthcare", imageUrl: caseHealthcare },
];

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = caseStudyDataMap[slug || "fintech-platform"] || caseStudyDataMap["fintech-platform"];

  const relatedStudies = allStudies.filter((s) => data.relatedSlugs.includes(s.slug));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-primary">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-8 px-6 py-16 md:flex-row md:gap-12 md:py-20">
          <div className="flex-1 space-y-5">
            <span className="inline-block rounded-full bg-primary-foreground/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
              Case Study
            </span>
            <h1 className="text-3xl font-extrabold leading-tight text-primary-foreground md:text-4xl lg:text-5xl">
              {data.title}
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-primary-foreground/80">
              {data.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-sm text-primary-foreground/70">
              <span className="flex items-center gap-2">
                <Building2 className="h-4 w-4" /> {data.client}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" /> {data.completed}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" /> {data.duration}
              </span>
            </div>
          </div>
          <div className="w-full flex-1 md:w-auto">
            <div className="overflow-hidden rounded-xl shadow-2xl">
              <img
                src={data.heroImage}
                alt={data.title}
                className="aspect-[4/3] h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {data.stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {s.icon}
                </div>
                <p className="text-3xl font-extrabold text-foreground">{s.value}</p>
                <p className="text-sm font-medium text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="bg-primary/10 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-2 flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">The Challenge</h2>
          </div>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{data.challenge}</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {data.challengePoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3 rounded-lg bg-background/60 p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-xs font-bold text-destructive">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-2 flex items-center gap-3">
            <Zap className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">Our Approach</h2>
          </div>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{data.approach}</p>
          <ul className="mt-8 space-y-4">
            {data.approachPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm leading-relaxed text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The Results */}
      <section className="bg-primary/10 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-2 flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">The Results</h2>
          </div>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{data.results}</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {data.resultsPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3 rounded-lg bg-background/60 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm leading-relaxed text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm md:p-12">
            <p className="text-lg font-medium italic leading-relaxed text-foreground md:text-xl">
              "{data.testimonial.quote}"
            </p>
            <div className="mt-6">
              <p className="font-semibold text-foreground">{data.testimonial.author}</p>
              <p className="text-sm text-muted-foreground">{data.testimonial.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-section-alt py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="mb-6 text-center text-lg font-bold text-foreground">Technologies Used</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {data.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
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
              <div
                key={cs.slug}
                className="group overflow-hidden rounded-lg border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={cs.imageUrl}
                    alt={cs.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-primary">
                    {cs.category}
                  </span>
                  <h3 className="mb-4 text-lg font-semibold leading-snug text-foreground">
                    {cs.title}
                  </h3>
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

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl">
            Ready to Achieve Similar Results?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Let's discuss how our expertise can solve your toughest challenges and deliver measurable impact.
          </p>
          <Button size="lg" variant="secondary" className="mt-8 font-semibold">
            Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
