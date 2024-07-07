import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors";
import { useState } from "react";
import CamperCard from "./CamperCard/CamperCard";
import css from "./CampersList.module.css";


export default function CampersList () {
    const campersList = useSelector(selectCampers);
    
    const [page, setPage] = useState(1); 
    const itemsPerPage = 4;
    const totalPages = Math.ceil(campersList.length / itemsPerPage);

    const campersToShow = campersList.slice(0, itemsPerPage * page);

    function handleLoadMore() {
        setPage(page + 1);
    }


    return (
        <div className={css.campersListWrp}>
            <ul className={css.campersList}>
                {campersToShow.map((camper) => {
                    return (
                        <CamperCard 
                            key={camper._id}
                            camperItems={camper}
                        />
                    )
                })}
            </ul>
            {page < totalPages &&
                <button className={css.loadMoreBtn} onClick={handleLoadMore}>Load more</button>
            }
        </div>
        
    )

}