// // saveToFirestore.js
// import { collection, setDoc, getDocs, query, where, Timestamp, doc } from 'firebase/firestore';
// import { db } from '../Shared/firebaseConfig';

// const fetchAndSaveData = async () => {
//   try {
//     const response = await fetch(process.env.IMAGE_API_URL);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const contentType = response.headers.get("content-type");
//     if (!contentType || !contentType.includes("application/json")) {
//       throw new Error("Expected JSON response");
//     }

//     const data = await response.json();
//     if (!Array.isArray(data)) {
//       throw new Error("Expected an array of data");
//     }

//     const imagesCollection = collection(db, 'pinterest-post');

//     // Check if data has been saved today
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);
//     const todayTimestamp = Timestamp.fromDate(today);

//     const q = query(imagesCollection, where('created_at', '>=', todayTimestamp));
//     const querySnapshot = await getDocs(q);

//     if (!querySnapshot.empty) {
//       console.log("Data already saved today. Skipping...");
//       return;
//     }

//     for (const item of data) {
//       const imageDocRef = doc(imagesCollection, item.id);
//       await setDoc(imageDocRef, { ...item, created_at: Timestamp.now() });
//     }

//     console.log("Data successfully saved to Firestore");
//   } catch (error) {
//     console.error("Error saving data to Firestore:", error);
//   }
// };

// fetchAndSaveData();
