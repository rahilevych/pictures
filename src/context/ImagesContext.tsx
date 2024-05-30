import { ReactNode, createContext, useState } from "react";
import { ImageType } from "../assets/types/ImageType";
import axios from "axios";

import { apiKey } from "../config/APIKey";

//define the type of my context
type ImagesContextType = {
  images: ImageType[] | null;
  fetchData: () => Promise<void>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePageChange: (e: React.ChangeEvent<unknown>, value: number) => void;
  tag: string;
  currentPage: number;
  amountOfPages: number;
};

//create a type for react routes/components we are gonna give access to

type ImagesContextProviderProps = {
  children: ReactNode;
};

//initial  value of all the variables(state variables and setters) and functions we share

const initImagesContext = {
  images: [] as ImageType[] | null,
  fetchData: () => Promise.resolve(),
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => "",
  handlePageChange: (e: React.ChangeEvent<unknown>, value: number) => 1,
  tag: "",
  currentPage: 1,
  amountOfPages: 0,
};

//create context
export const ImagesContext =
  createContext<ImagesContextType>(initImagesContext);

//create provider: store containing the values to share

export const ImagesContextProvider = ({
  children,
}: ImagesContextProviderProps) => {
  const [images, setImages] = useState<null | ImageType[]>(null);
  // const[url,setUrl]=useState('`https://pixabay.com/api/')
  let [tag, setTag] = useState<string>("blue");
  let [photosPerPage, setPhotoPerPage] = useState<number>(30);
  let [amountOfPages, setAmountOfPages] = useState<number>(0);
  let [currentPage, setCurrentPage] = useState<number>(1);

  const fetchData = async () => {
    try {
      // REVIEW axios is a nice package that give us some extra features when doing requests. But if we are not gonna need those extra features, do we really need it? it adds extra kbs.
      const response = await axios.get(
        `https://pixabay.com/api/?key=${apiKey}&q=${tag}&per_page=${photosPerPage}&page=${currentPage}`
      );
      // REVIEW how do you handle a response that is not ok?
      setImages(response.data.hits);
      console.log(response.data);
      setAmountOfPages(Math.ceil(response.data.totalHits / photosPerPage));
    } catch (error) {
      console.log(error);
      // REVIEW Handle errors , give the user feeback.
    }
  };

  // REVIEW it is unusual to declare the event handler away from the event.
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setTag(e.target.value);
    } else if (e.target.value === "") {
      setTag("blue");
      // setCurrentPage(1);
    }
  };
  const handlePageChange = (
    e: React.ChangeEvent<unknown>,
    value: number
  ): void => {
    setCurrentPage(value);
  };

  return (
    <ImagesContext.Provider
      value={{
        images,
        fetchData,
        handleInputChange,
        tag,
        currentPage,
        amountOfPages,
        handlePageChange,
      }}
    >
      {children}
    </ImagesContext.Provider>
  );
};
