import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FB_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FB_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_PROJECT_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_PROJECT_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_PROJECT_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
