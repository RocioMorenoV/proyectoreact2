import "./App.css";
import NavBar from "./components/NavBar";
import ItemList from "./components/ItemList";
import ItemDetail from "./components/ItemDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemList />} />
          <Route path={"/item/:id"} element={<ItemList />} />
          <Route path={"/item/detail/:id"} element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
