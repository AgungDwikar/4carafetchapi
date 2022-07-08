import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Axios from './components/Axios';
import Fetch from './components/Fetch';
import Swr from './components/Swr';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        {/* <App /> */}
        <Suspense fallback={<h1 style={{ color: 'red' }}> LOADING... </h1>}>
            <Swr />
        </Suspense>
        {/* <Fetch /> */}
        {/* <Axios /> */}
    </>
);
