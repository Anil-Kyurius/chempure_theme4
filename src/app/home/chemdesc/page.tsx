import React from "react";
import lab_room from "@public/Assets/lab_room.webp";
import Image from "next/image";
function page() {
  return (
    <div className="mb-4">
      <div className="relative">
        <div className="relative bg-[#eff1f7] w-[30%]">
        
        </div>
        <div className="flex absolute top-[-50px] w-full px-32 h-full">
        <div className="relative w-1/2 ">
          <Image
            className="object-contain w-full"
            src={lab_room}
            alt="lab_room"
          />

          <div className="absolute top-0 w-[50%]">
            <div className="bg-[#18b5de] px-8 py-16">
              <p className="font-Montserrat font-semibold text-xl text-white">Formulation</p>
                <p className="font-Montserrat font-semibold text-xl text-white">Development</p>
              <p className="font-Roboto text-white text-sm pt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>
        </div>
        <div>
          hello
        </div>
        </div>
      </div>
    </div>
  );
}

export default page;
