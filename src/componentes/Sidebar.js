import { Link } from "react-router-dom";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="md:w-60 lg:w-90 px-5 py-10 bg-zinc-200">
      <p className="text-2xl text-center font-extrabold">Dashboard</p>
      <Link
        to={"/crear-categorias"}
        className="bg-blue-600 w-full p-3 text-white uppercase font-bold block mt-20 text-center rounded-xl hover:cursor-pointer hover:bg-blue-500 transition-colors"
      >
        Crear Categorias
      </Link>

      <div className="py-10">
        <Link
          to={"/admin"}
          className="bg-blue-600 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-lg hover:bg-blue-500 transition-colors"
        >
          Admin de Categorias
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
