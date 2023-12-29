import React from "react";
import Flex from "../layouts/Flex";
import { BsPlusLg } from "react-icons/bs";
import { HiMiniMinusSmall } from "react-icons/hi2";
import { useState } from "react";
const SideBarData = ({ title, showDataDrop, color,children }) => {
  const [showSubDataDrop, setShowSubDataDrop] = useState(true);
  return (
    <section>
      {showDataDrop ? (
        <div onClick={() => setShowSubDataDrop(!showSubDataDrop)}>
          <Flex className={"items-center justify-between"}>
            <h4 className="font-dm text-[20px] text-[#262626] font-bold">
              {title}
            </h4>
            {showSubDataDrop ? <BsPlusLg /> : <HiMiniMinusSmall />}
          </Flex>
        </div>
      ) : (
        <div>
          {color ? (
            <Flex className={"items-center"}>
              <span
                style={{ background: color }}
                className="mr-2 w-3 h-3 rounded-full"
              >
                {" "}
              </span>
              <h4 className="font-dm text-[20px] text-[#262626] font-bold">
                {title}
              </h4>
            </Flex>
          ) : (
            <h4 className="font-dm text-[20px] text-[#262626] font-bold">
              {title}
            </h4>
          )}
        </div>
      )}
      {showSubDataDrop && children}
    </section>
  );
};

export default SideBarData;
