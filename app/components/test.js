import React, { useEffect, useState } from 'react';
import { GET } from '../api/images/route';
import DropDown from "./DropDownMenu";
import ShareButton from "./ShareButton";

export default function Test() {
    const [data, setData] = useState([]);
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

    if (data.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <div>
            {data.map((item) => (
                <div key={item.id} className="relative 
       before:absolute
       before:h-full before:w-full
       before:rounded-3xl
       before:z-10
       hover:before:bg-gray-600 
       before:opacity-50
       cursor-pointer
       my-5
       ">
                    {/* <img src={item.urls.regular} alt={item.alt_description} /> */}
                    {/* <h1>{item.alt_description}</h1> */}
                    <img src={item.urls.small} alt={item.alt_description}
                    className="rounded-3xl 
        cursor-pointer relative z-0 "
         />
                    {/* <p>{item.description}</p> */}
                    <DropDown />
      <ShareButton />
                </div>
            ))}

        </div>
        </>
    );
}
