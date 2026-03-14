import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">
              Apex<span className="text-primary">Labs</span>
            </h3>
            <p className="text-sm leading-relaxed text-footer-foreground/70">
              Delivering transformative technology solutions that drive measurable business outcomes across industries.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm text-footer-foreground/70">
              <li><Link to="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Industries</h4>
            <ul className="space-y-3 text-sm text-footer-foreground/70">
              <li><Link to="/healthcare" className="hover:text-primary transition-colors">Healthcare</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Finance</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Retail</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Education</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Connect</h4>
            <ul className="space-y-3 text-sm text-footer-foreground/70">
              <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">hello@apexlabs.io</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-footer-foreground/10 pt-8 text-center text-sm text-footer-foreground/50">
          © {new Date().getFullYear()} ApexLabs. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
