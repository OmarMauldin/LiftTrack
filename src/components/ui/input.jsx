import * as React from "react"
import { cn } from "@/lib/utils"

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-8 w-full min-w-0 rounded-lg border-1 bg-input px-3 py-1 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 aria-invalid:ring-2 aria-invalid:ring-destructive md:text-sm",
        className
      )}
      {...props}
    />
  )
}

function FormInput({ error, className, ...props }) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <Input
        {...props}
        aria-invalid={!!error}
        className={cn(
          error &&
            "aria-invalid: border-danger aria-invalid:ring-1 aria-invalid:ring-danger"
        )}
      />
      {error && <p className="text-xs text-danger">{error}</p>}
    </div>
  )
}
export { Input, FormInput }
