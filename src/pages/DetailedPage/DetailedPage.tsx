import { useContext, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import './DetailedPage.scss';

import CommentComponent from '../../components/CommentComponent/CommentComponent';
import MessageComponent from '../../components/MessageComponent/MessageComponent';
import { ImagesContext } from '../../context/ImagesContext';
import { CommentsContext } from '../../context/CommentsContext';
// import { SaveImgContext } from '../../context/SaveImgContex';
import { CommentType } from '../../types/CommentType';

const DetailedPage = () => {
  const { id } = useParams();
  const { images } = useContext(ImagesContext);
  const img = images?.find((image) => image.id === Number(id));
  const { comments, fetchComments } = useContext(CommentsContext);
  // const { isLoggedIn } = useContext(AuthContext);
  // const { addToSaved } = useContext(SaveImgContext);

  // const handleAddToFavorites = () => {
  //   console.log(auth.currentUser?.uid);
  //   if (img && isLoggedIn) {
  //     addToSaved({
  //       url: img?.largeImageURL,
  //       tags: img.tags,
  //       id: img.id.toString(),
  //     })
  //       .then(() => {
  //         console.log('Image added to favorites');
  //       })
  //       .catch((error) => {
  //         console.error('Error adding image to favorites:', error);
  //       });
  //   } else {
  //     console.log('User must be logged in to add to favorites');
  //   }
  // };
  if (!img) {
    return <Navigate to={'/'}></Navigate>;
  }

  useEffect(() => {
    fetchComments(img.id);
  }, []);

  return (
    <div className='wrapper details__wrapper'>
      <div className='container details__container'>
        <main className='details'>
          <div className='details__img'>
            <img src={img?.webformatURL} alt='' />
          </div>
          <div className='details__comments'>
            <CommentComponent />
            {comments &&
              comments.map((comment: CommentType, index: number) => (
                <MessageComponent key={index} comment={comment} />
              ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DetailedPage;
