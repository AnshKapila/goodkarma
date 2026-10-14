import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  currentPage: string;
  className?: string;
}

export function Breadcrumb({ currentPage, className = "" }: BreadcrumbProps) {
  return (
    <nav 
      aria-label="Breadcrumb"
      className={`inline-flex items-center gap-2 text-sm text-muted-foreground font-light mb-8 ${className}`}
    >
      <Link 
        href="/educate" 
        className="hover:text-ink transition-colors underline-offset-4 hover:underline"
      >
        Educate
      </Link>
      <span className="text-muted-foreground/60 select-none">/</span>
      <span className="text-ink font-medium" aria-current="page">
        {currentPage}
      </span>
    </nav>
  );
}
