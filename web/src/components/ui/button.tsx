import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import Link from "next/link"
import { ArrowRight, Download, ShoppingBag, ArrowUpRight } from "lucide-react"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-button)] text-[16px] font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5A6056] focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-40 disabled:pointer-events-none group",
  {
    variants: {
      variant: {
        primary: "bg-marigold text-ink hover:bg-[#b57831]",
        secondary: "bg-transparent border-[1.5px] border-marigold text-marigold hover:bg-marigold/10",
        tertiary: "bg-transparent text-ink underline-offset-4 hover:underline !p-0 !h-auto",
      },
      size: {
        default: "h-12 px-5 md:px-6 min-h-[48px] min-w-[44px]",
        tertiary: "", // Tertiary buttons shouldn't have padding/height forced
      },
      fullWidthMobile: {
        true: "w-full md:w-auto",
        false: "",
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      fullWidthMobile: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string
  icon?: "arrow" | "download" | "bag" | "external" | "none"
}

const IconMap = {
  arrow: ArrowRight,
  download: Download,
  bag: ShoppingBag,
  external: ArrowUpRight,
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidthMobile, href, icon, children, ...props }, ref) => {
    
    // Automatically determine default icon based on variant if not explicitly set to 'none'
    let activeIcon = icon
    if (variant === "tertiary") {
      activeIcon = activeIcon || "none" // Tertiary has no icon by default
    } else {
      activeIcon = activeIcon || "arrow" // Primary/Secondary default to arrow
    }

    const IconComp = activeIcon !== "none" ? IconMap[activeIcon as keyof typeof IconMap] : null

    // For external links, open in new tab
    const isExternal = href?.startsWith("http") || href?.endsWith(".pdf")
    
    // Determine size variant based on main variant (so tertiary doesn't get height/padding)
    const activeSize = variant === "tertiary" ? "tertiary" : size

    const content = (
      <>
        <span>{children}</span>
        {IconComp && (
          <IconComp 
            className={cn(
              "w-[18px] h-[18px] shrink-0", 
              activeIcon === "arrow" && "group-hover:translate-x-[3px] transition-transform duration-150"
            )} 
            strokeWidth={1.75} 
          />
        )}
      </>
    )

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant, size: activeSize, fullWidthMobile, className }))}
          >
            {content}
          </a>
        )
      }
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size: activeSize, fullWidthMobile, className }))}
        >
          {content}
        </Link>
      )
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size: activeSize, fullWidthMobile, className }))}
        ref={ref}
        {...props}
      >
        {content}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
