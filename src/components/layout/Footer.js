import Image from 'next/image'
import React from 'react'
import inputarrow from '@public/Assets/input-arrow.svg'
export default function Footer() {
  return (
    <div className='bg-[#eff1f7] '>
      <div>
        <div className='bg-[#142340]  relative -top-12 mx-[6%] lg:mx-[8%]  text-[#ffffff] h-max lg:h-auto 2xl:h-full'>
          <div className="flex flex-col lg:flex-row justify-center  lg:justify-evenly   2xl:h-full gap-4 lg:gap-2 py-10 lg:py-14 px-5 lg:px-2 ">
            <div className='lg:self-start self-center '>
              <Image
                src="/Assets/ChempureLogo.webp"
                alt="chempureLogo"
                width={130}
                height={130}
                className='2xl:w-[140px]'
              />
            </div>
            <div className="flex flex-col lg:justify-between  gap-4 font-Roboto font-normal text-[15px] xl:text-[16px] 2xl:text-[18px]">
              <p className='font-Roboto font-bold text-[17px] xl:text-[20px] 2xl:text-xl'>Quick Links</p>
              <p>Home</p>
              <p>About us</p>
              <p>Products</p>
              <p>Contact us</p>
            </div>
            <div className=" flex flex-col lg:justify-between   gap-6  font-Roboto font-normal text-[13px] xl:text-[14px] 2xl:text-[18px]">
              <p className='font-Roboto font-bold  text-[17px] xl:text-[20px] 2xl:text-xl'>Contact Us</p>
              <div className="flex  gap-3 items-start">
                <div>
                  <Image src="/Assets/Location.webp" alt="location" width={12} height={12} />
                </div>
                <div className="">
                  <p>#64, Shankarmutt Road , Shankarpuram,</p>
                  <p>Basavanagudi, Bengaluru, Karnataka</p>
                  <p>56004, India </p>
                </div>
              </div>
              <a href="mailto:test@test.com" className="flex items-center gap-3 ">
                <Image src="/Assets/Mail.webp" alt="Mail" width={15} height={15} />
                <p>Jhon.deo@gmail</p>
              </a>
              <a href="tel:0000000000" className="flex gap-3 items-center ">
                <Image src="/Assets/Call.webp" alt="Call" width={12} height={12} />
                <p>000 0000 000</p>
              </a>
            </div>
            <div className=' flex flex-col gap-4 '>
              <p className='font-Roboto font-normal text-[16px] xl:text-[17px] '>Newsletter</p>
              <div className='flex'>
                <div className='w-full'>
                  <input type="text"
                    className="p-2 w-full text-black placeholder-font-Roboto outline-none placeholder:font-normal placeholder-[#616161] placeholder:text-sm"
                    placeholder="Enter Your Email "
                  />
                </div>
                <div className="bg-[#1c50d3] px-2">
                  <Image
                    src={inputarrow}
                    width={36}
                    height={36}
                    alt="search arrow"
                    className="translate-y-[4px] cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className="flex gap-1 transform -translate-y-[16px] justify-center text-[#162e55] items-center font-Roboto font-normal 2xl:py-6 py-4  text-center flex-wrap lg:text-[15px] text-xs">
            <p>Crafted with precision by</p>
            <a
              href="https://kyurius.tech/"
              target="blank"
              className="flex items-center gap-1"
            >
              <Image
                loading="lazy"
                src="/Assets/ktslogo.svg"
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
