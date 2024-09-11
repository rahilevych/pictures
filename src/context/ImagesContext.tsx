import { ReactNode, createContext, useState } from 'react';
import { ImageType } from '../types/ImageType';
import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY;
//define the type of my context
type ImagesContextType = {
  images: ImageType[] | null;
  fetchData: () => Promise<void>;
  tag: string;
  setTag: (tag: string) => void;
  setCurrentPage: (page: number) => void;
  currentPage: number;
  amountOfPages: number;
  setError: (error: string) => void;
  error: string;
};

//create a type for react routes/components we are gonna give access to
type ImagesContextProviderProps = {
  children: ReactNode;
};

//initial  value of all the variables(state variables and setters) and functions we share
const initImagesContext = {
  images: [] as ImageType[] | null,
  fetchData: () => Promise.resolve(),
  tag: '',
  currentPage: 1,
  amountOfPages: 0,
  setTag: () => {
    throw new Error('context not initialised');
  },
  setCurrentPage: () => {
    throw new Error('context not initialised');
  },
  setError: () => {
    throw new Error('context not initialised');
  },
  error: '',
};

//create context
export const ImagesContext =
  createContext<ImagesContextType>(initImagesContext);

//create provider: store containing the values to share

export const ImagesContextProvider = ({
  children,
}: ImagesContextProviderProps) => {
  const [images, setImages] = useState<null | ImageType[]>(null);
  const [tag, setTag] = useState('blue');
  const [photosPerPage, setPhotoPerPage] = useState(30);
  const [amountOfPages, setAmountOfPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState('');
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=${apiKey}&q=${tag}&per_page=${photosPerPage}&page=${currentPage}`
      );
      if (response.data.hits.length === 0) {
        setError('No matches');
      } else {
        setImages(response.data.hits);
        setAmountOfPages(Math.ceil(response.data.totalHits / photosPerPage));
      }
    } catch (error) {
      setError('Failed to fetch images.');
    }
  };

  return (
    <ImagesContext.Provider
      value={{
        images,
        fetchData,
        tag,
        currentPage,
        amountOfPages,
        setTag,
        setCurrentPage,
        setError,
        error,
      }}>
      {children}
    </ImagesContext.Provider>
  );
};
