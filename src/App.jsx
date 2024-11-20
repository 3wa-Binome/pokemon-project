import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Home from "./Pages/Home";
import PokemonList from "./Pages/PokemonList";
import { Provider } from "react-redux";
import { store } from "./App/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon-list" element={<PokemonList />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;