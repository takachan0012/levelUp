import { Button } from "@components/ui/button";
import { Card } from "@components/ui/card";
const Home = () => {
    return (
        <div className="h-screen">
            <section className="h-[110%] bg-gradient-to-b from-[#FFB81E] to-[#F5C84F] rounded-b-[100px] flex justify-center ">
                <header className="flex justify-between items-center w-[97%] h-20 bg-white mt-[30px] rounded-full border-[#101010] border-t-2 border-r-4 border-b-4 border-l-2 p-4">
                    <div className="w-[170px] flex items-center gap-2">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_0_827)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05886 0 0 8.05887 0 18C0 27.9411 8.05886 36 18 36ZM23.6154 8.38515C23.8887 7.41424 22.9465 6.84011 22.086 7.45317L10.0738 16.0106C9.14059 16.6754 9.28738 18 10.2943 18H13.4574V17.9755H19.6223L14.5991 19.7479L12.3846 27.6148C12.1113 28.5858 13.0534 29.1599 13.914 28.5468L25.9262 19.9894C26.8594 19.3246 26.7125 18 25.7057 18H20.9089L23.6154 8.38515Z" fill="#101010" />
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
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9ZM16.0319 14.6177C17.2635 13.078 18 11.125 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C11.125 18 13.078 17.2635 14.6177 16.0319L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L16.0319 14.6177Z" fill="#101010" />
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

            </section>
        </div>
    )
}

export { Home }