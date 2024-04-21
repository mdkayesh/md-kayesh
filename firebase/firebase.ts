import { initializeApp } from "firebase/app";
import {
  DocumentData,
  Timestamp,
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
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

// const featuredColl = collection(db, "featured-projects");
// const noteWorthyColl = collection(db, "note-worthy-projects");
const projectColl = collection(db, "projects");

export type docData = {
  title: string;
  createdAt: string;
  gitUrl: string;
  url: string;
  img: string;
  technologies: string;
  description: string;
  isFeatured: string;
  id: string;
  buyUrl?: string;
};

const getFeaturedProjects = async () => {
  const res = await getDocs(
    query(
      projectColl,
      where("isFeatured", "==", true),
      orderBy("createdAt", "desc"),
    ),
  );

  return res.docs.map((doc) => {
    const data = { ...doc.data() };

    const date = new Date(data.createdAt.nanoseconds);

    data.createdAt = date.toLocaleDateString();

    return { ...(data as docData), id: doc.id };
  });
};

const getNoteWorthyProject = async () => {
  const res = await getDocs(
    query(
      projectColl,
      where("isFeatured", "==", false),
      orderBy("createdAt", "desc"),
    ),
  );

  return res.docs.map((doc) => {
    const data = { ...doc.data() };

    const date = new Date(data.createdAt.nanoseconds);

    data.createdAt = date.toLocaleDateString();

    return { ...(data as docData), id: doc.id };
  });
};

export { getFeaturedProjects, getNoteWorthyProject };
