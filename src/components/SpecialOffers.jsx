import React from 'react'
import Title from "./layouts/Title";
import Flex from "./layouts/Flex";
import Product from "./layouts/Product";
import Container from "./layouts/Container";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";
import product11 from "../assets/product11.png";
import product12 from "../assets/product12.png";

const SpecialOffers = () => {
  return (
 <section className='mt-[128px] mx-2'>
    <Container>
        <Title title={"Special Offers"} className={"text-[#262626] font-dm text-[39px] font-bold mb-10"}/>
        <Flex
          className={
            " items-center justify-center sm:justify-between md:gap-10 flex-wrap gap-0 lg:flex-nowrap"
          }
        >
          <div className={"sm:max-w-[47%] mt-6"}>
            <Product
              showBadge={true}
              showCategory={true}
              productImg={product9}
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
              productImg={product10}
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
              productImg={product11}
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
              productImg={product12}
              productName={"Basic Crew Neck Tee"}
              price={"$44.00"}
              badgeTitle={"New"}
              color={"Black"}
            />
          </div>
        </Flex>
    </Container>
 </section>
  )
}

export default SpecialOffers