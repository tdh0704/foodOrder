//saving new item

import { async } from "@firebase/util";
import {
  setDoc,
  doc,
  getDocs,
  query,
  collection,
  orderBy,
  getDoc,
} from "firebase/firestore";
import { firestore } from "../firebase.config";

export const saveItem = async (data) => {
  await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, {
    merge: true,
  });
};

export const saveOrder = async (data) => {
  await setDoc(doc(firestore, "orders", `${Date.now()}`), data, {
    merge: true,
  });
};

// getall food items

export const getAllFoodItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "foodItems"), orderBy("id", "desc"))
  );
  return items.docs.map((doc) => doc.data());
};

export const getAllOrders = async () => {
  const items = await getDocs(
    query(collection(firestore, "orders"), orderBy("id", "desc"))
  );
  return items.docs.map((doc) => doc.data());
};

export const getExtraUserInfo = async (userId) => {
  const docRef = doc(firestore, "user", userId);
  const docSnap = await getDoc(docRef);
  return docSnap.data()
};
