import Image from "next/image";
import chemicallab from '@public/IndustrySolutions/chemicalslab.webp';
import MicroScope from '@public/IndustrySolutions/Microscope.webp';
import arrow from '@public/IndustrySolutions/arrow.svg';
import lab from '@public/IndustrySolutions/lab-equip.svg'
export default function Insdustrysolutions() {
    const Solutions = [
        {
            id: 1,
            number: '01',
            title: 'Pharmaceuticals',
        },
        {
            id: 2,
            number: '02',
            title: 'Agriculture',
        },
        {
            id: 3,
            number: '03',
            title: 'Energy',
        },
        {
            id: 4,
            number: '04',
            title: 'Environmental Science',
        },
    ]
    return (
        <div>
            <div className="flex relative ">
                <div className="bg-[#eff1f7] flex-0 lg:flex-[0.4] py-4">
                    <div className="absolute right-0 left-0 -top-[14%] lg:-top-[7%] mx-[8%] lg:mx-[14%]  flex flex-col lg:flex-row">
                        <div className="flex-1 relative">
                            <Image
                                src={chemicallab}
                                alt="chemicalsolutions"
                                className="w-full object-contain"
                            />
                            <div className="absolute bottom-0 flex flex-col top-0 left-0 right-0">
                                <div className="flex-1"> </div>
                                <div className="flex-1 flex">
                                    <div className="flex-1  flex flex-col p-4  justify-center"></div>
                                    <div className="bg-[#18b5de] flex-1 p-4  flex flex-col  justify-center gap-2 text-[#ffffff]">
                                        <p className="lg:text-lg xl:text-2xl 2xl:text-3xl font-Montserrat font-semibold ">Formulation Development</p>
                                        <p className=" text-sm  2xl:text-lg font-Roboto font-normal">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col">
                            <div className=" flex-1  flex">
                                <div className=" flex-1 p-4 flex flex-col  justify-center gap-2 bg-[#ffffff]">
                                    <p className="text-primart_clr lg:text-lg xl:text-2xl 2xl:text-3xl font-Montserrat font-bold ">Custom Chemical Synthesis</p>
                                    <p className="text-[#616179] text-sm 2xl:text-lg font-Roboto font-normal">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>
                                <div className="flex-1 p-4 flex flex-col  justify-center gap-2 bg-[#103cac] text-[#ffffff]" >
                                    <p className="lg:text-lg xl:text-2xl 2xl:text-3xl  font-Montserrat font-semibold ">Analytical & Testing Services</p>
                                    <p className="text-sm 2xl:text-lg font-Roboto font-normal">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>
                            </div>
                            <div className=" flex-1 flex">
                                <div className=" flex-1 p-4 flex flex-col  justify-center gap-2 bg-[#04215d] text-[#ffffff] ">
                                    <p className="lg:text-lg xl:text-2xl 2xl:text-3xl font-Montserrat font-bold ">Quality Control & Assurance</p>
                                    <p className="text-sm  2xl:text-lg font-Roboto font-normal">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>
                                <div className=" flex-1 p-4 flex flex-col  justify-center gap-2 bg-[#ebeef3] text-[#04215d] " >
                                    <p className="lg:text-lg xl:text-2xl 2xl:text-3xl font-Montserrat font-semibold ">Research & Development (R&D)</p>
                                    <p className="text-sm  2xl:text-lg font-Roboto font-normal">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#ffffff] flex-1 py-4">
                    <div className=" lg:-translate-x-[14.5%] mt-[150%] sm:mt-[112%] md:mt-[85%] lg:mt-[50%]">
                        <div className="py-5 lg:p-0">
                            <p className="text-[48px] xl:text-[53px] 2xl:text-[70px] text-[#171151] font-Montserrat text-center lg:text-start font-bold ">Industry Solutions</p>
                        </div>
                        <div className="flex flex-col lg:flex-row items-[unset] lg:items-center gap-8 my-10">
                            <div className="self-center lg:self-[unset]">
                                <Image
                                    src={MicroScope}
                                    alt="microscope"
                                    width={250}
                                    height={250}
                                    className="2xl:w-[350px]"
                                />
                            </div>
                            <div className=" flex flex-col  lg:px-4  justify-center gap-6 flex-1 p-4 lg:p-0">
                                {
                                    Solutions && Solutions.map((item) => (
                                        <div className={`flex justify-between lg:grid lg:grid-cols-[60%_25%] lg:gap-x-8 items-center 
                                        ${item.id === 4 ? " " : "border-b-[0.1px] border-b-[#ebeef3]"}  py-1`} key={item.id}>
                                            <div className="flex items-center gap-6 ">
                                                <div className="bg-[#ceeff8] h-[60.5px] w-[60.5px] 2xl:w-[100.5px] 2xl:h-[100.5px] rounded-full  relative">
                                                    <Image
                                                        src={lab}
                                                        alt='lab'
                                                        width={35}
                                                        height={35}
                                                        className="absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 2xl:w-[60px] 2xl:h-[60px]"
                                                    />
                                                </div>
                                                <div className="text-[#171151]">
                                                    <p className="font-Roboto font-normal text-sm 2xl:text-lg">{item.number}</p>
                                                    <p className="font-Montserrat font-medium text-[18px] 2xl:text-2xl">{item.title}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <Image src={arrow} width={30} height={30} alt='lab' />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}