import { ReactNode, createContext, useState } from 'react';
import { auth, db } from '../config/firebase';
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';

type SaveImgContextType = {
  images: SavedImgType[] | null;
  fetchSavedImg: () => Promise<void>;
  addToSaved: (image: {
    url: string;
    tags: string;
    id: string;
  }) => Promise<void>;
  deleteFromSaved: (image: {
    url: string;
    tags: string;
    id: string;
  }) => Promise<void>;
};
//define the initial value of context
const initSaveImgContextValue = {
  images: null,
  fetchSavedImg: () => Promise.resolve(),
  addToSaved: () => Promise.resolve(),
  deleteFromSaved: () => Promise.resolve(),
};
//define type of props the SaveImg recived

type SaveImgContextProviderProps = {
  children: ReactNode;
};
export const SaveImgContext = createContext<SaveImgContextType>(
  initSaveImgContextValue
);

export const SaveImgContextProvider = ({
  children,
}: SaveImgContextProviderProps) => {
  const [images, setImages] = useState<SavedImgType[] | null>(null);

  const addToSaved = async (image: {
    url: string;
    tags: string;
    id: string;
  }) => {
    if (auth.currentUser) {
      const userDocRef = doc(db, 'users', auth.currentUser.uid);
      await updateDoc(userDocRef, {
        imagesList: arrayUnion(image),
      });
    } else {
      throw new Error('User is not authenticated');
    }
  };
  const deleteFromSaved = async (image: {
    url: string;
    tags: string;
    id: string;
  }) => {
    if (auth.currentUser) {
      const userDocRef = doc(db, 'users', auth.currentUser.uid);
      await updateDoc(userDocRef, {
        imagesList: arrayRemove(image),
      });
    } else {
      throw new Error('User is not authenticated');
    }
  };

  const fetchSavedImg = async () => {
    try {
      const user = auth.currentUser;
      if (!user) {
        throw new Error('user not logged in');
      }
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setImages(userData.imagesList);
      }
    } catch (error) {
      console.error('error fetching', error);
    }
  };

  return (
    <SaveImgContext.Provider
      value={{
        deleteFromSaved,
        images,
        addToSaved,
        fetchSavedImg,
      }}>
      {children}
    </SaveImgContext.Provider>
  );
};
