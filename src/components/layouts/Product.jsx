import React from "react";
import Img from "./Img";
import Flex from "./Flex";
import { BsHeartbreakFill } from "react-icons/bs";
import { IoIosGitCompare } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
const Product = ({
  className,
  showBadge,
  showCategory,
  badgeTitle,
  productImg,
  productName,
  price,
  color,
  link
}) => {
  return (
    <Link to={`/products/${link}`} className={`${className} font-dm relative group overflow-hidden block`}>
      {showBadge && (
        <div className="bg-black absolute top-5 left-6 py-2 px-8 text-white text-sm font-bold z-10">
          {badgeTitle}
        </div>
      )}
      <div className="relative">
        <Img src={productImg} imgClassName={"w-[370px] h-[370px]"} />
        <div className="w-full   bg-white  p-[30px] absolute  left-0 bottom-[0px] scale-0  group-hover:scale-100 transition-all ">
          <Flex className={"items center justify-end gap-x-4 mb-5"}>
            <h3 className="text-base text-[#767676] hover:font-bold hover:text-black transition-all">
              Add to Wish List
            </h3>
            <BsHeartbreakFill />
          </Flex>
          <Flex className={"items center justify-end gap-x-4 mb-5"}>
            <h3 className="text-base text-[#767676] hover:font-bold hover:text-black transition-all">
              Compare
            </h3>
            <IoIosGitCompare />
          </Flex>
          <Flex className={"items center justify-end gap-x-4"}>
            <h3 className="text-base text-[#767676] hover:font-bold hover:text-black transition-all">
              Add to Cart
            </h3>
            <FaShoppingCart />
          </Flex>
        </div>
      </div>
      <Flex className={"justify-between items-center mt-[18px]"}>
        <h3 className="text-xl font-bold text-[#262626]">{productName}</h3>
        <h6 className="text-base text-[#767676]">{price}</h6>
      </Flex>
      {showCategory && (
        <h5 className="font-dm text-base font-normal text-[#767676]">
          {color}
        </h5>
      )}
    </Link> 
  );
};

export default Product;
