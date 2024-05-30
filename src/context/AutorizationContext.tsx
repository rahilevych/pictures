import { ReactNode, createContext, useEffect, useState } from "react";
import { UserType } from "../assets/types/UserType";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../config/firebase";
import { Navigate } from "react-router";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { ImageType } from "../assets/types/ImageType";
import { set } from "firebase/database";
//define type of context

type Image = {
  url: string;
};

type AuthContextType = {
  images: Image[] | null;
  // setImages: (images: ImageType[]) => void;
  fetchSavedImg: () => Promise<void>;
  user: UserType | null;
  email: string;
  password: string;
  setUser: (user: UserType) => void;
  setPassword: (password: string) => void;
  setEmail: (email: string) => void;
  setSignUpPressed: (isPressed: boolean) => void;
  setLoginPressed: (isPressed: boolean) => void;
  loginPressed: boolean;
  signUpPressed: boolean;

  register: () => Promise<void>;
  signIn: () => Promise<void>;
  logOut: () => Promise<void>;

  addToFavorites: (image: { url: string }) => Promise<void>;

  isLoggedIn: boolean;
};

//define the initial value of context
const initAuthContextValue = {
  images: null,
  fetchSavedImg: () => Promise.resolve(),
  user: {} as UserType,
  setUser: () => {
    throw new Error("context not initialised");
  },
  setPassword: () => {
    throw new Error("context not initialised");
  },
  setEmail: () => {
    throw new Error("context not initialised");
  },
  register: () => Promise.resolve(),
  signIn: () => Promise.resolve(),
  logOut: () => Promise.resolve(),
  email: "",
  password: "",
  loggedIn: false,
  isLoggedIn: false,

  addToFavorites: () => Promise.resolve(),

  setSignUpPressed: () => {
    throw new Error("context not initialised");
  },
  setLoginPressed: () => {
    throw new Error("context not initialised");
  },
  loginPressed: false,
  signUpPressed: false,
};

//define type of props the AuthContextProvider recived

type AuthContextProviderProps = {
  children: ReactNode;
};
export const AuthContext = createContext<AuthContextType>(initAuthContextValue);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  // REVIEW very unusual to declare a state variable as a let variable. That also create other Typescript issues
  let [user, setUser] = useState<UserType | null>(null);
  // REVIEW TS does a good job at infering types when they are primitive values (strings, numbers, booleans,). no need to type them ourselves.
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // const [loggedIn, setLoggedIn] = useState<boolean>(false);
  // REVIEW "One source of truth" : what determines if our user is logged in or not, is the content of our user variable. Better to check that to know if the user is logged in or not. Creating another state for that creates a second "source of truth" = when my user is logged in? when isLoggedIn===true or when user !== null??
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loggedOut, setLoggedOut] = useState<boolean>(false);
  const [signUpPressed, setSignUpPressed] = useState<boolean>(true);
  const [loginPressed, setLoginPressed] = useState<boolean>(false);
  const [images, setImages] = useState<Image[] | null>(null);

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      // REVIEW user is typed as any, help TS to type it.
      if (user) {
        setUser({ email: user.email, id: user.uid });
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          imagesList: [],
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setEmail("");
      setPassword("");
    }
  };

  const addToFavorites = async (image: { url: string }) => {
    if (auth.currentUser) {
      const userDocRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(userDocRef, {
        imagesList: arrayUnion(image),
      });
    } else {
      throw new Error("User is not authenticated");
    }
  };
  const fetchSavedImg = async () => {
    try {
      const user = auth.currentUser;
      if (!user) {
        throw new Error("user not logged in");
      }
      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setImages(userData.imagesList);
      }

      // const imagesCollectionRef = collection(db, 'users', userId, 'imagesList');
      // const queryImages = query(imagesCollectionRef);
      // const querySnapshot = await getDocs(queryImages);
      // console.log(querySnapshot);
      // const images = querySnapshot.docs.map((doc) => ({
      //   id: doc.id,
      //   ...doc.data(),
      // }));
      // console.log(userId);
    } catch (error) {
      console.error("error fetching", error);
    }
  };

  const signIn = async () => {
    try {
      const isLoggedIn = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (isLoggedIn) {
        setIsLoggedIn(true);
        setLoggedOut(false);
      }
    } catch (error) {
      // REVIEW give the user feedback, otherwise he won't know
      console.log(error);
    }
  };
  const stayLoggedIn = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      setLoggedOut(true);
      setIsLoggedIn(false);
      setUser(null);
      console.log(auth.currentUser?.email);
    } catch (error) {
      console.log(error);
    }
  };
  // if (loggedOut) {
  //   return <Navigate to={'registration'} replace={true} />;
  // }

  useEffect(() => {
    stayLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        images,
        user,
        setUser,
        register,
        setEmail,
        setPassword,
        email,
        password,
        signIn,
        addToFavorites,
        logOut,
        isLoggedIn,
        setLoginPressed,
        setSignUpPressed,
        loginPressed,
        signUpPressed,
        fetchSavedImg,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
