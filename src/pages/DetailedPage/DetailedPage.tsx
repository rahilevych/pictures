import React, { FC, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ImageType } from "../../assets/types/ImageType";
import "./DetailedPage.scss";
import { AuthContext } from "../../context/AutorizationContext";
import { auth } from "../../config/firebase";

type DetailedPageProps = {
  images: ImageType[] | null;
};

// REVIEW since some time ago there is no need of typing a component. TS knows. Anyway, if you prefer to do it, do it consistently (with the rest of the components.)
const DetailedPage: FC<DetailedPageProps> = ({ images }) => {
  const { id } = useParams();
  const img = images?.find((image) => image.id === Number(id));

  const { addToFavorites, isLoggedIn } = useContext(AuthContext);

  const handleAddToFavorites = () => {
    console.log(auth.currentUser?.uid);
    if (img && isLoggedIn) {
      addToFavorites({ url: img?.largeImageURL })
        .then(() => {
          console.log("Image added to favorites");
          alert("added");
        })
        .catch((error) => {
          console.error("Error adding image to favorites:", error);
          alert("error");
        });
    } else {
      console.log("User must be logged in to add to favorites");
      // REVIEW do not forget to give this information to the user
    }
  };
  if (!img) {
    return <div>Image not found</div>;
  }

  return (
    <div className="wrapper details__wrapper">
      <div className="container details__container">
        <main className="details">
          <div className="details__descr">
            <div className="details__img">
              <img src={img?.webformatURL} alt="" />
            </div>
            <div className="details__info">
              <div className="details__row">
                <div className="details__icon">
                  <i className="ph ph-heart-straight"></i>
                </div>
                <div className="details__icon">
                  <i
                    onClick={handleAddToFavorites}
                    className="ph ph-bookmark-simple"
                  ></i>
                </div>
                <div className="details__icon">
                  <i className="ph ph-share-network"></i>
                </div>
              </div>
              <div className="details__row">
                <p>Views</p>
                <p>{img?.views}</p>
              </div>
              <div className="details__row">
                <p>Downloads</p>
                <p>{img?.downloads}</p>
              </div>
              <div className="details__row">
                <p>Likes</p>
                {/* //REVIEW what will the user see if !img ?? */}
                <p>{img?.likes}</p>
              </div>
              <div className="details__row">
                <p>Comments</p>
                <p>{img?.comments}</p>
              </div>
              <div className="details__row">
                <div className="details__user-img">
                  <img src={img?.userImageURL} alt="" />
                </div>
                <p className="details__user">{img?.user}</p>
              </div>
            </div>
          </div>
          <div className="details__coments"></div>
        </main>
      </div>
    </div>
  );
};

export default DetailedPage;
