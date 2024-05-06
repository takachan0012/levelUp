import React, { forwardRef } from "react";
import {
    Card,
    CardHeader,
    CardContent,
    CardTitle
} from "@components/ui/card";
import { cn } from "@/lib/utils"
import avatar1 from "@assets/avatar/image-1.png";
import avatar2 from "@assets/avatar/image-2.png";
import avatar3 from "@assets/avatar/image-3.png";
import avatar4 from "@assets/avatar/image-4.png";


const CourseCard = forwardRef(({ className, ...props }, ref) => (
    <Card
        className={cn("w-[405px] bg-transparent h-[457px] rounded-[4px] border-t-2 border-r-4 border-b-4 border-l-2 border-[#ffffff08] p-0", className)}>
        <CardHeader className="bg-[#ffffff4d] rounded-[4px] p-0 h-[233px] relative overflow-hidden">
            <img src={props.image} alt={`icon-${props.title}`} className="h-[450px] w-[430px] absolute top-0 left-0 hover:scale-150 transition-all delay-100" />
        </CardHeader>
        <CardContent className="w-[405px] h-[224px] p-[24px]">
            <section id="total-member" className="w-[357px] h-[42px] flex justify-between items-center">
                <div id="avatar" className="w-[120px] h-[42px] flex">
                    <img src={avatar1} alt="avatar-1" className="w-[42px] h-[42px] rounded-full z-[10]" />
                    <img src={avatar2} alt="avatar-2" className="w-[42px] h-[42px] rounded-full z-[9] -ms-2" />
                    <img src={avatar3} alt="avatar-3" className="w-[42px] h-[42px] rounded-full z-[8] -ms-2" />
                    <img src={avatar4} alt="avatar-4" className="w-[42px] h-[42px] rounded-full z-[7] -ms-2" />
                </div>
                <div className="w-[206px] flex gap-[6px] items-center">
                    <span className="w-[54px] font-bold text-[#FFB81E] text-[20px]">+9.2K</span>
                    <span className="text-[#91909E] font-medium">Member has joined</span>
                </div>
            </section>
            <CardTitle className="text-white my-4 hover:cursor-pointer">{props.title}</CardTitle>
            <div className="w-[237px] h-[38px] flex gap-3 items-center">
                <strike className="font-bold text-[#91909E] text-[20px]">Rp520.000</strike>
                <span className="font-bold text-[24px] text-[#43FFA5]">Rp99.999</span>
            </div>
        </CardContent>
    </Card >
))
CourseCard.displayName = "CourseCard"

export { CourseCard }