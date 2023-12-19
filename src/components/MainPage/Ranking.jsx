import React from 'react';
import styled from 'styled-components';

const Ranking = () => {
  return (
    <>
      <BestRanking>
        <div className='item-background'>
          <h1 className='best-title'>베스트 랭킹</h1>
          <h3 className='best-content'>내일의 집 제품 추천</h3>
          <div className='ranking-img'>
            <ul className='best01-item'>
              <li className='item00'>
                <img src='https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166780549677949077.jpg?w=360&h=360&c=c&q=50' alt='01' />
              </li>
              <li className='item00'>
                <img src='https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/170213525868761761.jpg?w=360&h=360&c=c&q=50' alt='02' />
              </li>
              <li className='item00'>
                <img src='https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168774136219290693.jpg?w=360&h=360&c=c&q=50' alt='03' />
              </li>
            </ul>
          </div>

        </div>
      </BestRanking>
    </>

  );
};

export default Ranking;

const BestRanking = styled.div`

.item-background {
    margin-top: 80px;
    background-color: #F1F1F1;
    width: 100%;
    height: 800px;
    margin-bottom: 80px;
  }

  .best-title {
    float: left;
    font-size: 40px;
    font-weight: bold;
    margin-left: 140px;
    margin-top: 50px;
  }

  .best-content {
    float: left;
    margin-top: 120px;
    margin-left: -205px;
  }

  .ranking-img {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }

  ul {
    list-style: none;
  }

  li {
    float: left;
    position: relative;
  }

  img {
    border-radius: 10px;
    width: 440px;
    margin-top: 180px;
    margin-right: 200px;
    margin-left: -140px;
  }



`;