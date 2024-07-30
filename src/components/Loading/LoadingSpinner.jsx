import React from 'react';
import styled from 'styled-components';
import Load from '../../image/logo.gif';

const LoadingContainer = styled.div`
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const LoadingImage = styled.img`
    width: 500px;
    height: 500px;
`;

const LoadingSpinner = () => (
    <React.Fragment>
        <LoadingContainer>
            <LoadingImage src={Load} alt="Loading..." />
        </LoadingContainer>
    </React.Fragment>
);

export default LoadingSpinner;
