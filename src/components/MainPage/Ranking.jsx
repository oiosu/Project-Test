import React from 'react';
import styled from 'styled-components';

const Ranking = () => {
  return (
    <>
      <BestRanking>
        <div className='item-background'>
          <div>
            <h1 className='best-title'>베스트 랭킹</h1>
            <h3 className='best-content'>내일의 집 제품 추천</h3>
          </div>
          <div className='ranking-img'>
            <div className='ranking-one'>
              <p>1</p>
              <img src='https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166780549677949077.jpg?w=360&h=360&c=c&q=50' alt='01' />
            </div>
            <div className='ranking-one'>
              <p>2</p>
              <img src='https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166780549677949077.jpg?w=360&h=360&c=c&q=50' alt='01' />
            </div>
            <div className='ranking-one'>
              <p>3</p>
              <img src='https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166780549677949077.jpg?w=360&h=360&c=c&q=50' alt='01' />
            </div>
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
    background-color: #A9EF72;
    width: 100%;
    height: 530px;
    margin-bottom: 80px;
  }

  .best-title {
    font-size: 35px;
    font-weight: bold;
    margin-left: 120px;
    padding-top: 30px;
  }

  .best-content {
    margin-top: 0px;
    margin-left: 120px;
  }

  .ranking-img {
    display: flex;
    flex-flow: row wrap; 
    justify-content: center; 
    padding-right: 0px; 
  }

  .ranking-one {
    width: 300px;
    height: 300px;
    margin: 20px; 
  }

  img {
    border-radius: 10px;
    width: 100%; 
  }

  p {
    position: absolute;
    margin-left: 10px;
    background-color: #fff;
    width: 40px;
    height: 30px;
    text-align: center;
    padding-top: 3px;

    border-radius: 50px;
    font-weight: bold;
  }

  /* 모바일 반응형 */
  @media (max-width: 768px) {

    .item-background {
      height: 600px;

    }
    .best-title {
      margin-left: 20px;
      text-align: center;
    }

    .best-content {
      margin-left: 0;
      text-align: center;
    }

    .ranking-img {
      padding-right: 20px;
      width: 350px;
      display: flex;
      justify-content: center;
      margin-top: -30px;
      margin-left: 215px;
      position: relative;
    }

    .ranking-one {
      width: 100%;
      margin: 10px 0;
      display: none;
      margin-top: 70px;
    }

    .ranking-one:first-child {
    display: block; 
  }

    p {
      display: none;
      position: static;
      margin-top: 10px;
    }
  }


`;