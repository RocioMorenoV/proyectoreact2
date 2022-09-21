import "./App.css";
import ItemListContainer from "./components/shop/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos! tienda bajo construccion" />
    </>
  );
}
export default App;
