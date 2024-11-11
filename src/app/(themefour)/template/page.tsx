import Image from "next/image";
import Bannner from '@public/ThemeFour/ChooseOption//TemplateBanner.webp';
import templates from '@public/ThemeFour/ChooseOption/templates.webp';
import customdesign from '@public/ThemeFour/ChooseOption/customdesign.svg';
import productmngt from '@public/ThemeFour/ChooseOption/productmanagement.svg'
import logo from '@public/ThemeFour/ChooseOption/logobrand.webp';
import usericon from '@public/ThemeFour/ChooseOption/usericon.svg'
export default function ChooseTemplate() {
    return (
        <div>
            <div className="bg-[#ffffff] flex items-center justify-between py-2 px-8">
                <div>
                    <Image src={logo} alt="logo" width={100} height={100} />
                </div>
                <div>
                    <Image src={usericon} alt="user" width={30} height={30} />
                </div>
            </div>
            <div className="relative bg-[#E9EBEF] bg-[url('/ThemeFour/ChooseOption//TemplateBanner.webp')]
         bg-cover bg-no-repeat lg:bg-none">
                <div className="text-[#1e4974] font-bold font-Roboto text-5xl xl:text-5xl 2xl:text-6xl
            lg:absolute lg:left-20 lg:top-9 px-10 py-10 lg:p-0">
                    <p>choose</p>
                    <p>your option</p>
                </div>
                <Image
                    src={Bannner}
                    alt="logobrand"
                    className="w-full lg:h-dvh lg:block hidden object-cover"
                />
                <div className="lg:absolute  lg:top-[55%] lg:left-1/2  lg:-translate-x-1/2 lg:-translate-y-1/2  
                lg:w-[70%] w-full p-4 lg:p-0">
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
                        <div className="flex-1 flex flex-col gap-2">
                            <div>
                                <Image
                                    src={templates}
                                    alt="templates"
                                    className=" w-dvw object-contain"
                                />
                            </div>
                            <div>
                                <p className="text-[#527eaa] text-2xl xl:text-3xl 2xl:text-4xl 
                                 font-bold font-Roboto mt-2">
                                    Choose Template
                                </p>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className=" flex flex-col gap-5 ">
                                <div className="flex-1 flex gap-4 ">
                                    <div className="flex-1">
                                        <Image
                                            src={customdesign}
                                            alt='customdesign'
                                            className="object-contain w-dvw "
                                        />
                                    </div>
                                    <div className="text-[#527eaa] text-2xl xl:text-3xl 2xl:text-4xl 
                                     font-bold font-Roboto flex-1 ">
                                        <p>Customize Design</p>
                                    </div>
                                </div>
                                <div className="flex-1 flex gap-5 ">
                                    <div className="flex-1">
                                        <Image
                                            src={productmngt}
                                            alt='productmngt'
                                            className="object-contain  w-dvw"
                                        />
                                    </div>
                                    <div className="text-[#527eaa] text-2xl xl:text-3xl 2xl:text-4xl 
                                     font-bold font-Roboto flex-1 ">
                                        <p>Product Management</p>
                                    </div>
                                </div>
                            </div>
                            <div >
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-1 justify-center text-[#000000] items-center font-Roboto font-light  bg-[#ffffff]
                   p-2 mt-10 lg:mt-0 text-center flex-wrap  text-sm">
                    <p className='text-center'>Crafted with precision by</p>
                    <a
                        href="https://kyurius.tech/"
                        target="blank"
                        className="flex items-center gap-1"
                    >
                        <Image
                            loading="lazy"
                            src="/ThemeFour/Assets/ktslogo.svg"
                            alt="Kts logo"
                            className="max-w-5"
                            width={30}
                            height={30}
                        />
                        <p>Kyurius Tech Studios,</p>
                    </a>{" "}
                    <p>the architects of digital experiences</p>
                </div>
            </div>
        </div>
    )
}