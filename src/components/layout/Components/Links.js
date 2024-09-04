import React from "react";

const LinkArray = [
  {
    name: "Home",
    url: "",
  },
  {
    name: "About us",
    url: "About us",
  },

  {
    name: "Products",
    url: "Products",
  },
  {
    name: "Contact us",
    url: "Contact us",
  },
];
export default function Links() {
  return (
    <ul className=" flex font-Roboto gap-2 justify-between lg:text-white font-medium  lg:flex-row flex-col">
      {LinkArray.map((item) => (
        <li key={item.name} className="lg:my-0 my-5 lg:mx-0 mx-2 ">
          {item.name}
        </li>
      ))}
    </ul>
  );
}
