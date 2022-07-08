import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Axios = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        axios.get('https://dog.ceo/api/breeds/image/random').then((resp) => {
            setData(resp.data.message);
        });
    }, []);

    return (
        <div>
            <h1> ini pakai axios</h1>
            <img width={500} src={data} alt='rdm' />
        </div>
    );
};

export default Axios;
