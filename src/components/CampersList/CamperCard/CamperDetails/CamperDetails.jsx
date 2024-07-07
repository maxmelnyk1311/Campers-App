import CamperDetailCard from "./СamperDetailCard/CamperDetailСard";
import css from "./CamperDetails.module.css";


export default function CamperDetails({camperItems}) {
    return (
        <ul className={css.detailsList}>
            <CamperDetailCard iconId={"adults"} detailItem={`${camperItems.adults} adults`}/>
            <CamperDetailCard iconId={"transmission"} detailItem={camperItems.transmission}/>
            <CamperDetailCard iconId={"engine"} detailItem={camperItems.engine}/>
            {camperItems.details.kitchen > 0 && <CamperDetailCard iconId={"kitchen"} detailItem={"Kitchen"}/>}
            {camperItems.details.beds > 0 && <CamperDetailCard iconId={"bed"} detailItem={`${camperItems.details.beds} Beds`}/>}
            {camperItems.details.airConditioner > 0 && <CamperDetailCard iconId={"conditioner"} detailItem={"AC"}/>}
        </ul>
    )
}