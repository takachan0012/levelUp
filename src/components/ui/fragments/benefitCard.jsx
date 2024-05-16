import React, { forwardRef } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@components/ui/card";
import { cn } from "@/lib/utils";

const BenefitCard = forwardRef(({ className, ...props }, ref) => {
    return (
        <Card ref={ref} className={cn("p-6 w-[410px] h-[222px] rounded-[4px] border-t-2 border-r-4 border-b-4 border-l-2 border-[#101010]", className)}>
            {props.children ? null : <CardHeader className="p-0 flex flex-row gap-4 items-center mb-4">
                <div className="flex items-center justify-center w-[54px] h-[54px] rounded-full bg-white border-t border-r-2 border-b-2 border-l border-[#101010]">
                    <img src={props.icon} alt="icon_benefit" />
                </div>
                <CardTitle className="text-[#737373]">
                    <h1 className="font-bold text-[20px] leading-6 text-black">{props.title}</h1>
                    <p className={cn("font-medium text-[14px] leading-4", props.classNameDescription)}>{props.description}</p>
                </CardTitle>
            </CardHeader>}
            <CardContent className="p-0 font-bold text-[16px] leading-[25px]">
                {props.content}
                <p className="font-bold text-[36px] leading-[43px] text-center">{props.children}</p>
            </CardContent>
        </Card>
    );
});

BenefitCard.displayName = "BenefitCard";

export { BenefitCard };