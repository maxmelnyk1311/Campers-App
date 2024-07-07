import css from "./CamperCard.module.css";
import sprite from "../../../assets/sprite.svg";
import CamperDetails from "./CamperDetails/CamperDetails";
import ModalWindow from "./ModalWindow.jsx";
import { useEffect, useState } from "react";

export default function CamperCard({ camperItems }) {
  const [isCamperInStorage, setCamperInStorage] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleModalClose() {
    setIsOpen(false);
  }
  const KEY = "favoriteCampers";

  useEffect(() => {
    const campersInLocalStorage = window.localStorage.getItem(KEY);
    if (campersInLocalStorage) {
      const findCamperInStorage = JSON.parse(campersInLocalStorage).find((camper) => camper._id === camperItems._id);
      if (findCamperInStorage) {
        setCamperInStorage(true);
      } else {
        setCamperInStorage(false);
      }
    }
  }, []);

  function handleClick(id) {
    const favoriteCampers = window.localStorage.getItem(KEY);

    if (favoriteCampers === null) {
      const createLocalStorage = [camperItems];
      window.localStorage.setItem(KEY, JSON.stringify(createLocalStorage));
      setCamperInStorage(true);
    }

    if (favoriteCampers !== null) {
      const parsedStorage = JSON.parse(favoriteCampers);
      const isCamperInFavorites = parsedStorage.find(
        (camper) => camper._id === id
      );

      if (isCamperInFavorites) {
        const filteredFavorites = parsedStorage.filter((camper) => camper._id !== id);
        window.localStorage.setItem(KEY, JSON.stringify(filteredFavorites));
        setCamperInStorage(false);
      }

      if (!isCamperInFavorites) {
        const pushedFavorites = [...parsedStorage, camperItems];
        window.localStorage.setItem(KEY, JSON.stringify(pushedFavorites));
        setCamperInStorage(true);
      }
    }
  }

  return (
    <li className={css.camperCard}>
      <div className={css.camperImgWrp}>
        <img src={camperItems.gallery[0]} className={css.camperImg} />
      </div>

      <div>
        <div className={css.camperHeader}>
          <h2 className={css.camperName}>{camperItems.name}</h2>
          <div className={css.camperHeaderWrp}>
            <p className={css.camperPrice}>€{camperItems.price},00</p>
            <button
              className={css.favoritesBtn}
              onClick={() => handleClick(camperItems._id)}
            >
              <svg width="24" height="24" aria-label="heart-btn">
                <use
                  className={isCamperInStorage ? css.favoritesActiveIcon : css.favoritesIcon}
                  href={`${sprite}#icon-heart`}
                ></use>
              </svg>
            </button>
          </div>
        </div>
        <div className={css.camperItemsWrp}>
          <div className={css.camperReviewsWrp}>
            <svg width="16" height="16" aria-label="star">
              <use href={`${sprite}#icon-star`}></use>
            </svg>
            <p className={css.camperReviews}>
              {camperItems.rating}({`${camperItems.reviews.length} `}
              {camperItems.reviews.length > 1 ? "Reviews" : "Review"})
            </p>
          </div>
          <div className={css.camperLocationWrp}>
            <svg
              width="16"
              height="16"
              className={css.locationIcon}
              aria-label="star"
            >
              <use href={`${sprite}#icon-location`}></use>
            </svg>
            <p className={css.camperLocation}>{camperItems.location}</p>
          </div>
        </div>
        <p className={css.camperDescription}>{camperItems.description}</p>
        <CamperDetails camperItems={camperItems} />
        <button className={css.camperBtnShowMore} onClick={() => handleOpenModal()}>Show more</button>
        {isOpen && (
        <ModalWindow
          isOpen={isOpen}
          handleModalClose={handleModalClose}
          camperItems={camperItems}
        />
      )}
      </div>
    </li>
  );
}
