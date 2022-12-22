import React from "react";

export const ViewProductos = ({ producto }) => {
  const { nombre, descripcion, stock, precio, imagen } = producto;
  return (
    <div className="border-r p-5 flex justify-between items-center">
      <div className="flex flex-col items-start">
        <p className="mb-1 text-xl text-black font-bold my-5 mx-10">
          Nombre:{"   "}
          {nombre}
        </p>
        <p className="mb-1 text-xl text-black font-bold my-5 mx-10  ">
          Descripción:{"   "}
          {descripcion}
        </p>
        <p className="mb-1 text-xl text-black font-bold my-5 mx-10">
          Stock:{"   "}
          {stock}
        </p>
        <p className="mb-1 text-xl text-black font-bold my-5 mx-10">
          Precio:{"   "}
          {precio}
        </p>
        <img src={imagen} width="150" height="150"></img>
      </div>

      <div className="flex flex-col lg:flex-row gap-2">
      
        <button
        
          className="bg-yellow-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
        
        >
          Actualizar
        </button>
        <button
          className="bg-red-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
         
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ViewProductos;
