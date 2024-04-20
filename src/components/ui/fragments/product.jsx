import React, { forwardRef } from "react";
import { cn } from "@/lib/utils"
const Product = forwardRef(({ className, ...props }, ref) => (
    <div
        className={cn("bg-white w-[237px] h-[78px] border-t border-r-[3px] border-b-[3px] border-l border-[#101010] rounded-[4px] py-3 pr-6 pl-3 gap-3", className)}
        ref={ref}
    >
        {props.icon}
        <div className="flex flex-col">
            <span className="font-bold leading-[19.2px]">{props.title}</span>
            <span>{props.description}</span>
        </div>
    </div>
))
Product.displayName = "Product"
export { Product }