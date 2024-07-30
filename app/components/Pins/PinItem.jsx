import React from 'react';
import Image from 'next/image';
import DropDown from "../DropDownMenu";
import { useRouter } from "next/navigation";
import ShareButton from "../../Shared/components/ShareButton";


const PinItem = ({ pin }) => {
  const router = useRouter();
  // const user = {
  //   name: pin?.userName,
  //   image: pin?.userImage,
  // };
  return (
    <div className="pin-item group">
    <div
        className="relative 
       before:absolute
       before:h-full before:w-full
       before:rounded-3xl
       before:z-10
       group-hover:before:bg-gray-600 
       before:opacity-50
       cursor-pointer
       "
        onClick={() => router.push("/pin/" + pin.id)}
      >
      <Image 
        src={pin.image || pin.urls?.regular || pin.urls?.small || '/default.jpg'} // Add a default src in case all URLs are missing
        alt={pin.alt_description || 'Image'} // Add a default alt text
        width={500} 
        height={500} 
        className="rounded-3xl cursor-pointer relative z-0" 
        loading="lazy" 
        decoding="async"
      />
      <div className="pin-details opacity-0 group-hover:opacity-100">
        {/* <p>{pin.description || 'No description available'}</p> */}
        {/* <p>{pin.user?.name || 'Unknown user'}</p> */}
        <DropDown />
      <ShareButton />
      </div>
      </div>
    </div>
  );
}

export default PinItem;
