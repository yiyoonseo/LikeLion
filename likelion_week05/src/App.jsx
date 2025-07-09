import Main from "./pages/Main";
import SignIn from "./pages/Signin";
import ShoppingCart from "./pages/ShoppingCart";
import Layout from "./components/layouts/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />}/>
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/shoppingCart" element={<ShoppingCart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
