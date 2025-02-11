import React from 'react';
import { Login } from './components';

import { BrowserRouter, useRoutes } from 'react-router-dom';

function App() {
    const routes = useRoutes([
        { path: '/', element: <Login /> },
        { path: '/sigin', element: <Login /> },
    ]);

    return routes;
}

export default App;
