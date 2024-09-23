import dynamic from "next/dynamic";
import Banner from "./Banner";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ChemDetails = dynamic(() => import("./ChemDesc/page"));
// const ChemLogos = dynamic(() => import("./ChemLogos/page"));
// const ChemDetails = dynamic(() => import("./ChemDetails/page"));
// const Services = dynamic(() => import("./Services/page"));
// const Blog = dynamic(() => import("./Blog/page"));
// const Testimonials = dynamic(() => import("./Testimonials/page"));
// const News = dynamic(() => import("./News/page"));
export default function index() {
  return (
    <>
      <Banner />
       <ChemDetails/>
      {/* // <div>
      //   <ChemDetails />
      //   <AboutIndustrie />
      //   <Testimonials />
      //   <News /> */} 
     
    </>
  );
}
