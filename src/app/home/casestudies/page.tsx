"use client"
import chemical_substance from '@public/ThemeFour/CaseStudies/chemical-substance.webp';
import microscope from '@public/ThemeFour/CaseStudies/microscope-medium.webp';
import lab_equip from '@public/ThemeFour/CaseStudies/science-laboratory.webp'
import microbiologist from '@public/ThemeFour/CaseStudies/microbiologist.webp'
import Image from 'next/image';
const Carousel = dynamic(() => import("react-multi-carousel"), { ssr: false });
import "react-multi-carousel/lib/styles.css";
import dynamic from 'next/dynamic';
export default function Casestudies() {
    const CaseStudies = [
        {
            image: chemical_substance,
            title: 'Lorem Ipsum',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            image: microscope,
            title: 'Lorem Ipsum',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            image: lab_equip,
            title: 'Lorem Ipsum',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            image: microbiologist,
            title: 'Lorem Ipsum',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            image: microbiologist,
            title: 'Lorem Ipsum',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            image: microbiologist,
            title: 'Lorem Ipsum',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            image: microbiologist,
            title: 'Lorem Ipsum',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
    ]
    return (
        <div className="bg-[#ffffff] py-16 lg:pb-24 px-4  lg:px-0 lg:mx-[10%]  2xl:mx-[15%] ">
            <div className='my-2 lg:mx-[6%]'>
                <p className="text-primart_clr font-semibold font-Montserrat text-[35px] xl:text-[40px] 2xl:text-[48px]">Case Studies</p>
            </div>
            <Carousel
                className=" py-10 lg:py-4 lg:ps-[6%] lg:-mr-[14.8%] 2xl:-mr-[23%]"
                additionalTransfrom={0}
                ssr={true}
                arrows={true}
                // autoPlay
                autoPlaySpeed={3000}
                centerMode={false}
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={10}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    superLargeDesktop: {
                        breakpoint: {
                            max: 5000,
                            min: 3000
                        },
                        items: 4,
                    },
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024,
                        },
                        items: 4,
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0,
                        },
                        items: 1,
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464,
                        },
                        items: 1,
                    },
                }}
                shouldResetAutoplay
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {
                    CaseStudies && CaseStudies.map((item, index) => (
                        <div  key={index}  >
                            <div className='relative w-full h-auto lg:w-[95%]'>
                                    <Image
                                        src={item.image}
                                        alt='labaratoryimg'
                                        className='object-contain w-full '
                                    />
                                <div className='absolute bottom-0 left-0 right-0 bg-[#103cac] opacity-[0.81] text-[#ffffff] px-4 py-2 lg:py-1 md:py-6 2xl:py-4'>
                                    <p className='font-Montserrat font-semibold text-[20px] 2xl:text-2xl'>{item.title}</p>
                                    <p className='font-Roboto font-normal text-[12px] 2xl:text-xl'>{item.content}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </Carousel>
        </div>
    )
}