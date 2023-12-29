import React, { useState } from "react";
import Flex from "../layouts/Flex";
import { RxTriangleUp, RxTriangleDown } from "react-icons/rx";
import SideBarData from "./SideBarData";
const SideBarHeading = ({ title, showDrop, data }) => {
  const [showSubDrop, setShowSubDrop] = useState(true);
  return (
    <>
      {showDrop ? (
        <div onClick={() => setShowSubDrop(!showSubDrop)}>
          <Flex className={"items-center justify-between"}>
            <h4 className="font-dm text-[20px] text-[#262626] font-bold">
              {title}
            </h4>
            {showSubDrop ? <RxTriangleUp /> : <RxTriangleDown />}
          </Flex>
          {showSubDrop &&
            data.map((value) => (
              <SideBarData
                title={value.name}
                showDataDrop={false}
                color={
                  value.hasOwnProperty("colorCode") ? value.colorCode : false
                }
              />
            ))}
        </div>
      ) : (
        <div className={"items-center justify-between"}>
          <h4 className="font-dm text-[20px] text-[#262626] font-bold">
            {title}
          </h4>
          {data.map((value) => (
            <SideBarData
              title={value.name}
              showDataDrop={value.hasOwnProperty("subCategory") ? true : false}
            >
              {value.hasOwnProperty("subCategory") &&
                value.subCategory.map((item) => <h4>{item.name}</h4>)}
            </SideBarData>
          ))}
        </div>
      )}
    </>
  );
};

export default SideBarHeading;
