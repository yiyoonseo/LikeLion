import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import TVdetail from "./components/TVdetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shows/:id" element={<TVdetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
