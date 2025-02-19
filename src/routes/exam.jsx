import { Exam } from '../components';
import React from 'react';
import { Container } from '../styles/container.style';
import Sidebar from '../components/Sidebar/Sidebar';

const RouteExam = () => {
    return (
        <Container>
            <Sidebar />
            <Exam />
        </Container>
    );
};

export default RouteExam;
