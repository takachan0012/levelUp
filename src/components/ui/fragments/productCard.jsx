import React from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";

const ProductCard = (props) => {
    return (
        <Card className="flex flex-col border-t-2 border-r-4 border-b-4 border-l-2 border-[#101010] p-4 gap-2">
            <CardHeader className="p-0 gap-2">
                <img src={props.image} alt="images" />
                <div className="font-bold leading[19px] flex gap-3">
                    <p className="flex gap-1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.8003 5.21366C9.55838 2.92878 5.91553 2.92878 3.67364 5.21366C1.44212 7.48794 1.44212 11.1676 3.67364 13.4419L10.5724 20.4729C11.3564 21.2719 12.6436 21.2719 13.4276 20.4729L20.3264 13.4419C22.5579 11.1676 22.5579 7.48794 20.3264 5.21366C18.0845 2.92878 14.4416 2.92878 12.1997 5.21366C12.09 5.32544 11.91 5.32544 11.8003 5.21366Z" fill="#101010" />
                        </svg>
                        <span>7452</span>
                    </p>
                    <p className="flex gap-1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.3982 13.1334C20.2099 15.1148 17.215 19 12 19C6.78498 19 3.79007 15.1148 2.60179 13.1334C2.17952 12.4292 2.17953 11.5708 2.60179 10.8666C3.79007 8.88521 6.78498 5 12 5C17.215 5 20.2099 8.88521 21.3982 10.8666C21.8205 11.5708 21.8205 12.4292 21.3982 13.1334ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="#101010" />
                        </svg>
                        <span>29.2K</span>
                    </p>
                </div>
                <CardTitle className="text-[20px] leading-6 text-[#101010] w-[228px]">{props.title}</CardTitle>
            </CardHeader>
            <CardFooter className="p-0 gap-3">
                <img src={props.avatar} alt="avatar" className="w-[56px] h-[56px] rounded-full" />
                <div className="text-[#101010]">
                    <p className="font-semibold leading-[19px]">Cody Fisher</p>
                    <p className="font-medium leading-[14px] text-[12px]">Designer</p>
                </div>
            </CardFooter>
        </Card>
    )
}

ProductCard.displayName = "ProductCard";
export { ProductCard };