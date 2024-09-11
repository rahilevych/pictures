import { ReactNode, createContext, useEffect, useState } from 'react';
import { UserType } from '../types/UserType';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth, db } from '../config/firebase';

import { doc, setDoc } from 'firebase/firestore';

import { firebaseErrors } from '../components/ErrorsForFirebase';
import { FirebaseError } from 'firebase/app';

type AuthContextType = {
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
  isLoggedIn: boolean;
};

const initAuthContextValue = {
  user: {} as UserType,
  setUser: () => {
    throw new Error('context not initialised');
  },
  setPassword: () => {
    throw new Error('context not initialised');
  },
  setEmail: () => {
    throw new Error('context not initialised');
  },
  register: () => Promise.resolve(),
  signIn: () => Promise.resolve(),
  logOut: () => Promise.resolve(),
  email: '',
  password: '',
  loggedIn: false,
  isLoggedIn: false,
  setSignUpPressed: () => {
    throw new Error('context not initialised');
  },
  setLoginPressed: () => {
    throw new Error('context not initialised');
  },
  loginPressed: false,
  signUpPressed: false,
};

type AuthContextProviderProps = {
  children: ReactNode;
};
export const AuthContext = createContext<AuthContextType>(initAuthContextValue);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  let [user, setUser] = useState<UserType | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false);
  const [signUpPressed, setSignUpPressed] = useState(true);
  const [loginPressed, setLoginPressed] = useState(false);

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        setUser({ email: user.email, id: user.uid });
        await setDoc(doc(db, 'users', user.uid), {
          email: user.email,
          imagesList: [],
        });
      }
    } catch (e) {
      if (e instanceof FirebaseError) {
        firebaseErrors(e);
      }
    } finally {
      setEmail('');
      setPassword('');
    }
  };

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        setIsLoggedIn(true);
        setLoggedOut(false);
      } else {
      }
    } catch (e) {
      if (e instanceof FirebaseError) {
        firebaseErrors(e);
      }
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

  useEffect(() => {
    stayLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        register,
        setEmail,
        setPassword,
        email,
        password,
        signIn,
        logOut,
        isLoggedIn,
        setLoginPressed,
        setSignUpPressed,
        loginPressed,
        signUpPressed,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
