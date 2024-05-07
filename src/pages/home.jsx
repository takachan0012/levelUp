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

const Home = () => {
    return (
        <div className="h-screen">
            <section className="relative h-[110%] bg-gradient-to-b from-[#FFB81E] to-[#F5C84F] rounded-b-[100px] flex items-center flex-col">
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
            <section id="list-product" className="-mt-32 h-[2117px] bg-[#101010] rounded-b-[100px] flex items-center flex-col">
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
                    <span className="font-bold">view more</span>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.7928 17.7929C12.4023 18.1834 12.4023 18.8166 12.7928 19.2071C13.1833 19.5976 13.8165 19.5976 14.207 19.2071L17.1035 16.3107L20.9999 13.4142C21.781 12.6332 21.781 11.3668 20.9999 10.5858L17.1035 7.68934L14.207 4.79289C13.8165 4.40237 13.1833 4.40237 12.7928 4.79289C12.4023 5.18342 12.4023 5.81658 12.7928 6.20711L15.1893 8.60355L18.5857 11H4.49991C3.94763 11 3.49991 11.4477 3.49991 12C3.49991 12.5523 3.94763 13 4.49991 13H18.5857L15.1893 15.3964L12.7928 17.7929Z" fill="#101010" />
                    </svg>

                </Button>
                <section id="stories-card">
                    <StoriesCard />
                </section>
            </section>
        </div>
    )
}

export { Home }