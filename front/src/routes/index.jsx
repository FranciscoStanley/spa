import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SearchInput from "../components/Search/index";
import Details from "../components/Detail/index";
import Leaflet from "../components/Leaflet/index";
import PageNotFound from "../pages/PageNotFound";

function RoutesOfPage() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/pesquisar" element={<SearchInput />} />
            <Route exact path="/detalhes" element={<Details />} />
            <Route exact path="/bula" element={<Leaflet />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default RoutesOfPage;
