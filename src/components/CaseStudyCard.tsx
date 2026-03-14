import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CaseStudyCardProps {
  slug: string;
  title: string;
  category: string;
  imageUrl: string;
}

const CaseStudyCard = ({ slug, title, category, imageUrl }: CaseStudyCardProps) => {
  return (
    <div className="group overflow-hidden rounded-lg border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-primary">
          {category}
        </span>
        <h3 className="mb-4 text-lg font-semibold leading-snug text-foreground">
          {title}
        </h3>
        <Button asChild variant="default" size="sm">
          <Link to={`/case-study/${slug}`}>
            View Study <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CaseStudyCard;
