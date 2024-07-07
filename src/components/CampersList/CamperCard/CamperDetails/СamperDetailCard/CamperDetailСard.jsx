import sprite from "../../../../../assets/sprite.svg";
import css from "./CamperDetailCard.module.css";

export default function CamperDetailCard({iconId, detailItem}) {
  return (
    <li className={css.detailCard}>
      <svg
        width="20"
        height="20"
        aria-label="detail-icon"
      >
        <use className={iconId === "bed" || iconId === "conditioner" ? css.detailIconBed : css.detailIcon} href={`${sprite}#icon-${iconId}`}></use>
      </svg>
      <p className={css.detailItemText}>{detailItem}</p>
    </li>
  );
}
