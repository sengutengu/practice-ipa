import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home, Interests, Projects } from "./components/pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
