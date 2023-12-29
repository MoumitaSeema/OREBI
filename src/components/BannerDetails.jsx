import React from "react";
import Container from "./layouts/Container";
import Flex from "./layouts/Flex";
import List from "./layouts/List";
import ListItem from "./layouts/ListItem";
import { PiNumberTwoBold } from "react-icons/pi";
import { MdLocalShipping } from "react-icons/md";
import { TbReload } from "react-icons/tb";
const BannerDetails = () => {
  return (
    <div
      className={
        "sm:py-7 py-3 px-2 border border-[#F0F0F0] bg-[#FFF] mt-[-6px] "
      }
    >
      <Container>
        <List>
          <Flex className={"justify-between items-center"}>
            <Flex className={" items-center gap-x-4 cursor-pointer"}>
              <PiNumberTwoBold
                className={"sm-text-2xl text-xs text-[#262626] hidden sm:flex"}
              />
              <ListItem
                listName={"Two years warranty"}
                linkClassName={
                  "text-[#6D6D6D] font-dm font-normal font-bold sm:text-base text-[12px]"
                }
              />
            </Flex>
            <Flex className={" items-center gap-x-4 cursor-pointer"}>
              <MdLocalShipping
                className={
                  "text-[#262626] sm:text-2xl text-xs font-bold hidden sm:flex "
                }
              />
              <ListItem
                listName={"Free shipping"}
                linkClassName={
                  "text-[#6D6D6D] font-dm sm:text-base text-[12px] font-normal font-bold"
                }
               
              />
            </Flex>
            <Flex className={" items-center gap-x-4 cursor-pointer"}>
              <TbReload className="text-[#262626] sm:text-xl text-xs font-bold hidden sm:flex" />
              <ListItem
                listName={"Return policy in 30 days"}
                linkClassName={
                  "text-[#6D6D6D] sm:text-base text-[12px] font-dm font-bold font-normal"
                }
              />
            </Flex>
          </Flex>
        </List>
      </Container>
    </div>
  );
};

export default BannerDetails;
