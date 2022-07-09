import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
  query,
  limit,
  startAfter,
} from "firebase/firestore";
import { db } from "./firebase";

const postsRef = collection(db, "posts");
const mount = 20;

export const getAllPost = async () => {
  const q = query(postsRef, limit(mount));
  const posts = await getDocs(q);
  return posts.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const loadMorePost = async (lastPostRef) => {
  const q = query(postsRef, limit(mount), startAfter(lastPostRef));
  const posts = await getDocs(q);
  return posts.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getPostById = async (docId) => {
  const docRef = doc(db, "posts", docId);
  return (await getDoc(docRef)).data();
};

export const getPostRefById = async (docId) => {
  const docRef = doc(db, "posts", docId);
  return await getDoc(docRef);
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
