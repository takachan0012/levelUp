import { forwardRef } from "react";
import { cn } from "@/lib/utils";
const Hero = forwardRef(({ className, ...props }, ref) => (
    <div className={cn("relative bg-gradient-to-b from-[#FFB81E] to-[#F5C84F] rounded-b-[100px] flex items-center flex-col z-50 lg:h-[110%]", className)} ref={ref} {...props} />
));

Hero.displayName = "Hero";
export {
    Hero
};