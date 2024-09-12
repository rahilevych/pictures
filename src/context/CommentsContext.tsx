// CommentsContext.tsx
import { createContext, useState, ReactNode } from 'react';
import { db } from '../config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { CommentType } from '../types/CommentType';

type CommentsContextType = {
  comments: CommentType[];
  addComment: (comment: CommentType) => void;
  setComments: (comment: CommentType[]) => void;
  fetchComments: (id: number) => Promise<void>;
};
type CommentsContextTypeProps = {
  children: ReactNode;
};

const initCommentsContent = {
  comments: [] as CommentType[],
  addComment: () => Promise.resolve(),
  setComments: () => {
    throw new Error('context not initialised');
  },
  fetchComments: () => Promise.resolve(),
};
export const CommentsContext =
  createContext<CommentsContextType>(initCommentsContent);

export const CommentsProvider = ({ children }: CommentsContextTypeProps) => {
  const [comments, setComments] = useState<CommentType[]>([]);

  const addComment = (comment: CommentType) => {
    setComments((prevComments) => [...prevComments, comment]);
  };

  const fetchComments = async (id: number) => {
    try {
      if (!id) {
        throw Error('');
      }
      const imageRef = doc(db, 'images', id.toString());
      const imageDoc = await getDoc(imageRef);
      if (imageDoc.exists()) {
        const imageData = imageDoc.data();
        if (imageData) {
          const comments = imageData.comments;
          setComments(comments);
        }
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  return (
    <CommentsContext.Provider
      value={{ comments, addComment, setComments, fetchComments }}>
      {children}
    </CommentsContext.Provider>
  );
};
