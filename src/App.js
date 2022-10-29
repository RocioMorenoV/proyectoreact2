import "./App.css";
import NavBar from "./components/NavBar";
import ItemList from "./components/ItemList";
import ItemDetail from "./components/ItemDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./context/Context";
import Cart from "./components/Cart";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemList />} />
          <Route path={"/category/:id"} element={<ItemList />} />
          <Route path={"/item/detail/:id"} element={<ItemDetail />} />
          <Route path={"/cart"} element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}
export default App;
