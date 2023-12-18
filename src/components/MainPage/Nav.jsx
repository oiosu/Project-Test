import React from 'react';
import styled from 'styled-components';

const NavComponent = styled.div`

.nav-menu1 {
    display: flex;
    justify-content: start;

    height: 100px;
    background-color: gray;

}

.logo {
    background-color: green;
    width: 200px;
    height: 50px;
    color: #fff;
    font-weight: bold;
    border-radius: 10px;
    font-size: 35px;
}

`;

const Nav = () => {
    return (
        <NavComponent>
            <div className='nav-menu1'>
                <div className='logo'>
                    내일의 집
                </div>
                <div>

                </div>
            </div>
        </NavComponent>

    );
};

export default Nav;

