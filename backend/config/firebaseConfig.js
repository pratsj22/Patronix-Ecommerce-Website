import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "patronix-website.firebaseapp.com",
  projectId: "patronix-website",
  storageBucket: "patronix-website.appspot.com",
  messagingSenderId: "1090031816248",
  // appId: "1:1090031816248:web:60837a4b43dd047fefe0cd",
  measurementId: "G-MYHLX6TF8C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage= getStorage(app)
const getImageUrl=async(imagePath)=>{
    const imageRef= ref(storage,imagePath);
    const imageUrl = await getDownloadURL(imageRef);
    console.log(imageUrl);
    return imageUrl;
}


export default getImageUrl;