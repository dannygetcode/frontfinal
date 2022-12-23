import { useNavigate } from "react-router-dom";
import React from "react";

const Header = () => {
  const navigate = useNavigate();
  const cerrarSesion = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className="px-4 py-5 bg-zinc-200 border-b">
      <div className="md:flex md:justify-between">
        <h2 className="inline bg-gradient-to-r from-yellow-500 via-yellow-700 to-indigo-500 bg-clip-text font-display text-5xl tracking-tight text-transparent font-bold">
          Panel de Administrador
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-4 shadow-">
          <input
            type="submit"
            value="Cerrar Sesión"
            className="bg-yellow-600 mb-5 w-full py-3 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-yellow-500 transition-colors"
            onClick={cerrarSesion}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
