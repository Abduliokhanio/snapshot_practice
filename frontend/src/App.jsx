import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/general/home";
import PokemonIndex from "./views/pokemon/index";
import TrainerIndex from "./views/trainer/index";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<PokemonIndex />} />
        <Route path="/trainers" element={<TrainerIndex />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
