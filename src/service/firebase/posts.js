import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "./firebase";

const postsRef = collection(db, "posts");

export const getAllPost = async () => {
  const posts = await getDocs(postsRef);
  return posts.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getPostById = async (docId) => {
  const docRef = doc(db, "posts", docId);
  return (await getDoc(docRef)).data();
};

export const addPost = async (data) => {
  return addDoc(postsRef, data);
};

export const updatePost = async (docId, data) => {
  const docRef = doc(db, "posts", docId);
  await updateDoc(docRef, data);
};

export const deletePost = async (docId) => {
  await deleteDoc(doc(db, "posts", docId));
};
