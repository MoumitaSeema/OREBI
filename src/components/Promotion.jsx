import React from "react";
import Container from "./layouts/Container";
import Img from "./layouts/Img";
import promotion from "../assets/promotion.png";
const Promotion = () => {
  return (
    <section>
      <Container>
        <div className="className='sm:my-[80px] lg:my-[130px] my-16  ">
          <Img src={promotion} />
        </div>
      </Container>
    </section>
  );
};

export default Promotion;
