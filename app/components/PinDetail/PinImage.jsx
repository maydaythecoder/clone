import Image from "next/image";
import React from "react";

function PinImage({ pinDetail, isRounded }) {
  return (
    <div className="">
      <Image
        src={pinDetail.image || pinDetail.urls?.regular || pinDetail.urls?.small || "/default.jpg"}
        alt={pinDetail.title}
        width={1000}
        height={1000}
        className={isRounded ? "rounded-l-lg" : ""}
      />
    </div>
  );
}

export default PinImage;
