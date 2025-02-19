import React from 'react';
import { Container, Wrapper } from '../styles/container.style';
import Sidebar from '../components/Sidebar/Sidebar';
import { Config } from '../components';

const RouteConfig = () => {
    return (
        <Container>
            <Sidebar />
            <Wrapper>
                <Config />
            </Wrapper>
        </Container>
    );
};

export default RouteConfig;
