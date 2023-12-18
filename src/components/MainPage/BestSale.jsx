import React from 'react';
import styled from 'styled-components';

const BestSale = () => {
    return (
        <SaleSection>
            <header>
                <h1>오늘의 베스트 상품</h1>
                <span>더보기</span>
            </header>
            <div className='bigsale-item'>
                <ul>
                    {/* 01 */}
                    <li className='item-img'>
                        <img src='https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168731059927618146.jpg?gif=1&w=360&h=360&c=c&q=0.8&webp=1' alt='01' />
                        <div className='product-img-text'>
                            <spans className='item-title'>후기6만돌파! 40수 코마사 호텔수건 200g 10장</spans>
                            <span className='item-rate'>63%</span>
                            <span className='item-price'>28,900</span>
                        </div>
                    </li>

                    {/* 02 */}
                    <li className='item-img'>
                        <img src='https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168731059927618146.jpg?gif=1&w=360&h=360&c=c&q=0.8&webp=1' alt='01' />
                        <div className='product-img-text'>
                            <spans className='item-title'>후기6만돌파! 40수 코마사 호텔수건 200g 10장</spans>
                            <span className='item-rate'>63%</span>
                            <span className='item-price'>28,900</span>
                        </div>
                    </li>

                    {/* 03 */}
                    <li className='item-img'>
                        <img src='https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168731059927618146.jpg?gif=1&w=360&h=360&c=c&q=0.8&webp=1' alt='01' />
                        <div className='product-img-text'>
                            <spans className='item-title'>후기6만돌파! 40수 코마사 호텔수건 200g 10장</spans>
                            <span className='item-rate'>63%</span>
                            <span className='item-price'>28,900</span>
                        </div>
                    </li>

                    {/* 04 */}
                    <li className='item-img'>
                        <img src='https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168731059927618146.jpg?gif=1&w=360&h=360&c=c&q=0.8&webp=1' alt='01' />
                        <div className='product-img-text'>
                            <spans className='item-title'>후기6만돌파! 40수 코마사 호텔수건 200g 10장</spans>
                            <p className='item-rate'>63%</p>
                            <span className='item-price'>28,900</span>
                        </div>
                    </li>
                </ul>
            </div>

        </SaleSection>
    );
};

export default BestSale;

const SaleSection = styled.div`

header{
    display: flex;
    justify-content: center;
    margin-top: 70px;
}
h1 {
    margin-right: 1400px;
}
span {
    margin-top: 30px;
    font-size: 16px;
}
.item-img {
    margin-right: 40px;
    margin-left: 50px;
}

.bigsale-item {
    float: left;
}

ul {
    list-style:none;
}

li {
    font-size: 18px;
    float: left;
}

.bigsale-item {
    margin-top: 20px;

}

img {
    border-radius: 20px;
}

.product-img-text {
    display: flex;
    justify-content: center;
}
.item-title {
    margin-top: 5px;
    font-size: 13px;
    font-weight: 400;
    line-height: 17px;
    max-height: 29px;
}
.item-rate {
    color: #6EB636;
    font-size: 17px;
    margin-right: 10px;
    margin-left: 0px;
}
.item-price {
    font-weight: bold;
}

`;