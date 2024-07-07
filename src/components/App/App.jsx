import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import Navigation from "../Navigation/Navigation.jsx";
import HomePage from "../../pages/HomePage.jsx";
import CatalogPage from "../../pages/СatalogPage.jsx";
import FavoritesPage from "../../pages/FavoritesPage.jsx";

import { fetchCampers } from "../../redux/campers/operations.js";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch])

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/catalog" element={<CatalogPage />}/>
        <Route path="/favorites" element={<FavoritesPage />}/>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>

  )
}


