import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";


const Nav = () => {
  const navigate = useNavigate();

  const navigateEmpty = () => {
    if (navigate) {
      navigate("/empty");
    }
  };

  const navigateMainPage = () => {
    if (navigate) {
      navigate("/");
    }
  };

  return (
    <NavComponent>
      <div className='nav-menu1'>
        <div className='logo'>
          <span onClick={navigateMainPage}>내일의 집</span>
        </div>
        <ul className='menu-text'>
          <li>커뮤니티</li>
          <li>쇼핑</li>
          <li>베스트샵</li>
        </ul>
        <div className='nav-menu2'>
          <ul>
            <li onClick={navigateEmpty}>
              장바구니
            </li>
            <li>로그인</li>
            <li>회원가입</li>
            <li>고객센터</li>
          </ul>
        </div>
      </div>
    </NavComponent>
  );
};

export default Nav;

const NavComponent = styled.div`
  .nav-menu1 {
    display: flex;
    justify-content: start;
    background-color: #fff;
    margin-bottom: 10px;
  }
  

  .logo {
    background-color: #6EB636;
    width: 200px;
    height: 50px;
    color: #fff;
    font-weight: bold;
    border-radius: 10px;
    font-size: 30px;
    text-align: center;

    margin-top: 20px;
    margin-left: 50px;

    padding-top: 10px;
  }

  ul {
    list-style: none;
  }

  li {
    float: left;
    font-size: 15px;
    margin-left: 60px;
    margin-top: 24px;
    font-weight: bold;
  
    
  }

  .nav-menu2 {
    display: flex;
    justify-content: end;
    padding-left: 360px;
}

  .nav-menu2 li:hover {
    cursor: pointer;
    background-image: linear-gradient(transparent 60%, #6EB636 40%);
    background-size: 100% 100%;
  }
`;
