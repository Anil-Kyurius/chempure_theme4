import Link from "next/link";
import React from "react";

const LinkArray = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About us",
    url: "/aboutus",
  },

  {
    name: "Products",
    url: "products",
  },
  {
    name: "Contact us",
    url: "/contactus",
  },
];
export default function Links() {
  return (
    <ul className=" flex font-Roboto gap-2 justify-between lg:text-white font-medium  lg:flex-row flex-col">
      {LinkArray.map((item) => (
        <li key={item.name} className="lg:my-0 my-5 lg:mx-0 mx-2 ">
          <Link href={item.url} prefetch={false}>
          {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
