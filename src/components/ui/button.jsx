import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-white/20",
  {
    variants: {
      variant: {
        default:
          "bg-white text-black border border-white hover:bg-white/90 hover:border-white/90",
        destructive:
          "bg-red-600 text-white border border-red-600 hover:bg-red-700 hover:border-red-700",
        outline:
          "border border-white/20 bg-transparent text-white hover:bg-white/5 hover:border-white/40",
        secondary:
          "bg-white/10 text-white border border-white/10 hover:bg-white/20 hover:border-white/20",
        ghost:
          "text-white hover:bg-white/10",
        link: "text-white underline-offset-4 hover:underline hover:text-white/80",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
