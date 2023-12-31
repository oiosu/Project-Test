import React from "react";
import Banner from "./Banner";
import CategoryList from "./CategoryList";
import BestSale from "./BestSale";

import RankingBest from "./RankingBest";

import GiftItem from "./GiftItem";
import AdSection from "./AdSection";
import Use from "./Use";

const MainPage = () => {
  return (
    <>
      <Banner />
      <CategoryList />
      <BestSale />

      <RankingBest />

      <GiftItem />
      <AdSection />
      <Use />
    </>
  );
};

export default MainPage;
