import React from "react";
import Title from "./layouts/Title";
import Flex from "./layouts/Flex";
import Container from "./layouts/Container";
import Slider from "react-slick";
import Product from "./layouts/Product";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import { HiArrowSmallRight, HiArrowSmallLeft } from "react-icons/hi2";

const NewArrivals = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={
          "py-[26px] px-[26px] bg-[rgb(194,194,194)] absolute z-10 rounded-full text-white text-2xl top-[35%] right-5 "
        }
        style={{ ...style }}
        onClick={onClick}
      >
        <HiArrowSmallRight />
      </div>
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={
          "py-[26px] px-[26px] bg-[#C2C2C2] absolute z-10 rounded-full text-white text-2xl top-[35%] left-5"
        }
        style={{ ...style }}
        onClick={onClick}
      >
        <HiArrowSmallLeft />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    arrows: false,
    responsive: [
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 737,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };
  return (
    <section className="pt-32 pb-[213px] px-2">
      <Container>
        <Title title={"New Arrivals"} className={"text-[#262626] font-dm text-[39px] font-bold mb-10"}/>
        <Slider {...settings}>
          <div>
            <Product
              className={"lg:mx-5 sm:mx-5"}
              showBadge={true}
              showCategory={false}
              productImg={product1}
              productName={"Basic Crew Neck Tee"}
              price={"$44.00"}
              badgeTitle={"10%"}
              color={"Black"}
            />
          </div>
          <div>
            <Product
              className={"lg:mx-5 sm:mx-5"}
              showBadge={true}
              showCategory={true}
              productImg={product2}
              productName={"Basic Crew Neck Tee"}
              price={"$44.00"}
              badgeTitle={"New"}
              color={"Black"}
            />
          </div>
          <div>
            <Product
              className={"lg:mx-5 sm:mx-5"}
              showBadge={true}
              showCategory={false}
              productImg={product3}
              productName={"Basic Crew Neck Tee"}
              price={"$44.00"}
              badgeTitle={"10%"}
              color={"Black"}
            />
          </div>
          <div>
            <Product
              className={"lg:mx-5 sm:mx-5"}
              showBadge={true}
              showCategory={true}
              productImg={product4}
              productName={"Basic Crew Neck Tee"}
              price={"$44.00"}
              badgeTitle={"New"}
              color={"Black"}
            />
          </div>
          <div>
            <Product
              className={"lg:mx-5 sm:mx-5"}
              showBadge={true}
              showCategory={false}
              productImg={product1}
              productName={"Basic Crew Neck Tee"}
              price={"$44.00"}
              badgeTitle={"10%"}
              color={"Black"}
            />
          </div>
          <div>
            <Product
              className={"lg:mx-5 sm:mx-5"}
              showBadge={true}
              showCategory={true}
              productImg={product2}
              productName={"Basic Crew Neck Tee"}
              price={"$44.00"}
              badgeTitle={"New"}
              color={"Black"}
            />
          </div>
        </Slider>

        <Flex
          className={
            "mt-[215px] mx-2 items-center justify-center sm:justify-between md:gap-10 flex-wrap gap-0 lg:flex-nowrap"
          }
        >
          <div className={"sm:max-w-[47%] mt-6"}>
            <Product
              showBadge={true}
              showCategory={true}
              productImg={product5}
              productName={"Basic Crew Neck Tee"}
              price={"$44.00"}
              badgeTitle={"New"}
              color={"Black"}
            />
          </div>
          <div className={"sm:max-w-[47%] mt-6"}>
            <Product
              showBadge={true}
              showCategory={true}
              productImg={product6}
              productName={"Basic Crew Neck Tee"}
              price={"$44.00"}
              badgeTitle={"New"}
              color={"Black"}
            />
          </div>
          <div className={"sm:max-w-[47%] mt-6"}>
            <Product
              showBadge={true}
              showCategory={true}
              productImg={product7}
              productName={"Basic Crew Neck Tee"}
              price={"$44.00"}
              badgeTitle={"New"}
              color={"Black"}
            />
          </div>
          <div className={"sm:max-w-[47%] mt-6"}>
            <Product
              showBadge={true}
              showCategory={true}
              productImg={product8}
              productName={"Basic Crew Neck Tee"}
              price={"$44.00"}
              badgeTitle={"New"}
              color={"Black"}
            />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default NewArrivals;
