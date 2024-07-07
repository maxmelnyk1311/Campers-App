// import { useSelector } from "react-redux";
// import { selectCampers } from "../../redux/campers/selectors";
import { useState, useEffect } from "react";
import CamperCard from "./CamperCard/CamperCard";
import css from "./CampersList.module.css";


export default function CampersList () {
    // const campersList = useSelector(selectCampers);
    const KEY = "favoriteCampers";
    const [favoriteCampers, setFavoriteCampers] = useState(null);

    useEffect(() => {
        const campersInLocalStorage = JSON.parse(window.localStorage.getItem(KEY));
        console.log(campersInLocalStorage);
        if (campersInLocalStorage) {
            setFavoriteCampers(campersInLocalStorage);
        }
    }, []);

    return (
        <div className={css.campersListWrp}>
            {favoriteCampers === null || favoriteCampers.length === 0 && <p>There is no one favorite camper added!</p>}
            <ul className={css.campersList}>
                {favoriteCampers !== null && favoriteCampers.map((camper) => {
                    return (
                        <CamperCard 
                            key={camper._id}
                            camperItems={camper}
                        />
                    )
                })}
                
            </ul>
        </div>
        
    )

}