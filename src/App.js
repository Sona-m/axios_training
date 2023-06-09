import "./App.css";
import Home from "./pages/Home";
import Get from "./pages/Get";
import Post from "./pages/Post";
import Patch from "./pages/Patch";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get" element={<Get />} />
        <Route path="/post" element={<Post />} />
        <Route path="/get/:unitId" element={<Patch />} />
      </Routes>
    </div>
  );
}

export default App;
