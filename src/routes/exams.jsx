import { Exams } from '../components';
import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import { Container } from '../styles/container.style';

const RouteExams = () => {
    return (
        <Container>
            <Sidebar />
            <Exams />
        </Container>
    );
};

export default RouteExams;
