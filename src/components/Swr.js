import React from 'react';
import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then((resp) => resp.json());
function Swr() {
    const { data } = useSWR(
        'https://dog.ceo/api/breeds/image/random',
        fetcher,
        { suspense: true }
    );

    return (
        <div>
            <h1> ini pakai metode swr</h1>
            <img width={500} src={data?.message} alt='rdm' />
        </div>
    );
}

export default Swr;
