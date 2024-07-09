// // test.js
// import React, { useEffect, useState } from "react";
// import { GET } from "../api/images/route";
// import { db } from '../Shared/firebaseConfig';
// import { collection, addDoc } from "firebase/firestore";
// import DropDown from "./DropDownMenu";
// import ShareButton from "./ShareButton";

// export default function Test() {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await GET();
//       if (result.error) {
//         setError(result.error);
//       } else {
//         setData(result);
//       }
//     };

//     fetchData();
//   }, []);

//   const addToFirestore = async (item) => {
//     try {
//       await addDoc(collection(db, "pinterest-post"), {
//         id: item.id,
//         slug: item.slug,
//         alternative_slugs: item.alternative_slugs,
//         created_at: item.created_at,
//         updated_at: item.updated_at,
//         promoted_at: item.promoted_at,
//         width: item.width,
//         height: item.height,
//         color: item.color,
//         blur_hash: item.blur_hash,
//         description: item.description,
//         alt_description: item.alt_description,
//         urls: item.urls,
//         links: item.links,
//         likes: item.likes,
//         liked_by_user: item.liked_by_user,
//         current_user_collections: item.current_user_collections,
//         sponsorship: item.sponsorship,
//         topic_submissions: item.topic_submissions,
//         asset_type: item.asset_type,
//         user: item.user,
//       });
//       console.log("Document successfully written!");
//     } catch (error) {
//       console.error("Error adding document: ", error);
//     }
//   };

//   useEffect(() => {
//     if (data.length > 0) {
//       data.forEach(addToFirestore);
//     }
//   }, [data]);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (data.length === 0) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <div>
//         {data.map((item) => (
//           <div
//             key={item.id}
//             className="relative 
//        before:absolute
//        before:h-full before:w-full
//        before:rounded-3xl
//        before:z-10
//        hover:before:bg-gray-600 
//        before:opacity-50
//        cursor-pointer
//        my-5
//        "
//           >
//             <img
//               src={item.urls.small}
//               alt={item.alt_description}
//               className="rounded-3xl 
//         cursor-pointer relative z-0 "
//             />
//             <DropDown />
//             <ShareButton />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
