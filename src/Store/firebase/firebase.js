// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { doc, setDoc ,deleteDoc,addDoc,collection,updateDoc} from "firebase/firestore"; 
// import { collection, addDoc } from "firebase/firestore"; 
// import { doc, deleteDoc } from "firebase/firestore";
// import { useDispatch } from "react-redux";
// import { authSliceAction } from "../auth-slice";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain:process.env.REACT_APP_authdomain,
  projectId:process.env.REACT_APP_projectid,
  storageBucket: process.env.REACT_APP_storagebucket,
  messagingSenderId:process.env.REACT_APP_messagingsenderid ,
  appId: process.env.REACT_APP_appid
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth(app);

export const sendDataToDatabase=async(data)=>{
  // console.log(data.value);
  await setDoc(doc(db, data.collection, data.id), data.value);
}
export const addDataToDataBase=async(data)=>{
  // console.log(data.value);
  const docRef=await addDoc(collection(db, data.collection),data.value);
  // console.log("Document written with ID: ", docRef.id);
  const ref = doc(db, data.collection, docRef.id);
  await updateDoc(ref,{refId:docRef.id});
}
export const removeDataFromDataBase=async(data)=>{
  await deleteDoc(doc(db,data.collection,data.id));

}