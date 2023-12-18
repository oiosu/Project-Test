import React from 'react';
import styled from 'styled-components';

const Nav = () => {
    return (
        <NavComponent>
            <div className='nav-menu1'>
                <div className='logo'>
                    <span>
                        내일의 집
                    </span>
                </div>
                <ul className='meue-text'>
                    <li>커뮤니티</li>
                    <li>쇼핑</li>
                    <li>베스트샵</li>
                </ul>
                <div className='nav-menu2'>
                    <ul>
                        <li>장바구니</li>
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

    height: 100px;
    background-color: #fff;

    top: fixed;

}


.logo {
    background-color: #6EB636;
    width: 200px;
    height: 50px;
    color: #fff;
    font-weight: bold;
    border-radius: 10px;
    font-size: 36px;
    text-align: center;

    margin-top: 20px;
    margin-left: 50px;

    padding-top: 10px;
}

ul {
    list-style:none;
}

li {
    float: left;
    font-size: 24px;
    margin-left: 80px;
    margin-top: 24px;
}

.nav-menu2 {
    display: flex;
    justify-content: end;
    padding-left: 400px;
}


`;
