import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import Links from "./Links";
import MobileDrawer from "./MobileDrawer";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="w-full h-full py-1">
        <header className="bg-white flex w-full h-full">
          {/* Logo */}

          <div className="relative w-full ">
            <div className="h-full flex justify-between items-center xl:w-[90%] lg:w-[90%] mx-auto gap-2 lg:pl-4 px-3 lg:flex-nowrap flex-wrap">
              <div className="h-full rounded   py-3">
              <Link href="/">
                <Image
                  src="/ChempureLogo.webp"
                  alt="chempure logo"
                  className="w-52"
                  width={200}
                  height={100}
                  priority={true}
                />
              </Link>
              </div>
              {/* desktop */}


          <div className="rounded px-12 py-3 h-full w-full flex items-center justify-between">
              <div className="w-[40%] ml-[5%] lg:block hidden ">
                <Links />
              </div>

              <div className="lg:w-[50%] w-full">
                <Suspense>
                  <SearchBar />
                </Suspense>
              </div>
              <Image
                src="/menu.svg"
                alt="menu"
                width={35}
                height={35}
                className="lg:hidden block object-contain absolute right-6 top-[10px]"
                onClick={toggleDrawer}
              />
          </div>
           

              {/* mobile menu */}
             
              <MobileDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
            </div>
          </div>
        </header>
      </div>
    </>
  );
};
export default Header;
