import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Home from "./Pages/Home";
import PokemonList from "./Pages/PokemonList";
import { Provider } from "react-redux";
import { store } from "./App/store";
import { Battle } from "./Pages/Battle";
import PokemonCardDetail from "./Components/PokemonCardDetail";
import Cart from "./Pages/Cart";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon-list" element={<PokemonList />} />
          <Route path="/pokemon-list/:id" element={<PokemonCardDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/battle" element={<Battle />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;