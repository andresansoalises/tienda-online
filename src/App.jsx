import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartContextProvider } from "./context/CartContext";
import Cart from "./components/Cart";


function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/categoria/:categoriaId"
            element={<ItemListContainer />}
          />
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/carrito" element={<Cart />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
