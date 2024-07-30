"use client";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import app from "./Shared/firebaseConfig";
import PinList from "./components/Pins/PinList";
import { Categories } from "./components/Categories";
import Test from "./components/test";

//TODO: fix pin/[pinId]/page.jsx add animation to comment accordian
//TODO: fix pin/[pinId]/page.jsx add recomendations to show similar pins 
//TODO: fix pin/[pinId]/page.jsx add media element to individual comments in the comment accordian
//TODO: fix ./Shared/components/PinImage in pin/[pinId]/page.jsx so the image is centered if its not big enough
//TODO: fix comment accordian to only show part of it, set overflow to scroll and add comment interactions
//TODO: improve comment accordian to add replies
//TODO: add post interactions with proper links
//TODO: improve explore page
//TODO: add interaction to search bar
//TODO: fix navbar to track user interaction and state
//TODO: add error handling
//TODO: improve user page to work with api data
//TODO: add boards to user page


export default function Home() {
  const db = getFirestore(app);
  const [listOfPins, setListOfPins] = useState([]);

  useEffect(() => {
    getAllPins();
  }, []);
  const getAllPins = async () => {
    setListOfPins([]);
    const q = query(collection(db, "pinterest-post"));
    const querySnapshot = await getDocs(q);
    const pins = [];
    querySnapshot.forEach((doc) => {
      console.log("Fetched pin:", doc.data());
      pins.push(doc.data());
    });
    setListOfPins(pins);
  };

  return (
    <div className="p-3 lg:pt-20 sm:pt-32">
      <Categories />
      <PinList listOfPins={listOfPins} /> 
      {/* <Test/> */}
    </div>
  );
}
