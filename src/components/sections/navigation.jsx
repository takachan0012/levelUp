import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Navigation = forwardRef(({ className, ...props }, ref) => (
    <div className={cn("flex justify-between items-center w-[97%] h-20 bg-white mt-[30px] rounded-full border-[#101010] border-t-2 border-r-4 border-b-4 border-l-2 p-4", className)} ref={ref} {...props} />
));
Navigation.displayName = "Navigation";

const NavigationList = forwardRef(({ className, ...props }, ref) => (
    <div className={cn("w-3/4 px-2 lg:w-[977px] gap-3 lg:gap-[30px] justify-center items-center", className)} ref={ref} {...props} />
));
NavigationList.displayName = "NavigationList";

const NavigationLink = forwardRef(({ className, to, ...props }, ref) => (
    <a href={to} className={cn(className)} {...props} />
));
NavigationLink.displayName = "NavigationLink";


export {
    Navigation,
    NavigationList,
    NavigationLink
};

