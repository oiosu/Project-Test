import React from 'react';
import styled from 'styled-components';

const Empty = () => {
    return (
        <EmptyBasket>
            <div className='empty-inner'>

            </div>
        </EmptyBasket>

    );
};

export default Empty;

const EmptyBasket = styled.div`

.empty-inner {
    width: 100%;
    height: 600px;
    background-color
}

`;