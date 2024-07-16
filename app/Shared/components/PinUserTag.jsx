"use client";
import { useState, useEffect } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../Shared/firebaseConfig'; // Adjust the path according to your project structure
import UserTag from "../../components/UserTag";
import defaultImage from '../../../public/Default.jpg';

const PinUserTag = ({ pinId }) => {
  const [pinDetail, setPinDetail] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchPinDetail = async () => {
      try {
        const docRef = doc(db, "pinterest-post", pinId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPinDetail(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
      }
    };

    if (pinId) {
      fetchPinDetail();
    }
  }, [pinId]);

  useEffect(() => {
    setUser({
      name: pinDetail.userName || "Anonymous User",
      email: pinDetail.email || "email@example.com",
      image: pinDetail.userImage || defaultImage,
    });
  }, [pinDetail]);

  return (
    <div>
      <UserTag user={user} />
      <button
        type="button"
        className="absolute -mt-9 ml-80 rounded-full bg-gray-100 px-4 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        Follow
      </button>
    </div>
  );
};

export default PinUserTag;
