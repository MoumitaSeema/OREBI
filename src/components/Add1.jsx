import React from "react";
import Container from "./layouts/Container";
import Flex from "./layouts/Flex";
import Img from "./layouts/Img";
import add1 from "../assets/add1.png";
import add2 from "../assets/add2.png";
import add3 from "../assets/add3.png";
const Add1 = () => {
  return (
    <section className={"xl:mt-[174px] mt-10 "}>
      <Container>
        <Flex className={"justify-center items-center gap-x-10"}>
          <div>
            <a href="/">
              <Img src={add1} className={"w-full"} />
            </a>
          </div>
          <Flex
            className={
              "flex-col gap-y-2 sm:gap-y-[16px] md:gap-y-4 lg:gap-y-5 xl:gap-y-10 "
            }
          >
            <div>
              <a href="/">
                <Img src={add2} className={"w-full"} />
              </a>
            </div>
            <div>
              <a href="/">
                <Img src={add3} className={"w-full"} />
              </a>
            </div>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Add1;
