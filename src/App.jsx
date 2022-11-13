import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ItemDetail from "./components/ItemDetail";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path="/detail/:productId" element={<ItemDetail />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
