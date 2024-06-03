import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle } from "@components/ui/card";
import { Button } from "../button";

const ChallengeCard = forwardRef(({ className, ...props }, ref) => {
    return (
        <Card ref={ref} className={cn("p-0 w-[406px] h-[421px] rounded-[4px] border-t-2 border-r-4 border-b-4 border-l-2 border-[#101010]", className)}>
            <CardHeader className="w-full h-[200px] p-0">
                <img src={props.icon} alt="icon" className="w-full h-full" />
            </CardHeader>
            <div className="p-4">
                <div>
                    <span className="text-base leading-[19px] text-[#4B5FDC]">Animation &bull; </span>
                    <span className="text-base leading-[19px] text-[#F5476F]">Expert Level</span>
                </div>
                <CardTitle className="font-bold text-[20px] leading-7">Animate the Extraordinary: Motion Mastery Challenge</CardTitle>
                <span className="font-semibold text-[14px] leading-[22px] text-[#737373] line-clamp-1">Step into the realm of animation with our 'Animate the Extraordinary' challenge.</span>
                <div className="flex justify-between py-4">
                    <Button className="w-[60px] h-[60px]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8 16.4C11.5111 15.8667 12.4889 15.8667 13.2 16.4L16.4 18.8C17.0592 19.2944 18 18.824 18 18V5C18 4.44772 17.5523 4 17 4H7C6.44772 4 6 4.44772 6 5V18C6 18.824 6.94076 19.2944 7.6 18.8L10.8 16.4ZM12 18L15.2 20.4C17.1777 21.8833 20 20.4721 20 18V5C20 3.34315 18.6569 2 17 2H7C5.34315 2 4 3.34315 4 5V18C4 20.4721 6.82229 21.8833 8.8 20.4L12 18Z" fill="#101010" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 7C8 6.44772 8.44772 6 9 6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H9C8.44772 8 8 7.55228 8 7Z" fill="#101010" />
                        </svg>
                    </Button>
                    <Button className="py-[14px] px-[32px] w-[298px] h-[60px]">
                        Tracking Challenge
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.3159 15.9194C16.3159 16.4717 16.7636 16.9194 17.3159 16.9194C17.8681 16.9194 18.3159 16.4717 18.3159 15.9194L18.3159 11.8232L19.023 7.01994C19.023 5.91537 18.1275 5.01994 17.023 5.01994L12.2197 5.72704L8.12347 5.72704C7.57119 5.72704 7.12347 6.17476 7.12347 6.72704C7.12347 7.27933 7.57119 7.72704 8.12347 7.72704L11.5126 7.72704L15.6088 7.01994L5.6486 16.9801C5.25808 17.3706 5.25808 18.0038 5.6486 18.3943C6.03912 18.7848 6.67229 18.7848 7.06281 18.3943L17.023 8.43415L16.3159 12.5303V15.9194Z" fill="#101010" />
                        </svg>
                    </Button>
                </div>
            </div>
        </Card >
    );
});

ChallengeCard.displayName = "ChallengeCard";
export { ChallengeCard };