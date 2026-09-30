import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicLayout from "./components/PublicLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Divisions from "./pages/Divisions";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/divisions" element={<Divisions />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;