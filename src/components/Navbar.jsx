import React, { useEffect, useState } from "react";
import Container from "./layouts/Container";
import Img from "./layouts/Img";
import Flex from "./layouts/Flex";
import Logo from "../assets/logo.png";
import List from "./layouts/List";
import ListItem from "./layouts/ListItem";
import { FaBars } from "react-icons/fa6";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuShow = () => {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 640) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    window.addEventListener("resize", resize);
    resize();
  }, []);
  return (
    <nav className={"py-8 px-2"}>
      <Container>
        <Flex className={"items-center"}>
          <Img src={Logo} className={"sm:w-1/12 w-full"} />
          <div className="w-11/12 ">
            <FaBars
              className="sm:hidden ml-auto cursor-pointer"
              onClick={handleMenuShow}
            />
            {showMenu && (
              <List className="sm:flex font-dm font-normal text-sm gap-x-10 capitalize justify-center  sm:text-navColor w-full left-0 sm:bg-transparent sm:relative bg-[#262626] absolute  text-categoryLink sm:left-0 top-16 sm:top-0 z-10">
                <ListItem
                  listName={"Home"}
                  linkClassName={
                    "py-4 block px-5 hover:text-white hover:px-[30px] transition-all sm:p-0 sm:hover:p-0 sm:hover:text-navColor"
                  }
                  link={"/"}
                />
                <ListItem
                  listName={"Shop"}
                  linkClassName={
                    "py-4 block px-5 hover:text-white hover:px-[30px] transition-all sm:p-0 sm:hover:p-0 sm:hover:text-navColor"
                  }
                  link={"/shop"}
                />
                <ListItem
                  listName={"About"}
                  linkClassName={
                    "py-4 block px-5 hover:text-white hover:px-[30px] transition-all sm:p-0 sm:hover:p-0 sm:hover:text-navColor"
                  }
                  link={"/about"}
                />
                <ListItem
                  listName={"Contacts"}
                  linkClassName={
                    "py-4 block px-5 hover:text-white hover:px-[30px] transition-all sm:p-0 sm:hover:p-0 sm:hover:text-navColor"
                  }
                  link={"/contacts"}
                />
                <ListItem
                  listName={"Journal"}
                  linkClassName={
                    "py-4 block px-5 hover:text-white hover:px-[30px] transition-all sm:p-0 sm:hover:p-0 sm:hover:text-navColor"
                  }
                  link={"/journal"}
                />
              </List>
            )}
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
