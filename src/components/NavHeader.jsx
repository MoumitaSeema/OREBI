import React, { useEffect, useRef, useState } from "react";
import Container from "./layouts/Container";
import Flex from "./layouts/Flex";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { BiSolidUser } from "react-icons/bi";
import { GoTriangleDown } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import DropDown from "./layouts/DropDown";
import List from "./layouts/List";
import ListItem from "./layouts/ListItem";
import cart from "../assets/cart.png";
import Img from "./layouts/Img";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const NavHeader = () => {
  const cartDataCount = useSelector((state)=>state.cart.cartData.length)
  const [showCategory, setShowCategory] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const category = useRef();
  const cartRef = useRef();
  const user = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (category.current.contains(e.target)) {
        setShowCategory(!showCategory);
      } else {
        setShowCategory(false);
      }
      if (cartRef.current.contains(e.target)) {
        setShowCart(!showCart);
      } else {
        setShowCart(false);
      }

      if (user.current.contains(e.target)) {
        setShowUser(!showUser);
      } else {
        setShowUser(false);
      }
    });
  }, [showCategory, showCart, showUser]);
  return (
    <section className="bg-[#F5F5F3] py-6 px-2">
      <Container>
        <Flex className={"justify-between items-center"}>
          <DropDown
            className={
              "items-center gap-x-3 cs:w-[11%] cursor-pointer relative z-10"
            }
            ref2={category}
          >
            <Flex>
              <HiBars3BottomLeft className="text-[#262626] text-[2xl]" />
              <h6 className="hidden md:block">Shop by Category</h6>
              {showCategory && (
                <List
                  className={
                    "w-[263px] bg-[#262626] absolute text-categoryLink top-10 left-0"
                  }
                >
                  <ListItem
                    listName={"Accesories"}
                    linkClassName={
                      "py-4 block px-5 hover:text-white hover:px-[30px] transition-all"
                    }
                    className={"border-b border-[#2D2D2D]"}
                  />
                  <ListItem
                    listName={"Furniture"}
                    linkClassName={
                      "py-4 block px-5 hover:text-white hover:px-[30px] transition-all"
                    }
                    className={"border-b border-[#2D2D2D]"}
                  />
                  <ListItem
                    listName={"Electronics"}
                    linkClassName={
                      "py-4 block px-5 hover:text-white hover:px-[30px] transition-all"
                    }
                    className={"border-b border-[#2D2D2D]"}
                  />
                  <ListItem
                    listName={"Clothes"}
                    linkClassName={
                      "py-4 block px-5 hover:text-white hover:px-[30px] transition-all"
                    }
                    className={"border-b border-[#2D2D2D]"}
                  />
                  <ListItem
                    listName={"Bags"}
                    linkClassName={
                      "py-4 block px-5 hover:text-white hover:px-[30px] transition-all"
                    }
                    className={"border-b border-[#2D2D2D]"}
                  />
                  <ListItem
                    listName={"Home appliances"}
                    linkClassName={
                      "py-4 block px-5 hover:text-white hover:px-[30px] transition-all"
                    }
                    className={"border-b border-[#2D2D2D]"}
                  />
                </List>
              )}
            </Flex>
          </DropDown>
          <div className="cs:w-[38%] font-dm text-sm">
            <input
              type="text"
              name=""
              className="sm:w-[500px] cs:w-[600px] md:w-[400px] outline-transparent py-4 px-5 placeholder:text-[#C4C4C4] placeholder:text-sm"
              placeholder="Search Products"
              id="search"
            />
            <label
              htmlFor="search"
              className="inline-block sm:ml-[-50px] ml-[-40px] sm:text-2xl text-xl cursor-pointer"
            >
              <FaSearch />
            </label>
          </div>
          <Flex className={"cs:w-[5%] text-xl justify-between items-center"}>
            <DropDown className={"relative z-10"} ref2={user}>
              <Flex className={"items-center cursor-pointer"}>
                <BiSolidUser />
                <GoTriangleDown />
                {showUser && (
                  <List
                    className={
                      "w-[200px] absolute text-categoryLink top-10 right-0 capitalize text-center"
                    }
                  >
                    <ListItem
                      listName={"My Account"}
                      linkClassName={"py-4 block text-white"}
                      className={"bg-[#262626] "}
                    />
                    <ListItem
                      listName={"Log Out"}
                      linkClassName={"py-4 block text-black"}
                      className={"border border-[#F0F0F0] bg-white"}
                    />
                  </List>
                )}
              </Flex>
            </DropDown>
            <DropDown className={"relative z-10"} ref2={cartRef}>
              <FaShoppingCart className="cursor-pointer" />
             <p>{cartDataCount}</p>
              {showCart && (
                <div className="absolute w-[358px] top-10 right-0 bg-[#F5F5F3]">
                  <Flex className={"items-center justify-between p-5"}>
                    <Img
                      src={cart}
                      imgClassName={"w-full"}
                      className={"w-20 h-20"}
                    />
                    <div className="font-dm text-sm text-[#262626] font-bold w-[50%]">
                      <h5>Black Smart Watch</h5>
                      <h6>$44.00</h6>
                    </div>
                    <ImCross className="text-sm" />
                  </Flex>
                  <div className="p-5 bg-white font-dm ">
                    <h4 className="text-base font-normal">
                      Subtotal: <span className="font-bold">$44.00</span>
                    </h4>
                    <div className="text-sm font-bold mt-5 capitalize">
                      <Link to="/cart" className="py-4 px-10 border border-[#2B2B2B]">
                        View Cart
                      </Link>
                      <a
                        href=""
                        className="py-4 px-10 border bg-black border-black text-white ml-5"
                      >
                        Checkout
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </DropDown>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default NavHeader;
