import React, { forwardRef } from "react";
import { cn } from "@/lib/utils"
const Badges = forwardRef(({ className, ...props }, ref) => (
    <div
        className={cn("inline-flex items-center rounded-[50px] font-bold border-t border-r-[4px] border-b-[4px] border-l border-[#101010] bg-[#F00574] text-white py-3 px-5 text-sm dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90", className)}
        ref={ref}
        {...props}
    />
))
Badges.displayName = "Badges"

export { Badges }