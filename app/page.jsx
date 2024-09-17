"use client";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import app from "./Shared/firebaseConfig";
import PinList from "./components/Pins/PinList";
import { Categories } from "./components/Categories";
import Header from "./components/Header";
import Test from "./components/test";

//TODO: improve explore page and categories to work only with provided categories
//TODO: add post interactions with proper links
//TODO: improve user page to work with api data(get all posts by user)
//TODO: fix pin/[pinId]/page.jsx add media element to individual comments in the comment accordian
//TODO: improve comment accordian to add replies
//TODO: fix navbar to track user interaction and state
//TODO: fix pin/[pinId]/page.jsx add recomendations to show similar pins 
//TODO: add interaction to search bar
//TODO: fix comment accordian to only show part of it, set overflow to scroll and add comment interactions
//TODO: add error handling


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
      <Header />
      <Categories />
      <PinList listOfPins={listOfPins} /> 
      {/* <Test/> */}
    </div>
  );
}
