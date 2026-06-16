import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import PokemonIndex from "../pokemon/index";
import TrainerIndex from "../trainer/index";
import TrainerShow from "../trainer/show";
function MyPokemonAppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokemons" element={<PokemonIndex />} />
                <Route path="/trainers" element={<TrainerIndex />} />
                <Route path="/trainers/:id" element={<TrainerShow/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default MyPokemonAppRoutes;