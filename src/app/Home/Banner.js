import Bannerimg from '@public/Banner/Banner.webp';
import CustomercareIcon from '@public/Assets/CustomercareIcon.webp'
import Image from 'next/image'
export default function Banner() {
    return (
        <div>
            <div className='relative'>
                <Image
                    src={Bannerimg}
                    className='h-dvh  w-full'
                />
                <div className='absolute top-0 left-0 right-0 lg:right-1/2  bg-[#103cac] bottom-0 opacity-[0.84]'>
                    <div className='w-[70%] absolute left-1/2 top-1/2 -translate-x-[55%] -translate-y-[70%] text-[#ffffff] flex flex-col gap-4'>
                        <div className='leading-[1.5] '>
                            <p className='text-[clamp(2.5rem,3vw,4.5rem)] font-Montserrat font-medium'>Driving Innovation in</p>
                            <p className='text-[clamp(1.5rem,2.5vw,3.5rem)]  2xl:text-4xl font-Montserrat font-bold'>Chemical Solutions</p>
                        </div>
                        <div className='leading-[1.5] font-Roboto font-normal text-[18px]'>
                            <p>Explore our wide range of high-quality chemicals and </p>
                            <p>laboratory equipment</p>
                        </div>
                    </div>
                </div>
            </div>
            <Image
                className="fixed bottom-4 right-10 w-16 z-50"
                src={CustomercareIcon}
                alt="ChatIcon"
            />
        </div>

    )
}