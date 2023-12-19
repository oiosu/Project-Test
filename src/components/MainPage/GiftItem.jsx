import React from 'react';
import styled from 'styled-components';


const GiftItem = () => {
    return (
        <>
            <GiftComponent>
                <div className='section'>
                    <div className='section-inner'>
                        <div className='section-header'>
                            <div className='section-title'>감사를 전하는 연말 선물</div>
                            <p className='section-description'>12월 선물 가전 추천</p>
                        </div>
                    </div>
                    <div className='section-cont'>
                        <div className='main-type'>
                            <div className='main-item'>
                                <div className='item-img'>
                                    <span>
                                        <img src='https://open.lge.co.kr/link/2023/usp/01_TV/05_LIFESTYLE/27ART10CKPL/27ART10CKPL_08.gif' alt='gift' />
                                    </span>
                                </div>
                                <div className='item-info'>
                                    <div className='item-name'>
                                        <span className='main-title'>LG VBFLZPDJ DHQMWPZJFFPRTUS GKDLEMFH XKDNJ</span>
                                    </div>
                                    <div className='item-contt'>
                                        CKDHSODLS2K93L
                                    </div>
                                    <div className='item-price'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </GiftComponent>
        </>
    );
};

export default GiftItem;

const GiftComponent = styled.div`

.section {
    positon: relative;
    width: 100% !important;
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
}
.section-inner {
    padding: 80px; 48px;
    flex-direction: column;
    box-sizing: border-box;
}
.section-header {
    margin-bottom: 32px;
    float: left;
}
.section-title {
    font-size: 28px;
    line-height: 36px;
    font-weight: 700;
    margin-left: 60px;
}
.section-description {
    margin-top: 8px;
    font-size: 20px;
    line-height: 24px;
    padding-right: 60px;
}

.section-cont {
    margin: 0;
    padding: 0;
    word-break: break-all;
}
.main-type {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 552px;
}
.main-item {
    margin-left: 0;
}
.item-img {
    position: relative;
}
span{
    width: 100%;
    height: 358px;
}
img {
    margin-top: 50px;
    position: relative;
    width: auto;
    border-radius: 10px;
    transform: translateX(-80%);
}

.item-info {
    float: left;
    margin-left: 0;
    padding: 29px 32px 32px;
}
.item-name {
    margin-left: -220px;
    font-size: 20px;
    line-height: 28px;
}
`;