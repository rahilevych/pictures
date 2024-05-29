import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AutorizationContext';
import { auth, db } from '../../config/firebase';
import { collection, onSnapshot, query } from 'firebase/firestore';
import './SavedImagesPage.scss';
import { useParams } from 'react-router';
const SavedImagesPage = () => {
  const { fetchSavedImg, images, deleteToFavorites, isLoggedIn } =
    useContext(AuthContext);
  console.log(auth.currentUser);
  //   const img = images?.find((image) => image.url === url);

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

  //   const handleDeleteFromFavorites = () => {
  //     console.log(auth.currentUser?.uid);
  //     if (img && isLoggedIn) {
  //       deleteToFavorites({ url: img?.largeImageURL })
  //         .then(() => {
  //           console.log('Image added to favorites');
  //           alert('added');
  //         })
  //         .catch((error) => {
  //           console.error('Error adding image to favorites:', error);
  //           alert('error');
  //         });
  //     } else {
  //       console.log('User must be logged in to add to favorites');
  //     }
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
              images.map((image, index) => (
                <div className='saved__block'>
                  <div className='image'>
                    <img src={image.url} key={index} alt='' />
                  </div>
                  <button
                    onClick={() => {
                      deleteToFavorites(image);
                      fetchSavedImg();
                    }}>
                    delete img
                  </button>
                </div>
              ))}
          </div>
        </main>
      </div>
    </div>
  );
};
export default SavedImagesPage;
