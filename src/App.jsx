import React, { useEffect } from 'react';
import { Login, Exams, Exam } from './components';

import { BrowserRouter, useRoutes } from 'react-router-dom';
import { session } from './utils';

function App() {
    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            // session();
        }
    }, []);
    const routes = useRoutes([
        { path: '/', element: <Login /> },
        { path: '/exams', element: <Exams /> },
        { path: '/exam', element: <Exam /> },
    ]);

    return routes;
}

export default App;
