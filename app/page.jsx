"use client";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import app from "./Shared/firebaseConfig";
import PinList from "./components/Pins/PinList";
import Test from "./components/test";

//TODO: fix pin/[pinId]/page.jsx to work with api data
//TODO: document id and image id should be the same in firestore

export default function Home() {
  const db = getFirestore(app);
  const [listOfPins, setListOfPins] = useState([]);

  useEffect(() => {
    getAllPins();
  }, []);
  // console.log("Fetching data from:", process.env.IMAGE_API_URL);


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
    <div className="p-3 pt-20">
      <PinList listOfPins={listOfPins} /> 
      {/* <Test/> */}
    </div>
  );
}
