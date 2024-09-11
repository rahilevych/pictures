import { FirebaseError } from 'firebase/app';
import toast from 'react-hot-toast';

export const errorFirebase = (message: string) => toast.error(message);
export const firebaseErrors = (error: FirebaseError) => {
  switch (error?.code) {
    case 'auth/invalid-credential':
      errorFirebase(
        'Either email or password is incorrect. Try again, please.'
      );
      break;
    case 'auth/email-already-in-use':
      errorFirebase('The chosen email is already in use. Pick another email.');
      break;
    case 'auth/network-request-failed':
      errorFirebase('Network request failure. Try again, please.');
      break;
    default:
      errorFirebase('Some error occurred. Try again, please.');
      break;
  }
};
