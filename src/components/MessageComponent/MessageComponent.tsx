import { FC, useContext } from 'react';
import './MessageComponent.scss';
import { CommentsContext } from '../../context/CommentsContext';
import { auth, db } from '../../config/firebase';
import { arrayRemove, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useParams } from 'react-router';
import { ImagesContext } from '../../context/ImagesContext';
import { CommentType } from '../../types/CommentType';

type MessageComponentProps = {
  comment: CommentType;
};

const MessageComponent: FC<MessageComponentProps> = ({ comment }) => {
  const { id } = useParams();
  const { images } = useContext(ImagesContext);
  const { fetchComments } = useContext(CommentsContext);
  const img = images?.find((image) => image.id === Number(id));
  const isAuthor = auth.currentUser?.uid === comment.user?.id;
  const formattedDate =
    comment.date instanceof Date ? comment.date.toDateString() : '';

  const handleDeleteComment = async () => {
    try {
      if (isAuthor) {
        if (!img) {
          throw Error('No image');
        }
        await deleteCommentFromFirestore(comment.id);
        fetchComments(img?.id);
      } else {
        console.log('You are not authorized to delete this comment.');
      }
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  const deleteCommentFromFirestore = async (commentId: string) => {
    try {
      if (!img?.id) {
        throw new Error('Image ID is undefined');
      }
      const imageRef = doc(db, 'images', img?.id.toString());
      const imageDoc = await getDoc(imageRef);
      console.log(imageDoc);
      if (imageDoc.exists()) {
        await updateDoc(imageRef, {
          comments: arrayRemove(commentId),
        });
        console.log('comm del');
      } else {
        throw new Error('Image document does not exist');
      }
    } catch (error) {
      throw new Error('Error deleting comment from Firestore: ' + error);
    }
  };

  return (
    <div className='message'>
      <div className='message__img'>
        <i className='ph ph-user'></i>
      </div>
      <div className='message__desc'>
        <div className='message__info'>
          <div className='message__user'>{comment.user.email}</div>
          <div className='message__date'>{formattedDate}</div>
        </div>
        <div className='message__text'>{comment.text}</div>
      </div>
      {isAuthor && (
        <div className='message__del'>
          <i className='ph ph-trash' onClick={handleDeleteComment}></i>
        </div>
      )}
    </div>
  );
};

export default MessageComponent;
