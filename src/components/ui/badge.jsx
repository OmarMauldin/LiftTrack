import * as React from "react"
import { cva } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        pr: "border-1 border-warning bg-card text-warning",
        warmup: "border-default bg-card text-secondary-foreground",
        workingSet: "border-secondary bg-accent text-secondary-foreground",
        completed: "border-success bg-card text-success",
        failed: "border-danger bg-card text-danger",
        current: "border-primary bg-card text-primary",
      },
    },
    defaultVariants: {
      variant: "warmup",
    },
  }
)

function Badge({ className, variant = "warmup", asChild = false, ...props }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
