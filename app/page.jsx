"use client";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import app from "./Shared/firebaseConfig";
import PinList from "./components/Pins/PinList";
import Test from "./components/test";

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
    <div className="p-3 pt-20">

      {/* <PinList listOfPins={listOfPins} /> */}
      <Test />
    </div>
  );
}
