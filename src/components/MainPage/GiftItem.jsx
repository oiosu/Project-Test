import React from 'react';
import styled from 'styled-components';


const GiftItem = () => {
    return (
        <>
            <GiftComponent>
                <div className='gift-title'>
                    <p className='title-1'> 감사를 전하는 연말 선물 </p>
                    <p className='title-2'> 2023 & 2024 연말, 새해 선물 추천 </p>
                </div>

                <div className='about-img'>
                    <img src='https://open.lge.co.kr/link/2023/usp/01_TV/05_LIFESTYLE/27ART10CKPL/27ART10CKPL_08.gif' alt='gift' />
                    <div className='img-content'>
                        <div className='img-content-title'>
                            <p>내일의 집의 제품추천</p>
                        </div>
                        <div className='img-content-text'>
                            <p>내일의 집 제품 추천에 대한 설명설명설명설명설명</p>
                        </div>
                    </div>
                </div>
                <div className='about-user'>
                    <div className='user-1'>
                        <div className='user-center'>
                            <div className='user-face'></div>
                        </div>
                    </div>
                    <div className='user-1'>
                        <div className='user-center'>
                            <div className='user-face'></div>
                        </div>
                    </div>
                </div>




            </GiftComponent>
        </>
    );
};

export default GiftItem;

const GiftComponent = styled.div`

.gift-title{
    float: left;
    margin-left: 130px;
}

.title-1 {
    font-size: 30px;
    font-weight: bold;
}

.title-2 {
    font-size: 16px;
    font-weight: bold;
}

img {
    position: relative;
    margin-top: 150px;
    margin-left: -330px;
    width: 700px;
    height: 500px;
    border-radius: 10px;
    z-index: -1;
}

.img-content {
    background-color: #D9D9D9;
    width: 704.4px;
    height: 150px;
    margin-top: -30px;
    margin-left: 122px;
    border-radius: 10px;   
}

p {
    font-size: 20px;
}

.img-content-title{
    font-size: 20px;
    font-weight: bold;
    padding-top: 10px;
    margin-left: 40px;
}

.img-content-text {
    margin-left: 40px;
}

.about-user {
    float: right;
    margin-top: -620px;
    margin-right: 65px;
    border-radius: 10px; 
}

.user-1 {
    position: relative;
    background-color: #D9D9D9;
    width: 600px;
    height: 300px;
    border-radius: 10px;
    margin-bottom: 20px;
    z-index: -1;
}

.user-center {
    display: flex;
    jus
}

.user-face {
    background-color: black;
    width: 200px;
    height: 30px;
}
`;