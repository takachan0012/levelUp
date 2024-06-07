import React, { useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils";


const Faq = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Accordion type="single"
            collapsible
            className={cn("border-t-2 border-r-4 border-b-4 border-l-2 border-[#101010] p-6 w-[624px] h-fit", isOpen ? "bg-[#FFB81E]" : "")}
        >
            <AccordionItem
                value={props.value}
                className="border-b-0 data-[state=open]:bg-[#FFB81E]"
            >
                <AccordionTrigger
                    className="font-bold text-[20px] leading-7"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {props.title}
                    <div className={cn("h-[36px] w-[36px] border-t border-r-4 border-b-4 border-l border-[#101010] flex items-center justify-center rounded-[4px]", isOpen ? "bg-white" : "bg-[#FFB81E]")}>
                        {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        }
                    </div>

                </AccordionTrigger>
                <AccordionContent className="border-b-0 border-t  pt-6 border-[#101010]">
                    <p className="font-bold leading-[25px]">
                        {props.content}
                    </p>
                </AccordionContent>
            </AccordionItem>
        </Accordion >
    )
}

Faq.displayName = "Faq"

export { Faq }
