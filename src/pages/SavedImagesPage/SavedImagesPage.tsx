import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AutorizationContext';
import { auth, db } from '../../config/firebase';
import { collection, onSnapshot, query } from 'firebase/firestore';
import './SavedImagesPage.scss';
const SavedImagesPage = () => {
  const { fetchSavedImg, images } = useContext(AuthContext);
  console.log(auth.currentUser);

  type User = {
    email: string;
    imagesList: Image[];
  };
  type Image = {
    url: string;
  };
  //const [images, setImages] = useState<User[] | null>(null);

  //   const getImagesRealTime = () => {
  //     const q = query(collection(db, 'users'));
  //     onSnapshot(q, (querySnapshot) => {
  //       const usersArray: User[] = [];
  //       querySnapshot.forEach((doc) => {
  //         const imageWithId: User = {
  //           email: doc.data().email,
  //           imagesList: doc.data().imagesList,
  //         };
  //         //   messagesArray.push(doc.data().name);
  //         usersArray.push(imageWithId);
  //       });
  //       setImages(usersArray);
  //     });
  //   };
  console.log(images);
  useEffect(() => {
    fetchSavedImg();
  }, []);

  return (
    <div className='wrapper saved__wrapper'>
      <div className='container saved__container'>
        <main className='saved'>
          <div className='saved__images'>
            {images &&
              images.map((url, index) => (
                <div className='image'>
                  <img src={url.url} alt='' />
                </div>
              ))}
          </div>
        </main>
      </div>
    </div>
  );
};
export default SavedImagesPage;
