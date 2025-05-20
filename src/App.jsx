import Main from "./pages/Main";
import SignIn from "./pages/Signin";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/signin" element={<SignIn />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
