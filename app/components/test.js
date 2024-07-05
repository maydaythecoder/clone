import React, { useEffect, useState } from 'react';
import { GET } from '../api/images/route';

export default function Test() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await GET();
            if (result.error) {
                setError(result.error);
            } else {
                setData(result);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    if (!data.urls) {
        return <div>Data loaded, but no URLs found</div>;
    }

    return (
        <div>
            <img src={data.urls.regular} alt={data.alt_description} />
            <h1>{data.alt_description}</h1>
            <img src={data.urls.small} alt={data.alt_description} />
            <p>{data.description}</p>
        </div>
    );
}
