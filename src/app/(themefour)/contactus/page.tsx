import Image from "next/image";
import Contactbanner from '@public/ThemeFour/Contactus/ContactBanner.webp';
import phone from '@public/ThemeFour/Contactus/phone.svg';
import mail from '@public/ThemeFour/Contactus/mail.svg';
import location from '@public/ThemeFour/Contactus/location.svg';
let ContactData = [
    {
        icon: phone,
        title: 'Phone Number',
        details: '000 0000 000',
        link: 'tel:0000000000'
    },
    {
        icon: mail,
        title: 'Mail us',
        details: 'Companyname@gmail.com',
        link: 'mailto:Companyname@gmail.com'
    },
    {
        icon: location,
        title: 'Location',
        details: `2131 Las Palmas Dr, Carlsbad, California,
        92011, (619) 446-6568, United States`,
        link: null
    }
]
export default function Contactus() {

    return (
        <div className="relative ">
            <Image
                src={Contactbanner}
                alt="Contactbanner"
                className="h-dvh lg:h-full w-full"
            />
            <div className=" absolute left-1/2 top-[30%] lg:top-[20%] -translate-x-1/2 -translate-y-1/2  p-4 w-full text-center text-[#ffffff]">
                <p className="text-[clamp(3.5rem,4vw,5rem)] 
                     font-bold font-Montserrat">Contact us</p>
            </div>
            <div className=" lg:absolute lg:left-1/2  lg:top-[60%] lg:-translate-x-1/2  lg:-translate-y-1/2 w-full py-20 ">
                <div className=" flex flex-col lg:flex-row gap-8 mx-[5%] lg:mx-[10%]">
                    <div className="flex-1 flex flex-col justify-center  gap-14  lg:text-[#ffffff] ">
                        {
                            ContactData && ContactData.map((item, index) => (
                                <div className="flex items-center gap-6" key={index}>
                                    <div>
                                        <Image
                                            alt="Contacticon"
                                            src={item.icon}
                                            width={35}
                                            height={44}
                                        />
                                    </div>
                                    <div className="font-Montserrat font-medium">
                                        <p className="text-base 2xl:text-lg">{item.title}</p>
                                        <p className="text-sm 2xl:text-base">{item.details}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex-1 bg-[#ffffff] lg:p-6 rounded-[11px]">
                        <form>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="flex-1 p-4 bg-[#f6f6f6] rounded-md outline-none placeholder:text-base
                                     placeholder-[#66686b] placeholder:font-Montserrat placeholder:font-medium"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="flex-1 p-4 bg-[#f6f6f6]  rounded-md outline-none placeholder:text-base
                                     placeholder-[#66686b] placeholder:font-Montserrat placeholder:font-medium"
                                    />
                                </div>
                                <div className="flex flex-col lg:flex-row  gap-4 lg:gap-8 ">
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        className="flex-1 p-4 bg-[#f6f6f6]  rounded-md outline-none placeholder:text-base
                                     placeholder-[#66686b] placeholder:font-Montserrat placeholder:font-medium"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Your Email"
                                        className="flex-1 p-4 bg-[#f6f6f6]  rounded-md outline-none placeholder:text-base
                                     placeholder-[#66686b] placeholder:font-Montserrat placeholder:font-medium"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        rows={5}
                                        name="message"
                                        placeholder="Message"
                                        className="w-full p-4 bg-bg-[#f6f6f6]rounded-md placeholder-[#66686b] placeholder:text-base bg-[#f6f6f6]
                                    placeholder:font-Montserrat placeholder:font-medium outline-none resize-none">
                                    </textarea>
                                </div>
                                <button className="bg-[#0d80ce] text-[#ffffff] font-Montserrat font-medium text-sm xl:text-base py-[8.5px] px-[55px]">
                                    SEND
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}