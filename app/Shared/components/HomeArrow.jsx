import React from 'react'
import { useRouter } from "next/navigation";

const HomeArrow = () => {
    const router = useRouter();
    const handleBackButtonClick = () => {
        router.back();
      };
  return (
    <div>
              <svg
          aria-hidden="true"
          aria-label=""
          height="35"
          width="35"
          role="img"
          viewBox="0 0 24 24"
          className="text-[60px] font-bold ml-[-130px] cursor-pointer rounded-full p-2 "
          onClick={handleBackButtonClick}
        >
          <path d="M8.41 4.59a2 2 0 1 1 2.83 2.82L8.66 10H21a2 2 0 0 1 0 4H8.66l2.58 2.59a2 2 0 1 1-2.82 2.82L1 12z" />
        </svg>
    </div>
  )
}

export default HomeArrow
