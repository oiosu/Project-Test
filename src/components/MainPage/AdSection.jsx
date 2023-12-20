import React from 'react';
import styled from 'styled-components';

const AdSection = () => {
    return (
        <AdComponent>
            <div className='adbox-01'>
                <img src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/26ba39101436737.5f1efb48c02ab.jpg' alt='house' />
            </div>

        </AdComponent>
    );
};

export default AdSection;

const AdComponent = styled.div`

img  {
    width: 1000;
    height: 666px;
    border-radius: 30px;
    margin-top: 120px;
    margin-bottom: 100px;
}

`;