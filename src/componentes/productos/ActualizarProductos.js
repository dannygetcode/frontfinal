import React, { useEffect, useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import crud from "../../conexiones/crud";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

const ActualizarProducto = () => {
  const navigate = useNavigate();
  const { idProducto } = useParams();
  //console.log(idProducto);
  const [producto, setProducto] = useState({
    nombre: "",
    descripcion: "",
    stock: "",
    precio: "",
    imagen: "",
  });

  const cargarProducto = async () => {
    const response = await crud.GET(`/api/producto/${idProducto}`);
    console.log(response);
    setProducto(response.producto1);
  };
  useEffect(() => {
    cargarProducto();
  }, []);
  const { nombre, descripcion, stock, precio, imagen } = producto;
  const onChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };
  const actualizarProducto = async () => {
    const data = {
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      stock: producto.stock,
      precio: producto.precio,
      imagen: producto.imagen,
    };
    const response = await crud.PUT(`/api/producto/${idProducto}`, data);
    console.log(response);
    const mensaje1 = "El producto se actualizo correctamente";
    swal({
      text: mensaje1,
      icon: "success",
      buttons: {
        confirm: {
          text: "OK",
          value: true,
          visible: true,
          className: "btn btn-primary",
          closeModal: true,
        },
      },
    });
    navigate("/admin");
  };
  const onSubmit = (e) => {
    e.preventDefault();
    actualizarProducto();
  };

  return (
    <>
      <Header />

      <div className="md:flex md:min-h-screen">
        <Sidebar />

        <main className="flex-1">
          <div className="mt-10 flex justify-center">
            <h1 className="inline bg-gradient-to-r from-yellow-500 via-yellow-700 to-indigo-500 bg-clip-text font-display text-5xl tracking-tight text-transparent">
              Actualizar Producto
            </h1>
          </div>

          <div className="mt-10 flex justify-center">
            <form
              className="my-10 bg-white shadow rounded-lg p-5"
              onSubmit={onSubmit}
            >
              <div className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold">
                  Nombre del producto
                </label>

                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Nombre"
                  className="uppercase w-full mt-3 p-3 borde rounded-lg bg-gray-50 caret-pink-500"
                  value={nombre}
                  onChange={onChange}
                />

                <label className="uppercase text-gray-600 block text-xl font-bold">
                  Descripción
                </label>

                <input
                  type="text"
                  id="descripcion"
                  name="descripcion"
                  placeholder="Descripción"
                  className="uppercase w-full mt-3 p-3 borde rounded-lg bg-gray-50 caret-pink-500"
                  value={descripcion}
                  onChange={onChange}
                />

                <label className="uppercase text-gray-600 block text-xl font-bold">
                  Stock del producto
                </label>

                <input
                  type="number"
                  id="stock"
                  name="stock"
                  placeholder="Stock"
                  className="uppercase w-full mt-3 p-3 borde rounded-lg bg-gray-50 caret-pink-500"
                  value={stock}
                  onChange={onChange}
                />

                <label className="uppercase text-gray-600 block text-xl font-bold">
                  Precio del producto
                </label>

                <input
                  type="number"
                  id="precio"
                  name="precio"
                  placeholder="Precio"
                  className="uppercase w-full mt-3 p-3 borde rounded-lg bg-gray-50 caret-pink-500"
                  value={precio}
                  onChange={onChange}
                />

                <label className="uppercase text-gray-600 block text-xl font-bold">
                  Imagen del producto
                </label>

                <input
                  type="text"
                  id="imagen"
                  name="imagen"
                  placeholder="Imagen"
                  className="uppercase w-full mt-3 p-3 borde rounded-lg bg-gray-50 caret-pink-500"
                  value={imagen}
                  onChange={onChange}
                />
              </div>

              <input
                type="submit"
                value="Actualizar Producto"
                className="bg-violet-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-violet-400 transition-colors"
              />
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default ActualizarProducto;