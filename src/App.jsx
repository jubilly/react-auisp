import React, { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { session } from './utils';
import RouteLogin from './routes/login';
import RouteExams from './routes/exams';
import RouteExam from './routes/exam';
import RouteConfig from './routes/config';

function App() {
    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            // session();
        }
    }, []);
    const routes = useRoutes([
        { path: '/', element: <RouteLogin /> },
        { path: '/exams', element: <RouteExams /> },
        { path: '/exam', element: <RouteExam /> },
        { path: '/config', element: <RouteConfig /> },
    ]);

    return routes;
}

export default App;
