import React from 'react';
import Banner from './Banner';
import CategoryList from './CategoryList';
import BestSale from './BestSale';
import Ranking from './Ranking';
import Use from './Use';
import AdSection from './AdSection';


const MainPage = () => {
    return (
        <>
            <Banner />
            <CategoryList />
            <BestSale />
            <Ranking />
            <AdSection />
            <Use />
        </>
    );
};

export default MainPage;