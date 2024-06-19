import { forwardRef } from "react";
import { cn } from "@/lib/utils";
const Root = forwardRef(({ className, ...props }, ref) => (
    <div className={cn("lg:h-screen", className)} ref={ref} {...props} />
));

Root.displayName = "Root";
export {
    Root,
};