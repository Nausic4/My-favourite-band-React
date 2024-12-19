import "./App.css";
import Navigation from "./components/Navigation";
import Band from "./components/Band";
import Bob from "./components/Bob";
import Bunny from "./components/Bunny";
import Peter from "./components/Peter";
import Junior from "./components/Junior";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="app">
      <Navigation />
      <main>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Band />}></Route>
          <Route exact path="/bob" element={<Bob />}></Route>
          <Route exact path="/peter" element={<Peter />}></Route>
          <Route exact path="/bunny" element={<Bunny />}></Route>
          <Route exact path="/junior" element={<Junior />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
