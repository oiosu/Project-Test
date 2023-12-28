import React from 'react';
import styled from 'styled-components';

const AdSection = () => {
    return (
        <AdComponent>
            <div className='adbox-01'>
                <img src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/26ba39101436737.5f1efb48c02ab.jpg' alt='house' />
            </div>
            <div className='balloon'>
                <div className='balloon_1'>
                    <p className='ballonn-text'>내일의 집의 장점 장점 장점 장점 장점 장점 장점 장점</p>
                </div>
                <div className='balloon_2'>
                    <p className='ballonn-text'>내일의 집의 장점 장점 장점 장점 장점 장점 장점 장점</p>
                </div>
                <div className='balloon_3'>
                    <p className='ballonn-text'>내일의 집의 장점 장점 장점 장점 장점 장점 장점 장점</p>
                </div>
                <div className='balloon_4'>
                    <p className='ballonn-text'>내일의 집의 장점 장점 장점 장점 장점 장점 장점 장점</p>
                </div>
            </div>

        </AdComponent>
    );
};

export default AdSection;

const AdComponent = styled.div`

.adbox-01 {
    margin-top: 60px;
    margin-left: 270px;
}


img  {
    position: relative;
    width: 1000;
    height: 666px;
    border-radius: 20px;
    border-style: none;
    margin-top: 120px;
    margin-bottom: 50px;
    z-index: -1;
}

.balloon {
    margin-left: 180px;
}

.balloon_1 {
    position: absolute;
    margin-top: -650px;
    
    width: 700px;
    height: 70px;
    
    background: #333;
    border-radius:10px;
    
    color: #fff;
    font-weight: bold;
    text-align: center;
    font-size: 25px;
    
    padding-top: 40px;
}

.balloon_1::after{
	content: '';
	position: absolute;
	left: 0;
	top: 50%;
	width: 0;
	height: 0;
	border: 13px solid transparent;
	border-right-color: #333;
	border-left: 0;
	margin-top: -13px;
	margin-left: -13px;
}

.balloon_2 {
    position: absolute;
    margin-top: -500px;
    margin-left: 440px;
    
    width: 700px;
    height: 70px;
    
    background: #333;
    border-radius:10px;
    
    color: #fff;
    font-weight: bold;
    text-align: center;
    font-size: 25px;
    
    padding-top: 40px;
}

.balloon_2::after{
	content: '';
	position: absolute;
	right: 0;
	top: 50%;
	width: 0;
	height: 0;
	border: 13px solid transparent;
	border-left-color: #333;
	border-right: 0;
	margin-top: -13px;
	margin-right: -13px;
}

.balloon_3 {
    position: absolute;
    margin-top: -350px;
    margin-left: 5px;
    
    width: 700px;
    height: 70px;
    
    background: #333;
    border-radius:10px;
    
    color: #fff;
    font-weight: bold;
    text-align: center;
    font-size: 25px;
    
    padding-top: 40px;
}

.balloon_3::after {
	content: '';
	position: absolute;
	left: 0;
	top: 50%;
	width: 0;
	height: 0;
	border: 13px solid transparent;
	border-right-color: #333;
	border-left: 0;
	margin-top: -13px;
	margin-left: -13px;
}

.balloon_4 {
    position: absolute;
    margin-top: -200px;
    margin-left: 440px;
    
    width: 700px;
    height: 70px;
    
    background: #333;
    border-radius:10px;
    
    color: #fff;
    font-weight: bold;
    text-align: center;
    font-size: 25px;
    
    padding-top: 40px;
}

.balloon_4::after{
    content: '';
	position: absolute;
	right: 0;
	top: 50%;
	width: 0;
	height: 0;
	border: 13px solid transparent;
	border-left-color: #333;
	border-right: 0;
	margin-top: -13px;
	margin-right: -13px;
}

  /* 768 반응형 */
@media (max-width: 768px) {
    img {
      display: none;
    }

    .balloon {
        margin-top: 1100px;
    }
    .balloon_1, .balloon_2, .balloon_3, .balloon_4{
        width: 600px;
        height: 50px;
        margin-left: -100px;
    }
    .ballonn-text {
        font-size: 19px;
        margin-top: -10px;
    }
  }
  
  /* 360 반응형 */
  @media (max-width: 360px) {
    .balloon {
        display: none;
    }
 }

`;