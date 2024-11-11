"use client"
import Image from "next/image";
import { useState } from "react";
import banneraboutus from '@public/ThemeFour/Aboutus/Aboutusbanner.webp';
import biologist from '@public/ThemeFour/Aboutus/Biologist.webp';
import mark from '@public/ThemeFour/Aboutus/mark.svg';
import labscientist from '@public/ThemeFour/Aboutus/labscientist.webp';
import labscientisttwo from '@public/ThemeFour/Aboutus/labscientisttwo.webp';
import worldmap from '@public/ThemeFour/Aboutus/worldmap.svg';
import add from '@public/ThemeFour/Aboutus/Addicon.svg';
import remove from '@public/ThemeFour/Aboutus/Removeicon.svg';
export default function AboutUs() {
    const [accordianExpand, setAccordianExpand] = useState<number | null>(null);
    // console.log(accordianExpand,'accordianExpand');
    
    const handleChange = (index:number) => {
        setAccordianExpand(accordianExpand === index ? null : index);
    };
    let ChooseUS = [
        {
            img: mark,
            content: 'Lorem Ipsum'
        },
        {
            img: mark,
            content: 'Lorem Ipsum'
        },
        {
            img: mark,
            content: 'Lorem Ipsum'
        },
        {
            img: mark,
            content: 'Lorem Ipsum'
        },
        {
            img: mark,
            content: 'Lorem Ipsum'
        },
    ]
    let Accordian = [
        {
            title: 'Lorem Ipsum is simply dummy text ?',
            summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release`
        },
        {
            title: 'Lorem Ipsum is simply dummy text ?',
            summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release`
        },
        {
            title: 'Lorem Ipsum is simply dummy text ?',
            summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release`
        },
        {
            title: 'Lorem Ipsum is simply dummy text ?',
            summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release`
        },
        {
            title: 'Lorem Ipsum is simply dummy text ?',
            summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release`
        },
    ]
    return (
        <div className="">
            <div className="relative">
                <Image
                    src={banneraboutus}
                    alt="aboutusbanner"
                    className="h-dvh lg:h-full w-full"
                />
                <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:-translate-x-[40%] lg:-translate-y-[15%]  p-4 w-full text-[#ffffff]">
                    <p className="text-[clamp(3.5rem,4vw,5rem)] 
                     font-bold font-Montserrat">About Us</p>
                </div>
            </div>
            <div className="py-16 mx-[3%] lg:mx-[10%] flex flex-col-reverse lg:flex-row gap-4 ">
                <div className=" flex-1 flex flex-col gap-4">
                    <div className="text-[#171151] font-Montserrat] font-bold text-[35px] lg:text-[36px] 2xl:text-[40px] leading-10">
                        <p>Research Science Exploration</p>
                        <p>Of The Subatomic World</p>
                    </div>
                    <div className="text-[#9fa5b4] font-Roboto font-normal text-sm lg:text-base 2xl:text-lg pe-4">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been</p>
                    </div>
                    <div className="flex items-center">
                        <div className=" flex-1  px-2">
                            <p className="text-[#171151] font-Montserrat font-medium text-lg lg:text-xl 2xl:text-2xl">Why Choose Us?</p>
                            <div className="flex flex-col gap-2 py-2">
                                {
                                    ChooseUS && ChooseUS.map((item, index) => (
                                        <div key={index}>
                                            <div className="flex  gap-4">
                                                <Image src={item.img} alt="mark" />
                                                <p className="text-[#60718b] font-Roboto font-normal text-sm md:text-base lg:text-base 2xl:text-[20px] ">{item.content}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="border flex-1">
                            <Image
                                src={biologist}
                                alt="biologist"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
                <div className=" flex-1 lg:relative">
                    <div className="lg:absolute lg:right-0 lg:left-0 lg:-top-[64%]  2xl:-top-[75%] lg:mx-[5%] flex gap-5">
                        <div className=" flex-1 flex flex-col gap-4">
                            <div>
                                <Image
                                    src={labscientist}
                                    width={200}
                                    height={200}
                                    alt="labscientist"
                                    className="object-contain w-full"
                                />
                            </div>
                            <div className="bg-[#103cac] text-[#ffffff] px-4 py-11 space-y-2">
                                <p className="font-semibold font-Montserrat text-xl lg:text-xl 2xl:text-3xl">Our Mission</p>
                                <p className="text-sm lg:text-base 2xl:text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col gap-4">
                            <div className="bg-[#04215d] text-[#ffffff] px-4 py-12 space-y-2">
                                <p className="font-semibold font-Montserrat text-xl lg:text-xl 2xl:text-3xl">Our Vision</p>
                                <p className="text-sm lg:text-base 2xl:text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <div>
                                <Image
                                    src={labscientisttwo}
                                    width={200}
                                    height={200}
                                    alt="labscientist"
                                    className="object-contain w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-12">
                <div className="text-center py-4">
                    <p className="text-[#171151] font-Montserrat font-bold text-[30px] lg:text-[32px] 2xl:text-[36px]">AcrossThe Global Expanse</p>
                    <p className="font-normal font-Roboto text-sm lg:text-base 2xl:text-lg text-[#9fa5b4]">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                </div>
                <div className="my-4">
                    <Image
                        src={worldmap}
                        alt="worldmap"
                        width={800}
                        height={800}
                        className="m-auto"
                    />
                </div>
            </div>
            <div className="bg-[#0d264e] text-[#ffffff] py-4 lg:py-0">
                <div className="flex flex-col lg:flex-row gap-4 mx-[8%] lg:mx-[14%] ">
                    <div className=" flex-1 flex flex-col gap-2 justify-center  px-4 py-10">
                        <p className="font-Montserrat font-semibold text-[28px] lg:text-[30px] 2xl:text-3xl">Discuss With Us</p>
                        <p className="font-Roboto font-light text-sm lg:text-base 2xl:text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been</p>
                    </div>
                    <div className="bg-[#1c50d3] px-4 py-6 lg:px-10 lg:py-10 flex-1">
                        <p className="font-Montserrat font-semibold text-xl 2xl:text-[24px]">Leave Your Message</p>
                        <form>
                            <div className=" flex flex-col justify-between gap-6 py-6">
                                <div className="flex gap-4 justify-between bg-transparent">
                                    <div className="flex-1">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full  py-2 outline-none bg-transparent border-b border-b-[#6185e1] placeholder-[#ffffff]
                                        placeholder:font-Montserrat placeholder:font-light"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <input
                                            type="text"
                                            placeholder="Your Phone"
                                            className="w-full py-2 outline-none bg-transparent border-b border-b-[#6185e1] placeholder-[#ffffff]
                                        placeholder:font-Montserrat placeholder:font-light"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        className="w-full py-2 outline-none bg-transparent border-b border-b-[#6185e1] placeholder-[#ffffff]
                                    placeholder:font-Montserrat placeholder:font-light"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        rows={4}
                                        name="message"
                                        placeholder="Your Message"
                                        className="w-full  bg-transparent border-b border-b-[#6185e1] placeholder:font-light placeholder:font-Montserrat
                                    placeholder-[#ffffff] outline-none resize-none">
                                    </textarea>
                                </div>
                                <div>
                                    <button className="bg-[#ffffff] text-[#1c50d3] w-full py-3 px-3 uppercase font-Montserrat font-medium">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="pt-8 pb-20">
                <div className="flex flex-col lg:flex-row gap-4 mx-[6%] lg:mx-[14%]">
                    <div className="flex-1">
                        <p className="font-Montserrat font-bold text-[30px]  lg:text-[32px] 2xl:text-[36px] text-[#171151]">Get Your All Answer Here</p>
                        <p className="font-Roboto font-normal text-[#9fa5b4] text-sm lg:text-base 2xl:text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been</p>
                    </div>
                    <div className="flex-1 ">
                        {
                            Accordian && Accordian.map((accordion, index:number) => (
                                <div key={index} >
                                    <div
                                        className="flex justify-between border-b border-b-[#e6e8f0] items-center py-4 cursor-pointer"
                                        onClick={() => handleChange(index)}
                                    >
                                        <p className="font-semibold font-Montserrat text-[15px] lg:text-base 2xl:text-lg text-[#838a9e]">{accordion.title}</p>
                                        <p className="transition-all duration-500">
                                            {
                                                accordianExpand === index ?
                                                    <Image src={remove} alt="remove" width={15} height={15} />
                                                    : <Image src={add} alt="add" width={15} height={15} />
                                            }
                                        </p>
                                    </div>
                                    <div className={` border-b border-b-[#e6e8f0] text-[#838a9e] font-Roboto font-normal text-sm lg:text-base 2xl:text-lg
                                          transition-all duration-500 ease-in-out overflow-hidden ${accordianExpand === index ? 'max-h-[600px] py-4' : "max-h-0"}`}>
                                        <p>{accordion.summary}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}