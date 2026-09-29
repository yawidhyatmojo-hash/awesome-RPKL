import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Divisions from "./pages/Divisions";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <div className="flex min-h-screen items-center justify-center">

          <div className="text-center">

            <p className="font-semibold tracking-[0.2em] text-sky-400">
              RPKL IT ORGANIZATION
            </p>

            <h1 className="mt-4 text-5xl font-bold">
              Build Future Innovators
            </h1>

          </div>

        </div>
      </main>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/divisions" element={<Divisions />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;