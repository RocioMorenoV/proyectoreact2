import "../../styles/estilosoGreetings.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h1 className="greetings"> {greeting}</h1>
    </div>
  );
};
export default ItemListContainer;
