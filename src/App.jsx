import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      {/* componente para visualizar a pagina em navegação "Outlet" */}
    </div>
  );
}
