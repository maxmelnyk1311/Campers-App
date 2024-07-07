import ReactModal from "react-modal";
import css from "./ModalWindow.module.css";

import sprite from "../../../assets/sprite.svg";

export default function ModalWindow({ isOpen, handleModalClose, camperItems }) {
  return (
    <ReactModal
      isOpen={isOpen}
      className={css.modalWindowWrp}
      overlayClassName={css.modalOverlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      onRequestClose={handleModalClose}
      ariaHideApp={false}
    >
      <button className={css.closeBtn} onClick={handleModalClose}>
        <svg width="32" height="32" aria-label="close-btn">
          <use className={css.closeBtnIcon} href={`${sprite}#icon-close`}></use>
        </svg>
      </button>
      <h2 className={css.camperName}>{camperItems.name}</h2>
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
      <p className={css.camperPrice}>€{camperItems.price}.00</p>
      <div className={css.imagesWrp}>
        <div className={css.camperImgWrp}>
          <img src={camperItems.gallery[0]} className={css.camperImg} />
        </div>
        <div className={css.camperImgWrp}>
          <img src={camperItems.gallery[1]} className={css.camperImg} />
        </div>
        <div className={css.camperImgWrp}>
          <img src={camperItems.gallery[2]} className={css.camperImg} />
        </div>
      </div>
      <p className={css.camperDescription}>{camperItems.description}</p>
    </ReactModal>
  );
}
