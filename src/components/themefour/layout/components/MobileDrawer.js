import React from "react";
// import component 👇
import Drawer from "react-modern-drawer";
//import styles 👇
import "react-modern-drawer/dist/index.css";
import Links from "./Links";
export default function MobileDrawer({isOpen,toggleDrawer}) {


  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className=" bg-primart_clr"
      >
        <div className=""><Links/></div>
      </Drawer>
    </>
  );
}
