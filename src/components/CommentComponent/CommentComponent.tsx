import React, { useContext, useState } from 'react';
import './CommentComponent.scss';
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';
import { UserType } from '../../types/UserType';
import { useParams } from 'react-router';
import { ImagesContext } from '../../context/ImagesContext';
import { CommentsContext } from '../../context/CommentsContext';
import { v4 as uuidv4 } from 'uuid';
import { CommentType } from '../../types/CommentType';
import { ImageWithComment } from '../../types/ImageWithComment';
import toast from 'react-hot-toast';

const CommentComponent = () => {
  const [comment, setComment] = useState('');
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const { id } = useParams();
  const { images } = useContext(ImagesContext);
  const { addComment, fetchComments } = useContext(CommentsContext);

  const img = images?.find((image) => image.id === Number(id));

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setComment(value);
    setIsButtonVisible(value.trim().length > 0);
  };

  const handleCommentSubmit = () => {
    const saveNotify = () =>
      toast.error('User must be logged in to add to favorites');
    if (!img) {
      throw Error('No image');
    }
    if (comment.trim()) {
      console.log('Comment submitted:', comment);
      const currentUser = auth.currentUser;
      if (currentUser) {
        const user: UserType = {
          id: currentUser.uid,
          email: currentUser.email || '',
        };
        const newComment: CommentType = {
          id: uuidv4(),
          user: user,
          date: new Date(),
          text: comment,
        };
        addCommentToImage(img.id.toString(), newComment);
        addComment(newComment);
        setComment('');
        setIsButtonVisible(false);
      } else {
        saveNotify();
      }
    }
  };

  const addCommentToImage = async (imageId: string, comment: CommentType) => {
    try {
      const imageRef = doc(db, 'images', imageId?.toString());
      const imageDoc = await getDoc(imageRef);

      if (imageDoc.exists()) {
        await updateDoc(imageRef, {
          comments: arrayUnion(comment),
        });
        fetchComments(Number(imageId));
      } else {
        const newImage: ImageWithComment = {
          id: imageId || '',
          saves: 0,
          likes: 0,
          comments: [comment],
        };
        await setDoc(imageRef, newImage);
      }
      console.log('Comment added successfully');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <div className='comment'>
      <div className='comment__img'>
        <i className='ph ph-user'></i>
      </div>
      <div className='comment__input'>
        <textarea
          value={comment}
          onChange={handleInputChange}
          placeholder='Add a comment...'
        />
      </div>
      {isButtonVisible && (
        <div className='comment__btn'>
          <button onClick={handleCommentSubmit}>
            <i className='ph ph-chats-circle'></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default CommentComponent;
