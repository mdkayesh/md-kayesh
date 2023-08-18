import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// collections

const featuredColl = collection(db, "featured-projects");
const noteWorthyColl = collection(db, "note-worthy-projects");

const getFeaturedProjects = async () => {
  const res = await getDocs(query(featuredColl, orderBy("createdAt", "desc")));

  console.log(
    res.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    })
  );
  return res.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
};

const getNoteWorthyProject = async () => {
  const res = await getDocs(
    query(noteWorthyColl, orderBy("createdAt", "desc"))
  );

  return res.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
};

export { getFeaturedProjects, getNoteWorthyProject };
