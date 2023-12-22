import React from 'react';
import styled from 'styled-components';


const GiftItem = () => {
    return (
        <>
            <GiftComponent>
                <div className='gift-title'>
                    <p> 감사를 전하는 연말 선물 </p>
                    <p> 2023 & 2024 연말, 새해 선물 추천 </p>
                </div>
                <img src='https://open.lge.co.kr/link/2023/usp/01_TV/05_LIFESTYLE/27ART10CKPL/27ART10CKPL_08.gif' alt='gift' />



            </GiftComponent>
        </>
    );
};

export default GiftItem;

const GiftComponent = styled.div`


`;