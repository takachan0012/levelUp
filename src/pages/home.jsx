import { Button } from "@components/ui/button";
import { Badges } from "@components/ui/fragments/badges";
import { Product } from "@components/ui/fragments/product";
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent
} from "@components/ui/tabs";
import { CourseCard } from "@components/ui/fragments/courseCard";
import iconMastering from "@assets/levelUp-mastering-user-centric.png";
import iconVirtual from "@assets/creating-virtual-reality.png";
import iconIlustration from "@assets/digital-ilustration.png";
import iconsFromConcept from "@assets/from-concept-to-motion.png";
import iconTheArtOfPersuation from "@assets/the-art-of-persuasion.png";
import iconWebDev from "@assets/web-development.png";
import { StoriesCard } from "@/components/ui/fragments/storiesCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import avatar1 from "@assets/avatar/image-1.png";
import avatar2 from "@assets/avatar/image-2.png";
import avatar3 from "@assets/avatar/image-3.png";
import avatar4 from "@assets/avatar/image-4.png";
import { BenefitCard } from "@/components/ui/fragments/benefitCard";
import toga from "@assets/icon/toga_icon.svg";
import qna from "@assets/icon/qna_icon.svg";
import progressTracking from "@assets/icon/progress_tracking_icon.svg";
import mentorShip from "@assets/icon/mentorship_icon.svg";
import privateGroup from "@assets/icon/private_group_icon.svg";
import fullTime from "@assets/icon/full_time_icon.svg";
import realWordProject from "@assets/icon/real_world_project_icon.svg";
import community from "@assets/icon/community_icon.svg";
import {
    ChallengeCard
} from "@components/ui/fragments/challengeCard";
import { Faq } from "@/components/ui/fragments/faq";
import { ProductCard } from "@/components/ui/fragments/productCard";
import image from "@assets/icon/image.svg";
import image1 from "@assets/icon/image1.svg";
import AutoScroll from "embla-carousel-auto-scroll";


const Home = () => {
    return (
        <div className="h-screen">
            <section className="relative h-[110%] bg-gradient-to-b from-[#FFB81E] to-[#F5C84F] rounded-b-[100px] flex items-center flex-col z-50">
                <header id="header" className="flex justify-between items-center w-[97%] h-20 bg-white mt-[30px] rounded-full border-[#101010] border-t-2 border-r-4 border-b-4 border-l-2 p-4">
                    <div className="w-[170px] flex items-center gap-2 hover:cursor-pointer">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_0_827)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05886 0 0 8.05887 0 18C0 27.9411 8.05886 36 18 36ZM23.6154 8.38515C23.8887 7.41424 22.9465 6.84011 22.086 7.45317L10.0738 16.0106C9.14059 16.6754 9.28738 18 10.2943 18H13.4574V17.9755H19.6223L14.5991 19.7479L12.3846 27.6148C12.1113 28.5858 13.0534 29.1599 13.914 28.5468L25.9262 19.9894C26.8594 19.3246 26.7125 18 25.7057 18H20.9089L23.6154 8.38515Z" fill="#101010" />
                            </g>
                            <defs>
                                <clipPath id="clip0_0_827">
                                    <rect width="36" height="36" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <h1 className="font-extrabold text-3xl">LevelUP</h1>
                    </div>
                    <ul className="w-[977px] flex gap-[30px] justify-center items-center">
                        <li>Course</li>
                        <li>Showcase</li>
                        <li>Challange</li>
                        <li>Article</li>
                        <li>Community</li>
                        <li>Mentor</li>
                        <li>
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9ZM16.0319 14.6177C17.2635 13.078 18 11.125 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C11.125 18 13.078 17.2635 14.6177 16.0319L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L16.0319 14.6177Z" fill="#101010" />
                            </svg>
                        </li>
                    </ul>
                    <Button className="rounded-[50px] h-12">
                        <span>Sign in</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.3158 15.9195C16.3158 16.4718 16.7636 16.9195 17.3158 16.9195C17.8681 16.9195 18.3158 16.4718 18.3158 15.9195L18.3158 11.8233L19.0229 7.02C19.0229 5.91543 18.1275 5.02 17.0229 5.02L12.2196 5.7271L8.12345 5.7271C7.57117 5.7271 7.12345 6.17482 7.12345 6.7271C7.12345 7.27939 7.57117 7.7271 8.12345 7.7271L11.5125 7.7271L15.6087 7.02L5.64858 16.9802C5.25805 17.3707 5.25805 18.0038 5.64858 18.3944C6.0391 18.7849 6.67227 18.7849 7.06279 18.3944L17.0229 8.43421L16.3158 12.5304V15.9195Z" fill="#101010" />
                        </svg>
                    </Button>
                </header>
                <div id="content-wrap" className="flex justify-between h-[475px] w-[97%] my-[90px]">
                    <div className="w-1/4 relative">
                        <Product className="inline-flex items-center absolute right-0"
                            icon={<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="27" cy="27" r="27" fill="#0D0541" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M25.0542 17.6583C26.1755 16.7028 27.8246 16.7028 28.9459 17.6583L29.0162 17.7182C29.4967 18.1277 30.0941 18.3752 30.7234 18.4254L30.8155 18.4327C32.2841 18.5499 33.4502 19.7161 33.5674 21.1846L33.5747 21.2767C33.625 21.906 33.8724 22.5034 34.2819 22.9839L34.3418 23.0542C35.2974 24.1755 35.2974 25.8246 34.3418 26.9459L34.2819 27.0162C33.8724 27.4967 33.625 28.0941 33.5747 28.7234L33.5674 28.8155C33.4842 29.8577 32.8728 30.7475 32 31.2183V36.156C32 36.8259 31.3543 37.3063 30.7127 37.1138L27 36.0001L23.2873 37.1138C22.6457 37.3063 22 36.8259 22 36.156V31.2182C21.1272 30.7474 20.5159 29.8576 20.4327 28.8155L20.4254 28.7234C20.3752 28.0941 20.1277 27.4967 19.7182 27.0162L19.6583 26.9459C18.7028 25.8246 18.7028 24.1755 19.6583 23.0542L19.7182 22.9839C20.1277 22.5034 20.3752 21.906 20.4254 21.2767L20.4327 21.1846C20.5499 19.7161 21.7161 18.5499 23.1846 18.4327L23.2767 18.4254C23.906 18.3752 24.5034 18.1277 24.9839 17.7182L25.0542 17.6583ZM27.6487 19.1805L27.719 19.2405C28.5198 19.9229 29.5155 20.3353 30.5643 20.419L30.6564 20.4264C31.146 20.4655 31.5347 20.8542 31.5737 21.3437L31.5811 21.4358C31.6648 22.4846 32.0772 23.4803 32.7597 24.2811L32.8196 24.3514C33.1381 24.7252 33.1381 25.2749 32.8196 25.6487L32.7597 25.719C32.0772 26.5198 31.6648 27.5155 31.5811 28.5643L31.5737 28.6564C31.5347 29.146 31.146 29.5347 30.6564 29.5737L30.5644 29.5811C29.5155 29.6648 28.5198 30.0772 27.719 30.7597L27.6487 30.8196C27.2749 31.1381 26.7252 31.1381 26.3514 30.8196L26.2811 30.7597C25.4803 30.0772 24.4846 29.6648 23.4358 29.5811L23.3437 29.5737C22.8542 29.5347 22.4655 29.146 22.4264 28.6564L22.419 28.5644C22.3353 27.5155 21.9229 26.5198 21.2405 25.719L21.1805 25.6487C20.862 25.2749 20.862 24.7252 21.1805 24.3514L21.2405 24.2811C21.9229 23.4803 22.3353 22.4846 22.419 21.4358L22.4264 21.3437C22.4655 20.8542 22.8542 20.4655 23.3437 20.4264L23.4358 20.419C24.4846 20.3353 25.4803 19.9229 26.2811 19.2405L26.3514 19.1805C26.7252 18.862 27.2749 18.862 27.6487 19.1805Z" fill="white" />
                                <circle cx="27" cy="25" r="3" fill="white" />
                            </svg>
                            }
                            title="Grapich Designer"
                            description="512 Total Course"
                        />
                        <Product className="inline-flex items-center absolute top-[198px]"
                            icon={<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="27" cy="27" r="27" fill="#4B5FDC" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M25.0542 17.6583C26.1755 16.7028 27.8246 16.7028 28.9459 17.6583L29.0162 17.7182C29.4967 18.1277 30.0941 18.3752 30.7234 18.4254L30.8155 18.4327C32.2841 18.5499 33.4502 19.7161 33.5674 21.1846L33.5747 21.2767C33.625 21.906 33.8724 22.5034 34.2819 22.9839L34.3418 23.0542C35.2974 24.1755 35.2974 25.8246 34.3418 26.9459L34.2819 27.0162C33.8724 27.4967 33.625 28.0941 33.5747 28.7234L33.5674 28.8155C33.4842 29.8577 32.8728 30.7475 32 31.2183V36.156C32 36.8259 31.3543 37.3063 30.7127 37.1138L27 36.0001L23.2873 37.1138C22.6457 37.3063 22 36.8259 22 36.156V31.2182C21.1272 30.7474 20.5159 29.8576 20.4327 28.8155L20.4254 28.7234C20.3752 28.0941 20.1277 27.4967 19.7182 27.0162L19.6583 26.9459C18.7028 25.8246 18.7028 24.1755 19.6583 23.0542L19.7182 22.9839C20.1277 22.5034 20.3752 21.906 20.4254 21.2767L20.4327 21.1846C20.5499 19.7161 21.7161 18.5499 23.1846 18.4327L23.2767 18.4254C23.906 18.3752 24.5034 18.1277 24.9839 17.7182L25.0542 17.6583ZM27.6487 19.1805L27.719 19.2405C28.5198 19.9229 29.5155 20.3353 30.5643 20.419L30.6564 20.4264C31.146 20.4655 31.5347 20.8542 31.5737 21.3437L31.5811 21.4358C31.6648 22.4846 32.0772 23.4803 32.7597 24.2811L32.8196 24.3514C33.1381 24.7252 33.1381 25.2749 32.8196 25.6487L32.7597 25.719C32.0772 26.5198 31.6648 27.5155 31.5811 28.5643L31.5737 28.6564C31.5347 29.146 31.146 29.5347 30.6564 29.5737L30.5644 29.5811C29.5155 29.6648 28.5198 30.0772 27.719 30.7597L27.6487 30.8196C27.2749 31.1381 26.7252 31.1381 26.3514 30.8196L26.2811 30.7597C25.4803 30.0772 24.4846 29.6648 23.4358 29.5811L23.3437 29.5737C22.8542 29.5347 22.4655 29.146 22.4264 28.6564L22.419 28.5644C22.3353 27.5155 21.9229 26.5198 21.2405 25.719L21.1805 25.6487C20.862 25.2749 20.862 24.7252 21.1805 24.3514L21.2405 24.2811C21.9229 23.4803 22.3353 22.4846 22.419 21.4358L22.4264 21.3437C22.4655 20.8542 22.8542 20.4655 23.3437 20.4264L23.4358 20.419C24.4846 20.3353 25.4803 19.9229 26.2811 19.2405L26.3514 19.1805C26.7252 18.862 27.2749 18.862 27.6487 19.1805Z" fill="white" />
                                <circle cx="27" cy="25" r="3" fill="white" />
                            </svg>
                            }
                            title="3D Artist"
                            description="3123 Total Course"
                        />
                        <Product className="inline-flex items-center absolute bottom-0 right-0"
                            icon={<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="27" cy="27" r="27" fill="#F88081" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M25.0542 17.6583C26.1755 16.7028 27.8246 16.7028 28.9459 17.6583L29.0162 17.7182C29.4967 18.1277 30.0941 18.3752 30.7234 18.4254L30.8155 18.4327C32.2841 18.5499 33.4502 19.7161 33.5674 21.1846L33.5747 21.2767C33.625 21.906 33.8724 22.5034 34.2819 22.9839L34.3418 23.0542C35.2974 24.1755 35.2974 25.8246 34.3418 26.9459L34.2819 27.0162C33.8724 27.4967 33.625 28.0941 33.5747 28.7234L33.5674 28.8155C33.4842 29.8577 32.8728 30.7475 32 31.2183V36.156C32 36.8259 31.3543 37.3063 30.7127 37.1138L27 36.0001L23.2873 37.1138C22.6457 37.3063 22 36.8259 22 36.156V31.2182C21.1272 30.7474 20.5159 29.8576 20.4327 28.8155L20.4254 28.7234C20.3752 28.0941 20.1277 27.4967 19.7182 27.0162L19.6583 26.9459C18.7028 25.8246 18.7028 24.1755 19.6583 23.0542L19.7182 22.9839C20.1277 22.5034 20.3752 21.906 20.4254 21.2767L20.4327 21.1846C20.5499 19.7161 21.7161 18.5499 23.1846 18.4327L23.2767 18.4254C23.906 18.3752 24.5034 18.1277 24.9839 17.7182L25.0542 17.6583ZM27.6487 19.1805L27.719 19.2405C28.5198 19.9229 29.5155 20.3353 30.5643 20.419L30.6564 20.4264C31.146 20.4655 31.5347 20.8542 31.5737 21.3437L31.5811 21.4358C31.6648 22.4846 32.0772 23.4803 32.7597 24.2811L32.8196 24.3514C33.1381 24.7252 33.1381 25.2749 32.8196 25.6487L32.7597 25.719C32.0772 26.5198 31.6648 27.5155 31.5811 28.5643L31.5737 28.6564C31.5347 29.146 31.146 29.5347 30.6564 29.5737L30.5644 29.5811C29.5155 29.6648 28.5198 30.0772 27.719 30.7597L27.6487 30.8196C27.2749 31.1381 26.7252 31.1381 26.3514 30.8196L26.2811 30.7597C25.4803 30.0772 24.4846 29.6648 23.4358 29.5811L23.3437 29.5737C22.8542 29.5347 22.4655 29.146 22.4264 28.6564L22.419 28.5644C22.3353 27.5155 21.9229 26.5198 21.2405 25.719L21.1805 25.6487C20.862 25.2749 20.862 24.7252 21.1805 24.3514L21.2405 24.2811C21.9229 23.4803 22.3353 22.4846 22.419 21.4358L22.4264 21.3437C22.4655 20.8542 22.8542 20.4655 23.3437 20.4264L23.4358 20.419C24.4846 20.3353 25.4803 19.9229 26.2811 19.2405L26.3514 19.1805C26.7252 18.862 27.2749 18.862 27.6487 19.1805Z" fill="white" />
                                <circle cx="27" cy="25" r="3" fill="white" />
                            </svg>
                            }
                            title="Illustrations"
                            description="1241 Total Course"
                        />
                    </div>
                    <div className="w-1/2 flex flex-col items-center relative">
                        <Badges>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.5542 2.65831C11.6755 1.70277 13.3246 1.70276 14.4459 2.65831L14.5162 2.71823C14.9967 3.1277 15.5941 3.37516 16.2234 3.42538L16.3155 3.43273C17.7841 3.54992 18.9502 4.71605 19.0674 6.18458L19.0747 6.27668C19.125 6.90598 19.3724 7.5034 19.7819 7.98389L19.8418 8.05421C20.7974 9.17548 20.7974 10.8246 19.8418 11.9459L19.7819 12.0162C19.3724 12.4967 19.125 13.0941 19.0747 13.7234L19.0674 13.8155C18.9842 14.8577 18.3728 15.7475 17.5 16.2183V21.156C17.5 21.8259 16.8543 22.3063 16.2127 22.1138L12.5 21.0001L8.78735 22.1138C8.14574 22.3063 7.5 21.8259 7.5 21.156V16.2182C6.62723 15.7474 6.01589 14.8576 5.93273 13.8155L5.92538 13.7234C5.87516 13.0941 5.6277 12.4967 5.21823 12.0162L5.15831 11.9459C4.20277 10.8246 4.20276 9.17548 5.15831 8.05421L5.21823 7.98389C5.6277 7.5034 5.87516 6.90598 5.92538 6.27668L5.93273 6.18458C6.04992 4.71605 7.21605 3.54992 8.68458 3.43273L8.77668 3.42538C9.40598 3.37516 10.0034 3.1277 10.4839 2.71823L10.5542 2.65831ZM13.1487 4.18054L13.219 4.24046C14.0198 4.92291 15.0155 5.33535 16.0643 5.41904L16.1564 5.42639C16.646 5.46546 17.0347 5.85417 17.0737 6.34368L17.0811 6.43577C17.1648 7.48461 17.5772 8.48031 18.2597 9.28112L18.3196 9.35144C18.6381 9.7252 18.6381 10.2749 18.3196 10.6487L18.2597 10.719C17.5772 11.5198 17.1648 12.5155 17.0811 13.5643L17.0737 13.6564C17.0347 14.146 16.646 14.5347 16.1564 14.5737L16.0644 14.5811C15.0155 14.6648 14.0198 15.0772 13.219 15.7597L13.1487 15.8196C12.7749 16.1381 12.2252 16.1381 11.8514 15.8196L11.7811 15.7597C10.9803 15.0772 9.98461 14.6648 8.93577 14.5811L8.84368 14.5737C8.35417 14.5347 7.96546 14.146 7.92639 13.6564L7.91904 13.5644C7.83535 12.5155 7.42292 11.5198 6.74046 10.719L6.68054 10.6487C6.36202 10.2749 6.36202 9.7252 6.68054 9.35144L6.74046 9.28113C7.42291 8.48031 7.83535 7.48461 7.91904 6.43578L7.92639 6.34368C7.96546 5.85417 8.35417 5.46546 8.84368 5.42639L8.93577 5.41904C9.98461 5.33535 10.9803 4.92292 11.7811 4.24046L11.8514 4.18054C12.2252 3.86202 12.7749 3.86202 13.1487 4.18054Z" fill="white" />
                                <circle cx="12.5" cy="10" r="3" fill="white" />
                            </svg>
                            <span>Largest Online Course In Indonesia</span>
                        </Badges>
                        <p className="enhance text-center leading-[77px] text-[64px] font-extrabold text-white p-2 gap-y-4">
                            Enhance Your Skills For A Future-Forward Career Trajectory.
                        </p>
                        <p className="text-center w-[500px] font-semibold leading-6">
                            Learn from a mentor, join a vibrant community—key steps for enhancing skills and advancing your career in the future.
                        </p>
                        <Button className="py-[14px] px-8 flex gap-1 rounded-[2px] w-[204px] h-[60px] absolute bottom-0">
                            <span className="font-bold">Start Learning</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.2928 17.7929C11.9023 18.1834 11.9023 18.8166 12.2928 19.2071C12.6833 19.5976 13.3165 19.5976 13.707 19.2071L16.6035 16.3107L20.4999 13.4142C21.281 12.6332 21.281 11.3668 20.4999 10.5858L16.6035 7.68934L13.707 4.79289C13.3165 4.40237 12.6833 4.40237 12.2928 4.79289C11.9023 5.18342 11.9023 5.81658 12.2928 6.20711L14.6893 8.60355L18.0857 11H3.99991C3.44763 11 2.99991 11.4477 2.99991 12C2.99991 12.5523 3.44763 13 3.99991 13H18.0857L14.6893 15.3964L12.2928 17.7929Z" fill="#101010" />
                            </svg>
                        </Button>
                    </div>
                    <div className="w-1/4 relative">
                        <Product className="inline-flex items-center absolute left-0"
                            icon={<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="27" cy="27" r="27" fill="#DDF247" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M25.0542 17.6583C26.1755 16.7028 27.8246 16.7028 28.9459 17.6583L29.0162 17.7182C29.4967 18.1277 30.0941 18.3752 30.7234 18.4254L30.8155 18.4327C32.2841 18.5499 33.4502 19.7161 33.5674 21.1846L33.5747 21.2767C33.625 21.906 33.8724 22.5034 34.2819 22.9839L34.3418 23.0542C35.2974 24.1755 35.2974 25.8246 34.3418 26.9459L34.2819 27.0162C33.8724 27.4967 33.625 28.0941 33.5747 28.7234L33.5674 28.8155C33.4842 29.8577 32.8728 30.7475 32 31.2183V36.156C32 36.8259 31.3543 37.3063 30.7127 37.1138L27 36.0001L23.2873 37.1138C22.6457 37.3063 22 36.8259 22 36.156V31.2182C21.1272 30.7474 20.5159 29.8576 20.4327 28.8155L20.4254 28.7234C20.3752 28.0941 20.1277 27.4967 19.7182 27.0162L19.6583 26.9459C18.7028 25.8246 18.7028 24.1755 19.6583 23.0542L19.7182 22.9839C20.1277 22.5034 20.3752 21.906 20.4254 21.2767L20.4327 21.1846C20.5499 19.7161 21.7161 18.5499 23.1846 18.4327L23.2767 18.4254C23.906 18.3752 24.5034 18.1277 24.9839 17.7182L25.0542 17.6583ZM27.6487 19.1805L27.719 19.2405C28.5198 19.9229 29.5155 20.3353 30.5643 20.419L30.6564 20.4264C31.146 20.4655 31.5347 20.8542 31.5737 21.3437L31.5811 21.4358C31.6648 22.4846 32.0772 23.4803 32.7597 24.2811L32.8196 24.3514C33.1381 24.7252 33.1381 25.2749 32.8196 25.6487L32.7597 25.719C32.0772 26.5198 31.6648 27.5155 31.5811 28.5643L31.5737 28.6564C31.5347 29.146 31.146 29.5347 30.6564 29.5737L30.5644 29.5811C29.5155 29.6648 28.5198 30.0772 27.719 30.7597L27.6487 30.8196C27.2749 31.1381 26.7252 31.1381 26.3514 30.8196L26.2811 30.7597C25.4803 30.0772 24.4846 29.6648 23.4358 29.5811L23.3437 29.5737C22.8542 29.5347 22.4655 29.146 22.4264 28.6564L22.419 28.5644C22.3353 27.5155 21.9229 26.5198 21.2405 25.719L21.1805 25.6487C20.862 25.2749 20.862 24.7252 21.1805 24.3514L21.2405 24.2811C21.9229 23.4803 22.3353 22.4846 22.419 21.4358L22.4264 21.3437C22.4655 20.8542 22.8542 20.4655 23.3437 20.4264L23.4358 20.419C24.4846 20.3353 25.4803 19.9229 26.2811 19.2405L26.3514 19.1805C26.7252 18.862 27.2749 18.862 27.6487 19.1805Z" fill="white" />
                                <circle cx="27" cy="25" r="3" fill="white" />
                            </svg>
                            }
                            title="Animations"
                            description="412 Total Course"
                        />
                        <Product className="inline-flex items-center absolute top-[198px] right-0"
                            icon={<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="27" cy="27" r="27" fill="#51C9FF" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M25.0542 17.6583C26.1755 16.7028 27.8246 16.7028 28.9459 17.6583L29.0162 17.7182C29.4967 18.1277 30.0941 18.3752 30.7234 18.4254L30.8155 18.4327C32.2841 18.5499 33.4502 19.7161 33.5674 21.1846L33.5747 21.2767C33.625 21.906 33.8724 22.5034 34.2819 22.9839L34.3418 23.0542C35.2974 24.1755 35.2974 25.8246 34.3418 26.9459L34.2819 27.0162C33.8724 27.4967 33.625 28.0941 33.5747 28.7234L33.5674 28.8155C33.4842 29.8577 32.8728 30.7475 32 31.2183V36.156C32 36.8259 31.3543 37.3063 30.7127 37.1138L27 36.0001L23.2873 37.1138C22.6457 37.3063 22 36.8259 22 36.156V31.2182C21.1272 30.7474 20.5159 29.8576 20.4327 28.8155L20.4254 28.7234C20.3752 28.0941 20.1277 27.4967 19.7182 27.0162L19.6583 26.9459C18.7028 25.8246 18.7028 24.1755 19.6583 23.0542L19.7182 22.9839C20.1277 22.5034 20.3752 21.906 20.4254 21.2767L20.4327 21.1846C20.5499 19.7161 21.7161 18.5499 23.1846 18.4327L23.2767 18.4254C23.906 18.3752 24.5034 18.1277 24.9839 17.7182L25.0542 17.6583ZM27.6487 19.1805L27.719 19.2405C28.5198 19.9229 29.5155 20.3353 30.5643 20.419L30.6564 20.4264C31.146 20.4655 31.5347 20.8542 31.5737 21.3437L31.5811 21.4358C31.6648 22.4846 32.0772 23.4803 32.7597 24.2811L32.8196 24.3514C33.1381 24.7252 33.1381 25.2749 32.8196 25.6487L32.7597 25.719C32.0772 26.5198 31.6648 27.5155 31.5811 28.5643L31.5737 28.6564C31.5347 29.146 31.146 29.5347 30.6564 29.5737L30.5644 29.5811C29.5155 29.6648 28.5198 30.0772 27.719 30.7597L27.6487 30.8196C27.2749 31.1381 26.7252 31.1381 26.3514 30.8196L26.2811 30.7597C25.4803 30.0772 24.4846 29.6648 23.4358 29.5811L23.3437 29.5737C22.8542 29.5347 22.4655 29.146 22.4264 28.6564L22.419 28.5644C22.3353 27.5155 21.9229 26.5198 21.2405 25.719L21.1805 25.6487C20.862 25.2749 20.862 24.7252 21.1805 24.3514L21.2405 24.2811C21.9229 23.4803 22.3353 22.4846 22.419 21.4358L22.4264 21.3437C22.4655 20.8542 22.8542 20.4655 23.3437 20.4264L23.4358 20.419C24.4846 20.3353 25.4803 19.9229 26.2811 19.2405L26.3514 19.1805C26.7252 18.862 27.2749 18.862 27.6487 19.1805Z" fill="white" />
                                <circle cx="27" cy="25" r="3" fill="white" />
                            </svg>
                            }
                            title="Copywriting"
                            description="1231 Total Course"
                        />
                        <Product className="inline-flex items-center absolute left-0 bottom-0"
                            icon={<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="27" cy="27" r="27" fill="#F5476F" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M25.0542 17.6583C26.1755 16.7028 27.8246 16.7028 28.9459 17.6583L29.0162 17.7182C29.4967 18.1277 30.0941 18.3752 30.7234 18.4254L30.8155 18.4327C32.2841 18.5499 33.4502 19.7161 33.5674 21.1846L33.5747 21.2767C33.625 21.906 33.8724 22.5034 34.2819 22.9839L34.3418 23.0542C35.2974 24.1755 35.2974 25.8246 34.3418 26.9459L34.2819 27.0162C33.8724 27.4967 33.625 28.0941 33.5747 28.7234L33.5674 28.8155C33.4842 29.8577 32.8728 30.7475 32 31.2183V36.156C32 36.8259 31.3543 37.3063 30.7127 37.1138L27 36.0001L23.2873 37.1138C22.6457 37.3063 22 36.8259 22 36.156V31.2182C21.1272 30.7474 20.5159 29.8576 20.4327 28.8155L20.4254 28.7234C20.3752 28.0941 20.1277 27.4967 19.7182 27.0162L19.6583 26.9459C18.7028 25.8246 18.7028 24.1755 19.6583 23.0542L19.7182 22.9839C20.1277 22.5034 20.3752 21.906 20.4254 21.2767L20.4327 21.1846C20.5499 19.7161 21.7161 18.5499 23.1846 18.4327L23.2767 18.4254C23.906 18.3752 24.5034 18.1277 24.9839 17.7182L25.0542 17.6583ZM27.6487 19.1805L27.719 19.2405C28.5198 19.9229 29.5155 20.3353 30.5643 20.419L30.6564 20.4264C31.146 20.4655 31.5347 20.8542 31.5737 21.3437L31.5811 21.4358C31.6648 22.4846 32.0772 23.4803 32.7597 24.2811L32.8196 24.3514C33.1381 24.7252 33.1381 25.2749 32.8196 25.6487L32.7597 25.719C32.0772 26.5198 31.6648 27.5155 31.5811 28.5643L31.5737 28.6564C31.5347 29.146 31.146 29.5347 30.6564 29.5737L30.5644 29.5811C29.5155 29.6648 28.5198 30.0772 27.719 30.7597L27.6487 30.8196C27.2749 31.1381 26.7252 31.1381 26.3514 30.8196L26.2811 30.7597C25.4803 30.0772 24.4846 29.6648 23.4358 29.5811L23.3437 29.5737C22.8542 29.5347 22.4655 29.146 22.4264 28.6564L22.419 28.5644C22.3353 27.5155 21.9229 26.5198 21.2405 25.719L21.1805 25.6487C20.862 25.2749 20.862 24.7252 21.1805 24.3514L21.2405 24.2811C21.9229 23.4803 22.3353 22.4846 22.419 21.4358L22.4264 21.3437C22.4655 20.8542 22.8542 20.4655 23.3437 20.4264L23.4358 20.419C24.4846 20.3353 25.4803 19.9229 26.2811 19.2405L26.3514 19.1805C26.7252 18.862 27.2749 18.862 27.6487 19.1805Z" fill="white" />
                                <circle cx="27" cy="25" r="3" fill="white" />
                            </svg>
                            }
                            title="Development"
                            description="4231 Total Course"
                        />
                    </div>
                </div>
                <div id="achievement" className="absolute -bottom-10 bg-white border-[#101010] flex items-center w-[87%] h-[160px] rounded-xl border-t-2 border-r-4 border-b-4 border-l-2 p-0">
                    <div className="flex flex-col text-center w-80 h-[71px] border-r border-[#DFE1E6]">
                        <span className="font-bold text-[40px] leading-[48px]">3.120+</span>
                        <span className="font-medium leading-[19px]">Total Courses</span>
                    </div>
                    <div className="flex flex-col text-center w-80 h-[71px] border-r border-[#DFE1E6]">
                        <span className="font-bold text-[40px] leading-[48px]">1.260+</span>
                        <span className="font-medium leading-[19px]">Total Mentor</span>
                    </div>
                    <div className="flex flex-col text-center w-80 h-[71px] border-r border-[#DFE1E6]">
                        <span className="font-bold text-[40px] leading-[48px]">120.521+</span>
                        <span className="font-medium leading-[19px]">Total Students</span>
                    </div>
                    <div className="flex flex-col text-center w-80 h-[71px]">
                        <span className="font-bold text-[40px] leading-[48px]">5+</span>
                        <span className="font-medium leading-[19px]">Years Experience</span>
                    </div>
                </div>
            </section>
            <section id="list-product" className="relative w-screen -mt-32 h-[2117px] bg-[#101010] rounded-b-[100px] flex items-center flex-col z-40">
                <div className="mt-64 w-[97%] h-[1262px] flex flex-col items-center">
                    <div className="w-[925px] h-[100px] text-center font-bold text-4xl text-white flex flex-col items-center">
                        <span>Mastering Your Skills With Real-World</span>
                        <span>Projects Essential In Today's Professional Landscape</span>
                    </div>
                    <Tabs defaultValue="new-years-promo" className="w-full mt-[52px]">
                        <TabsList className="flex justify-around my-11">
                            <TabsTrigger value="new-years-promo">New Years Promos</TabsTrigger>
                            <TabsTrigger value="3d-artist">3D Artist</TabsTrigger>
                            <TabsTrigger value="animations">Animations</TabsTrigger>
                            <TabsTrigger value="copywriting">Copywriting</TabsTrigger>
                            <TabsTrigger value="development">Development</TabsTrigger>
                            <TabsTrigger value="graphich design">Graphich Design</TabsTrigger>
                            <TabsTrigger value="illustration">Illustration</TabsTrigger>
                        </TabsList>
                        <TabsContent value="new-years-promo">
                            <div className="grid grid-rows-2 grid-cols-3 gap-[32px]">
                                <CourseCard
                                    image={iconMastering}
                                    title="Mastering User-Centric Design: A Comprehensive UI/UX Course"
                                />
                                <CourseCard
                                    image={iconsFromConcept}
                                    title="From Concept to Motion: Mastering Animation Principles"
                                />
                                <CourseCard
                                    image={iconVirtual}
                                    title="Creating Virtual Realities: Advanced 3D Artistry Workshop"
                                />
                                <CourseCard
                                    image={iconWebDev}
                                    title="Web Development Unleashed: A Comprehensive Course"
                                />
                                <CourseCard
                                    image={iconIlustration}
                                    title="Digital Illustration Masterclass: Unleash Your Creative Potential"
                                />
                                <CourseCard
                                    image={iconTheArtOfPersuation}
                                    title="The Art of Persuasion: Copywriting Excellence for Success"
                                />
                            </div>
                        </TabsContent>
                        <TabsContent value="3d-artist">
                            <div className="grid grid-rows-2 grid-cols-3 gap-[32px]">
                                <CourseCard
                                    image={iconWebDev}
                                    title="Web Development Unleashed: A Comprehensive Course"
                                />
                                <CourseCard
                                    image={iconIlustration}
                                    title="Digital Illustration Masterclass: Unleash Your Creative Potential"
                                />
                                <CourseCard
                                    image={iconTheArtOfPersuation}
                                    title="The Art of Persuasion: Copywriting Excellence for Success"
                                />
                                <CourseCard
                                    image={iconMastering}
                                    title="Mastering User-Centric Design: A Comprehensive UI/UX Course"
                                />
                                <CourseCard
                                    image={iconsFromConcept}
                                    title="From Concept to Motion: Mastering Animation Principles"
                                />
                                <CourseCard
                                    image={iconVirtual}
                                    title="Creating Virtual Realities: Advanced 3D Artistry Workshop"
                                />
                            </div>
                        </TabsContent>
                        <TabsContent value="animations">
                            <div className="grid grid-rows-2 grid-cols-3 gap-[32px]">
                                <CourseCard
                                    image={iconMastering}
                                    title="Mastering User-Centric Design: A Comprehensive UI/UX Course"
                                />
                                <CourseCard
                                    image={iconWebDev}
                                    title="Web Development Unleashed: A Comprehensive Course"
                                />
                                <CourseCard
                                    image={iconIlustration}
                                    title="Digital Illustration Masterclass: Unleash Your Creative Potential"
                                />
                                <CourseCard
                                    image={iconTheArtOfPersuation}
                                    title="The Art of Persuasion: Copywriting Excellence for Success"
                                />
                                <CourseCard
                                    image={iconsFromConcept}
                                    title="From Concept to Motion: Mastering Animation Principles"
                                />
                                <CourseCard
                                    image={iconVirtual}
                                    title="Creating Virtual Realities: Advanced 3D Artistry Workshop"
                                />
                            </div>
                        </TabsContent>
                        <TabsContent value="copywriting">
                            <div className="grid grid-rows-2 grid-cols-3 gap-[32px]">
                                <CourseCard
                                    image={iconTheArtOfPersuation}
                                    title="The Art of Persuasion: Copywriting Excellence for Success"
                                />
                                <CourseCard
                                    image={iconsFromConcept}
                                    title="From Concept to Motion: Mastering Animation Principles"
                                />
                                <CourseCard
                                    image={iconMastering}
                                    title="Mastering User-Centric Design: A Comprehensive UI/UX Course"
                                />
                                <CourseCard
                                    image={iconWebDev}
                                    title="Web Development Unleashed: A Comprehensive Course"
                                />
                                <CourseCard
                                    image={iconIlustration}
                                    title="Digital Illustration Masterclass: Unleash Your Creative Potential"
                                />
                                <CourseCard
                                    image={iconVirtual}
                                    title="Creating Virtual Realities: Advanced 3D Artistry Workshop"
                                />
                            </div>
                        </TabsContent>
                        <TabsContent value="development">
                            <div className="grid grid-rows-2 grid-cols-3 gap-[32px]">
                                <CourseCard
                                    image={iconMastering}
                                    title="Mastering User-Centric Design: A Comprehensive UI/UX Course"
                                />
                                <CourseCard
                                    image={iconTheArtOfPersuation}
                                    title="The Art of Persuasion: Copywriting Excellence for Success"
                                />
                                <CourseCard
                                    image={iconsFromConcept}
                                    title="From Concept to Motion: Mastering Animation Principles"
                                />
                                <CourseCard
                                    image={iconWebDev}
                                    title="Web Development Unleashed: A Comprehensive Course"
                                />
                                <CourseCard
                                    image={iconIlustration}
                                    title="Digital Illustration Masterclass: Unleash Your Creative Potential"
                                />
                                <CourseCard
                                    image={iconVirtual}
                                    title="Creating Virtual Realities: Advanced 3D Artistry Workshop"
                                />
                            </div>
                        </TabsContent>
                        <TabsContent value="graphich design">
                            <div className="grid grid-rows-2 grid-cols-3 gap-[32px]">
                                <CourseCard
                                    image={iconIlustration}
                                    title="Digital Illustration Masterclass: Unleash Your Creative Potential"
                                />
                                <CourseCard
                                    image={iconMastering}
                                    title="Mastering User-Centric Design: A Comprehensive UI/UX Course"
                                />
                                <CourseCard
                                    image={iconTheArtOfPersuation}
                                    title="The Art of Persuasion: Copywriting Excellence for Success"
                                />
                                <CourseCard
                                    image={iconsFromConcept}
                                    title="From Concept to Motion: Mastering Animation Principles"
                                />
                                <CourseCard
                                    image={iconWebDev}
                                    title="Web Development Unleashed: A Comprehensive Course"
                                />
                                <CourseCard
                                    image={iconVirtual}
                                    title="Creating Virtual Realities: Advanced 3D Artistry Workshop"
                                />
                            </div>
                        </TabsContent>
                        <TabsContent value="illustration">
                            <div className="grid grid-rows-2 grid-cols-3 gap-[32px]">
                                <CourseCard
                                    image={iconVirtual}
                                    title="Creating Virtual Realities: Advanced 3D Artistry Workshop"
                                />
                                <CourseCard
                                    image={iconIlustration}
                                    title="Digital Illustration Masterclass: Unleash Your Creative Potential"
                                />
                                <CourseCard
                                    image={iconMastering}
                                    title="Mastering User-Centric Design: A Comprehensive UI/UX Course"
                                />
                                <CourseCard
                                    image={iconTheArtOfPersuation}
                                    title="The Art of Persuasion: Copywriting Excellence for Success"
                                />
                                <CourseCard
                                    image={iconsFromConcept}
                                    title="From Concept to Motion: Mastering Animation Principles"
                                />
                                <CourseCard
                                    image={iconWebDev}
                                    title="Web Development Unleashed: A Comprehensive Course"
                                />
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
                <Button className="bg-[#FFB81E] hover:bg-yellow-500 py-[14px] px-8 flex gap-1 rounded-[2px] w-[204px] h-[60px]">
                    <span className="font-bold">View More</span>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.7928 17.7929C12.4023 18.1834 12.4023 18.8166 12.7928 19.2071C13.1833 19.5976 13.8165 19.5976 14.207 19.2071L17.1035 16.3107L20.9999 13.4142C21.781 12.6332 21.781 11.3668 20.9999 10.5858L17.1035 7.68934L14.207 4.79289C13.8165 4.40237 13.1833 4.40237 12.7928 4.79289C12.4023 5.18342 12.4023 5.81658 12.7928 6.20711L15.1893 8.60355L18.5857 11H4.49991C3.94763 11 3.49991 11.4477 3.49991 12C3.49991 12.5523 3.94763 13 4.49991 13H18.5857L15.1893 15.3964L12.7928 17.7929Z" fill="#101010" />
                    </svg>

                </Button>
                <section id="stories-card" className="w-[97%] my-28">
                    <Carousel
                        className="w-full flex items-center gap-8"
                    >
                        <div className="h-[244px]">
                            <div className="w-[360px] flex justify-center flex-col items-center gap-4 mb-4">
                                <h2 className="text-white text-[36px] font-bold leading-[54px]">Real Success Stories From Our Students</h2>
                                <p className="font-medium text-[#91909E]">Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. </p>
                            </div>
                            <CarouselPrevious className="rounded-full" />
                            <CarouselNext className="rounded-full ms-4" />
                        </div>
                        <CarouselContent className="-ml-8">
                            <CarouselItem className="basis-1/3">
                                <StoriesCard
                                    title="The online course exceeded my expectations! The engaging content and interactive sessions truly enhanced my learning experience"
                                    image={avatar1}
                                    name="Mazen Drego"
                                    description="CMO, Parlementte"
                                />
                            </CarouselItem>
                            <CarouselItem className="basis-1/3">
                                <StoriesCard
                                    title="The comprehensive material and supportive instructors made this online course a game-changer for my professional development"
                                    image={avatar2}
                                    name="Taka"
                                    description="Founder, Boldly"
                                />
                            </CarouselItem>
                            <CarouselItem className="basis-1/3">
                                <StoriesCard
                                    title="The online course exceeded my expectations! The engaging content and interactive sessions truly enhanced my learning experience"
                                    image={avatar3}
                                    name="Luis Figo"
                                    description="CMO, Parlementte"
                                />
                            </CarouselItem>
                            <CarouselItem className="basis-1/3">
                                <StoriesCard
                                    title="The comprehensive material and supportive instructors made this online course a game-changer for my professional development."
                                    image={avatar4}
                                    name="Mazen Drego"
                                    description="CMO, Parlementte"
                                />
                            </CarouselItem>
                            <CarouselItem className="basis-1/3">
                                <StoriesCard
                                    title="The online course exceeded my expectations! The engaging content and interactive sessions truly enhanced my learning experience"
                                    image={avatar1}
                                    name="Ozil"
                                    description="Atlet, FIFA"
                                />
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </section>
            </section>
            <section id="learning-quest" className="w-screen h-[2482px] bg-[#6513D0] -mt-28 flex justify-center flex-col items-center">
                <div id="benefit-cards-list" className="grid grid-cols-3 grid-rows-3 gap-6 w-[1280px] h-[714px] rounded-[4px]">
                    <BenefitCard
                        icon={toga}
                        title="Free Update Course"
                        description="No Limit for learning 🔥"
                        content="Gain an unparalleled advantage with 'Full-time Access' to our online courses. Enjoy unrestricted learning at your own pace, anytime, anywhere."
                        className="bg-[#FFB81E]"
                        classNameDescription="text-black"
                    />
                    <BenefitCard
                        icon={qna}
                        title="Live Q&A Sessions"
                        description="Weekly live session with mentor"
                        content="Facilitate dynamic and engaging live Q&A sessions, where participants have the exclusive opportunity to interact directly with seasoned instructors and industry experts."
                    />
                    <BenefitCard
                        icon={progressTracking}
                        title="Progress Tracking"
                        description="Stay on course. Learn what you love"
                        content="Empower participants with intuitive and accessible progress tracking tools designed
                        to offer a comprehensive overview of their learning journey."
                    />
                    <BenefitCard
                        icon={mentorShip}
                        title="Mentorship Program"
                        description="Stuck? Mentor consult for progress"
                        content="Extend a unique opportunity for participants to access a distinguished cadre of expert mentors, possessing a wealth of experience and knowledge in their respective fields."
                    />
                    <BenefitCard
                        children="The Advantages Of Learning Online On The Bimore Platform."
                        className="p-0 flex items-center bg-transparent border-none text-white"
                    />
                    <BenefitCard
                        icon={privateGroup}
                        title="Private Group Discussion"
                        description="Casual Discussion with a Mentor"
                        content="Enjoy the perk of a 'Private Discussion'—a special space for you and fellow learners. Dive into focused conversations, ask questions, and collaborate in a secure environment."
                    />
                    <BenefitCard
                        icon={fullTime}
                        title="Full-time Access"
                        description="Learn everywhere and anytime"
                        content="Gain an unparalleled advantage with 'Full-time Access' to our online courses. Enjoy unrestricted learning at your own pace, anytime, anywhere."
                    />
                    <BenefitCard
                        icon={realWordProject}
                        title="Real-World Project"
                        description="Explore real-world projects."
                        content="Immerse participants in a transformative learning experience by providing them with exclusive access to real-world projects and intricate industry case studies."
                    />
                    <BenefitCard
                        icon={community}
                        title="Community Engagement"
                        description="Foster collaboration & gain fresh insights"
                        content="Foster a vibrant and interconnected learning ecosystem through the creation of a robust  community, specially tailored to elevate the educational experience for our participants."
                    />
                </div>
                <div id="learning-quest-challenge" className="grid grid-cols-3 gap-6 mt-[120px] w-[1280px] h-[874px] rounded-[4px]">
                    <div className="p-0 w-[406px] h-[421px] rounded-[4px] flex flex-col justify-center items-center">
                        <Badges className="w-fit">
                            <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_139_186)">
                                    <path d="M8.50001 20C12.7526 20 16.5 17 16.5 13C16.5 9 13.5 7 12.5 6C11.0939 4.5939 10.6521 2.74612 10.5254 1.4746C10.4552 0.770672 9.77593 0.271446 9.18639 0.662434C8.03352 1.42702 6.40375 2.98749 5.5 6C4.85747 8.14176 5.5 10 5.5 10C5.5 10 4.5 9.5 4 8C3.8353 7.5059 3.61635 6.90329 3.39675 6.31727C3.08071 5.47387 1.94066 5.48134 1.6629 6.33811C1.11497 8.0282 0.5 10.3031 0.5 12C0.5 17 4.24745 20 8.50001 20Z" fill="white" />
                                    <path d="M5.27639 10.4472L5.5 10C5.27639 10.4472 5.27617 10.4471 5.27594 10.447L5.27547 10.4468L5.27446 10.4462L5.27215 10.4451L5.26644 10.4421L5.25074 10.4338C5.23842 10.4271 5.22244 10.4182 5.2032 10.4069C5.16471 10.3844 5.11306 10.3523 5.05133 10.3095C4.92795 10.2241 4.76372 10.0958 4.58395 9.91605C4.22311 9.55521 3.80297 8.99006 3.52566 8.15811C3.36384 7.67266 3.14738 7.07672 2.92854 6.49272C2.76959 6.06852 2.26245 6.11008 2.13853 6.49231C1.59086 8.18162 1 10.3897 1 12C1 16.6934 4.49212 19.5 8.50001 19.5C12.555 19.5 16 16.6514 16 13C16 9.81813 13.9949 8.02424 12.7285 6.89129C12.507 6.69312 12.3081 6.51517 12.1464 6.35355C10.6232 4.83029 10.1598 2.84805 10.0278 1.52417C10.0069 1.31422 9.89589 1.15363 9.77825 1.07719C9.67686 1.01132 9.57592 1.00406 9.46274 1.07912C8.39614 1.78649 6.84548 3.25513 5.97891 6.14367C5.68197 7.13348 5.68085 8.06287 5.75607 8.74865C5.79357 9.09055 5.84969 9.36857 5.89565 9.55871C5.9186 9.65367 5.93894 9.72637 5.953 9.77377C5.96003 9.79746 5.96548 9.8148 5.96889 9.82541L5.97242 9.83621L5.97255 9.83661C5.97258 9.8367 5.97261 9.8368 5.97265 9.83689C5.97267 9.83694 5.97268 9.837 5.9727 9.83705C5.97271 9.83708 5.97272 9.83711 5.97273 9.83714C5.97274 9.83715 5.97274 9.83717 5.97275 9.83718C5.97278 9.83729 5.97282 9.83739 5.97286 9.8375C5.97288 9.83756 5.9729 9.83761 5.97292 9.83767C6.03876 10.0295 5.98222 10.2421 5.8297 10.3759C5.6769 10.5099 5.45818 10.5381 5.27639 10.4472Z" stroke="#101010" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_139_186" x="0.5" y="0.525261" width="18" height="21.4747" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dx="2" dy="2" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_139_186" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_139_186" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                            <span className="font-bold text-[14px] leading-4 text-shadow-sm">New! Our Latest Challange</span>
                        </Badges>
                        <span className="text-white text-shadow-sm font-bold text-[36px] leading-[43px] text-center">Learning Quests: Interactive Challenges
                            for Skill Mastery</span>
                        <p className="text-shadow-sm font-semibold text-white text-center mt-4 mb-[52px]">Learning journey with our series of interactive challenges designed for skill mastery.</p>
                        <Button className="py-[14px] px-8 flex gap-1 rounded-[2px] w-[204px] h-[60px] bg-[#FFB81E]">
                            <span className="font-bold">Start Learning</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.2928 17.7929C11.9023 18.1834 11.9023 18.8166 12.2928 19.2071C12.6833 19.5976 13.3165 19.5976 13.707 19.2071L16.6035 16.3107L20.4999 13.4142C21.281 12.6332 21.281 11.3668 20.4999 10.5858L16.6035 7.68934L13.707 4.79289C13.3165 4.40237 12.6833 4.40237 12.2928 4.79289C11.9023 5.18342 11.9023 5.81658 12.2928 6.20711L14.6893 8.60355L18.0857 11H3.99991C3.44763 11 2.99991 11.4477 2.99991 12C2.99991 12.5523 3.44763 13 3.99991 13H18.0857L14.6893 15.3964L12.2928 17.7929Z" fill="#101010" />
                            </svg>
                        </Button>
                    </div>
                    <ChallengeCard
                        icon={iconMastering}
                        category="Animation"
                        title="Animate the Extraordinary: Motion Mastery Challenge"
                        description="Step into the realm of animation with our 'Animate the Extraordinary' challenge."
                    />
                    <ChallengeCard
                        icon={iconMastering}
                        category="Icon Design"
                        title="Iconic Impressions: Crafting Unique Symbols Challenge"
                        description="Dive into our 'Iconic Impressions' challenge, where you'll explore the art of crafting distinctive symbols."

                    />
                    <ChallengeCard
                        icon={iconMastering}
                        category="Ilustrations"
                        title="Brushstrokes of Brilliance: Illustration Exploration Challenge"
                        description="Participate in our 'Brushstrokes of Brilliance' Illustration Exploration Challenge"

                    />
                    <ChallengeCard
                        icon={iconMastering}
                        category="Code"
                        title="CodeCraft: Mastering the Digital Realm Challenge"
                        description="Unlock the secrets of programming in our 'CodeCraft: Mastering the Digital Realm' challenge."

                    />
                    <ChallengeCard
                        icon={iconMastering}
                        category="UIUX Design"
                        title="Beyond Interfaces: Elevate UX/UI Design Challenge"
                        description="Participate in our 'Beyond Interfaces' challenge, where you'll transcend traditional design boundaries."

                    />
                </div>
            </section>
            <section id="frequently-question" className="w-screen h-[2242px] bg-[#fff] rounded-t-[100px] flex items-center flex-col -mt-[120px]">
                <div className="w-[1280px] flex flex-col items-center h-[811px] mt-[120px]">
                    <h1 className="font-bold text-[36px] leading-[43px] text-center text-[#101010]">Frequently Asked Questions</h1>
                    <div className="w-[475px] my-4">
                        <p className=" text-center text-medium leading-6 text-[#737373]">Questions or need help? Use our 'Contact Us' feature to reach our dedicated support team easily.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-3">
                            <Faq
                                value="items-1"
                                title="What Sets Your Online Courses Apart From Others?"
                                content="Our online courses offer an interactive approach and real-world projects to enhance your practical learning experience"
                            />
                            <Faq
                                value="items-1"
                                title="What Sets Your Online Courses Apart From Others?"
                                content="Our online courses offer an interactive approach and real-world projects to enhance your practical learning experience"
                            />
                            <Faq
                                value="items-1"
                                title="What Sets Your Online Courses Apart From Others?"
                                content="Our online courses offer an interactive approach and real-world projects to enhance your practical learning experience"
                            />
                            <Faq
                                value="items-1"
                                title="What Sets Your Online Courses Apart From Others?"
                                content="Our online courses offer an interactive approach and real-world projects to enhance your practical learning experience"
                            />
                            <Faq
                                value="items-1"
                                title="What Sets Your Online Courses Apart From Others?"
                                content="Our online courses offer an interactive approach and real-world projects to enhance your practical learning experience"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <Faq
                                value="items-1"
                                title="What Sets Your Online Courses Apart From Others?"
                                content="Our online courses offer an interactive approach and real-world projects to enhance your practical learning experience"
                            />
                            <Faq
                                value="items-1"
                                title="What Sets Your Online Courses Apart From Others?"
                                content="Our online courses offer an interactive approach and real-world projects to enhance your practical learning experience"
                            />
                            <Faq
                                value="items-1"
                                title="What Sets Your Online Courses Apart From Others?"
                                content="Our online courses offer an interactive approach and real-world projects to enhance your practical learning experience"
                            />
                            <Faq
                                value="items-1"
                                title="What Sets Your Online Courses Apart From Others?"
                                content="Our online courses offer an interactive approach and real-world projects to enhance your practical learning experience"
                            />
                            <Faq
                                value="items-1"
                                title="What Sets Your Online Courses Apart From Others?"
                                content="Our online courses offer an interactive approach and real-world projects to enhance your practical learning experience"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-[120px] w-[1480px] h-[973px] border-2 border-black">
                    <div className="flex justify-center">
                        <div className="flex justify-between items-center w-[1280px]">
                            <div>
                                <h2 className="font-bold text-[36px] leading-[43px]">Explore Horizons: Learn More, Grow More</h2>
                                <p className="font-medium text-[#91909E] leading-[25px] mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                            <Button className="bg-[#FFB81E] hover:bg-yellow-500 py-[14px] px-8 flex gap-1 rounded-[2px] w-[204px] h-[60px]">
                                <span className="font-bold">View More</span>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.7928 17.7929C12.4023 18.1834 12.4023 18.8166 12.7928 19.2071C13.1833 19.5976 13.8165 19.5976 14.207 19.2071L17.1035 16.3107L20.9999 13.4142C21.781 12.6332 21.781 11.3668 20.9999 10.5858L17.1035 7.68934L14.207 4.79289C13.8165 4.40237 13.1833 4.40237 12.7928 4.79289C12.4023 5.18342 12.4023 5.81658 12.7928 6.20711L15.1893 8.60355L18.5857 11H4.49991C3.94763 11 3.49991 11.4477 3.49991 12C3.49991 12.5523 3.94763 13 4.49991 13H18.5857L15.1893 15.3964L12.7928 17.7929Z" fill="#101010" />
                                </svg>
                            </Button>
                        </div>
                    </div>
                    <Carousel
                        plugins={[
                            AutoScroll({
                                speed: 2,
                            })
                        ]}
                    >
                        <CarouselContent>
                            <CarouselItem key={1} className="md:basis-1/5">
                                <ProductCard
                                    image={image}
                                    title="Tieats - Food Online Mobile app"
                                    avatar={avatar1}
                                />
                            </CarouselItem>
                            <CarouselItem key={2} className="md:basis-1/5">
                                <ProductCard
                                    image={image1}
                                    title="Tieats - Food Online Mobile app"
                                    avatar={avatar1}
                                />
                            </CarouselItem>
                            <CarouselItem key={3} className="md:basis-1/5">
                                <ProductCard
                                    image={image}
                                    title="Tieats - Food Online Mobile app"
                                    avatar={avatar1}
                                />
                            </CarouselItem>
                            <CarouselItem key={4} className="md:basis-1/5">
                                <ProductCard
                                    image={image1}
                                    title="Tieats - Food Online Mobile app"
                                    avatar={avatar1}
                                />
                            </CarouselItem>
                            <CarouselItem key={5} className="md:basis-1/5">
                                <ProductCard
                                    image={image}
                                    title="Tieats - Food Online Mobile app"
                                    avatar={avatar1}
                                />
                            </CarouselItem>
                            <CarouselItem key={6} className="md:basis-1/5">
                                <ProductCard
                                    image={image1}
                                    title="Tieats - Food Online Mobile app"
                                    avatar={avatar1}
                                />
                            </CarouselItem>
                            <CarouselItem key={7} className="md:basis-1/5">
                                <ProductCard
                                    image={image}
                                    title="Tieats - Food Online Mobile app"
                                    avatar={avatar1}
                                />
                            </CarouselItem>
                            <CarouselItem key={8} className="md:basis-1/5">
                                <ProductCard
                                    image={image1}
                                    title="Tieats - Food Online Mobile app"
                                    avatar={avatar1}
                                />
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </div>
            </section>
        </div >
    )
}

export { Home }