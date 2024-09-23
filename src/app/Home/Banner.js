import React from "react";

function Banner() {
  return (
    <div
      className="relative h-[100vh] "
    >
      <div className="bg-[url('/Assets/Women_chemical_substance.webp')]  absolute inset-0 bg-no-repeat bg-cover"></div>
      {/* <div className="bg-blue"></div> */}
      <div className="opacity-[0.79] absolute top-0 left-0 w-1/2 bg-[#103cac] h-full">
      <div className="w-full">
      <div className="w-[60%] absolute top-1/2 left-1/2 text-white transform -translate-x-1/2 -translate-y-1/2">
       <p className="font-medium text-4xl font-Montserrat">
       Driving Innovation in 
         </p>
         <p className="font-bold text-3xl font-Montserrat">Chemical Solutions</p>
         <p className="font-Roboto text-lg pt-4">Explore our wide range of high-quality chemicals and laboratory equipment</p>
         </div>
         </div>
      </div>
      
    </div>
  );
}

export default Banner;
