import Cart from "./components/Cart/Cart";
import Container from "./components/layout/Container";
import Header from "./components/layout/header/Header";
import Products from "./components/products/Products";
import Provider from "./context/Provider";
import "./index.css";

function App() {
  return (
    <>
      {" "}
      <Provider>
        <Container classname="w-full bg-[#eee] min-h-screen flex">
          <Header />
          <Container
            classname="w-full bg-[#eee] py-40"
            children={<Products />}
          />
          <Cart />
        </Container>
      </Provider>
    </>
  );
}

export default App;
