import React, { useEffect, useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import crud from "../../conexiones/crud";
import { Link, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import { ViewProductos } from "./ViewProductos";

const HomeProductos = () => {
  const navigate = useNavigate();
  const { idCategoria } = useParams();

  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
      }
    };
    autenticarUsuario();
  }, [navigate]); // [] hacen que solo se ejecute una vez el useEffect

  const [productos, setProductos] = useState([]);

  const cargarProductos = async () => {
    const response = await crud.GET(`/api/producto/${idCategoria}`);
    setProductos(response);
  };
  console.log(productos);
  useEffect(() => {
    cargarProductos();
  }, []);

  return (
    <>
      <Header />
      <div className="md:flex md:min-h-screen">
        <Sidebar />
        <main className="flex-1">
          <div className="mt-10 flex justify-center">
            <h1 className="inline bg-gradient-to-r from-yellow-500 via-yellow-700 to-indigo-500 bg-clip-text font-display text-5xl tracking-tight text-transparent">
              Listado de Productos
            </h1>
          </div>

          <div className="p-12">
            <Link
              to={`/crear-producto/${idCategoria}`}
              className="bg-blue-700 hover:bg-blue-500 transition-colors w-full p-3 text-white uppercase font-bold mt-5 text-center rounded-lg"
            >
              Crear Producto
            </Link>
          </div>

          <div className="bg-gradient-to-r from-white via-indigo-200 to-blue-300 min-h-screen shadow mt-10 rounded-lg">
            {productos.map((producto) => (
              <ViewProductos key={producto._id} producto={producto} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};
export default HomeProductos;
