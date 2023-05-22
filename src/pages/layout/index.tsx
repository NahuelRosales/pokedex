import { BrowserRouter, Routes, Route } from "react-router-dom";

import Pokedex from "../pokedex";
import SideBar from "./components/side-bar";
import Detail from "../detail";

const LayoutPage = () => {
    return (
            <BrowserRouter>
                <SideBar />
                <Routes>
                    <Route element={<Pokedex />} path="/" />
                    <Route element={<Detail/>} path="/:pokeId" />

                </Routes>
            </BrowserRouter>
    );
};

export default LayoutPage;
