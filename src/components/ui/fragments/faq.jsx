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
                >{props.title}</AccordionTrigger>
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
