import React, { forwardRef } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion"

const Faq = forwardRef(({ className, ...props }, ref) => (
    <Accordion type="single" collapsible className="w-full border-t-2 border-r-4 border-b-4 border-l-2 border-[#101010]">
        <AccordionItem value={props.value}>
            <AccordionTrigger>What is the purpose of this website?</AccordionTrigger>
            <AccordionContent>
                <p>
                    This website is designed to provide information about the different types of
                </p>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
))

Faq.displayName = "Faq"

export { Faq }
