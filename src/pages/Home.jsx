import React from "react";
import Banner from "../components/Banner";
import BannerDetails from "../components/BannerDetails";
import Add1 from "../components/Add1";
import NewArrivals from "../components/NewArrivals";
import Promotion from "../components/Promotion";
import SpecialOffers from "../components/SpecialOffers";

const Home = () => {
  return (
    <>
      <Banner />
      <BannerDetails />
      <Add1 />
      <NewArrivals />
      <Promotion/>
      <SpecialOffers/>
    </>
  );
};

export default Home;
