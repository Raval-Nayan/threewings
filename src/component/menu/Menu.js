import React from "react";
import "./menu.css";
import { LuSun } from "react-icons/lu";
import Menuicon from "./Menuicon";
import { FaHome } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";
import { MdOutlineFavorite } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";
import { FaPowerOff } from "react-icons/fa6";


const Menu = () => {
  return (
    <div className="menu_box h-100">
    
    <Menuicon Link={"home"}   Icon={LuSun} title={"Good Evening"}/>
    <Menuicon Link={"home"} Icon={FaHome } title={"Home"}/>
    <Menuicon Link={"course"}  Icon={ FiGrid} title={"Course"}/>
    <Menuicon  Link={"favourite"}  Icon={MdOutlineFavorite } title={"Favourite"}/>
    <Menuicon Link={"profile"}  Icon={RxAvatar } title={"Profile"}/>
    <Menuicon Link={"calender"}  Icon={SlCalender} title={"calender"}/>
    <Menuicon Link={"logoff"}  Icon={FaPowerOff} title={"Log off"}/>
     
    </div>
  );
};

export default Menu;
