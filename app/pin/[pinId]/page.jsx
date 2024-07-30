"use client";
import React, { useEffect, useState } from "react";
import PinImage from "./../../components/PinDetail/PinImage";
import PinInfo from "./../../components/PinDetail/PinInfo";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./../../Shared/firebaseConfig";
import HomeArrow from "./../../Shared/components/HomeArrow";
import PinInteractions from "@/app/Shared/components/PinInteractions";

function PinDetail({ params }) {
  const [pinDetail, setPinDetail] = useState([]);
  useEffect(() => {
    getPinDetail();
  }, []);

  const getPinDetail = async () => {
    const docRef = doc(db, "pinterest-post", params.pinId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setPinDetail(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  // const getUserInfo = async (email) => {
  //   const docRef = doc(db, "user", email);
  //   const docSnap = await getDoc(docRef);
  //   if (docSnap.exists()) {
  //     setUserInfo(docSnap.data());
  //   } else {
  //     // docSnap.data() will be undefined in this case
  //     console.log("No such document!");
  //   }
  // };

  return (
    <>
      <div className="p-3 md:p-12 rounded-2xl md:px-24 lg:px-36 fixed ml-2 mt-2">
      <HomeArrow />
        <p className="-ml-20 -mt-[29px] font-medium text-lg">For you</p>
      </div>
      {pinDetail ? (
        <div className=" bg-white p-3 md:p-12 rounded-2xl md:px-24 lg:px-36 mt-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 shadow-[0_10px_20px_rgba(0,0,0,0.5)] rounded-2xl lg:min-h-[500px] ">
                <PinImage pinDetail={pinDetail || {image: pinDetail.urls?.regular}} className="h-full lg:w-full " />
                <div className=" p-5">
                  <PinInfo pinDetail={pinDetail} />
                </div>
                <PinInteractions />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default PinDetail;
