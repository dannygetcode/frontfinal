import React, { useEffect, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import crud from '../conexiones/crud';
import { Link, useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';

const ActualizarCategoria = () => {

  const navigate = useNavigate();

  const { idCategoria } = useParams();
  console.log(idCategoria);

  const [categoria, setCategoria] = useState({
    nombre: '',
    imagen: ''
  })

  const cargarCategoria = async () => {
    const response = await crud.GET(`/api/categoria/${idCategoria}`);
    setCategoria(response.categoria);
  }
  useEffect(() => {
    cargarCategoria();
  }, []);

  let { nombre, imagen } = categoria;
  const onChange = (e) => {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })
  }

  const actualizarCategoria = async () => {
    const data = {
      nombre: categoria.nombre,
      imagen: categoria.imagen
    }
    const response = await crud.PUT(`/api/categoria/${idCategoria}`, data);
    console.log(response);
    const mensaje1 = "la categoria se actualizó correctamente";

    swal({
      title: 'Información',
      text: mensaje1,
      icon: 'success',
      buttons: {
        confirm: {
          text: 'OK',
          value: true,
          visible: true,
          className: 'btn btn-primary',
          closeModal: true
        }
      }
    });
    navigate("/admin");
  }

  const onSubmit = (e) => {
    e.preventDefault();
    actualizarCategoria();
  }
  return (
    <>
      <Header />
      <div className='md:flex md:min-h-screen'>
        <Sidebar />
        <main className='flex-1'>
          <div className='mt-10 flex justify-center'>
            <h1 className="inline bg-gradient-to-r from-indigo-200 via-violet-700 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
              Actualizar Categoria
            </h1>
          </div>

          <div className='mt-10 flex justify-center' >
            <form
              className='my-10 bg-white shadow rounded-lg p-10 '
              onSubmit={onSubmit}
            >
              <div className='my-5'>
                <label className='uppercase text-gray-600 block text-xl font-bold' >Nombre de la categoria</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder='Nombre'
                  className='w-full mt-3 p-3 border rounded-lg bg-gray-50'
                  value={nombre}
                  onChange={onChange}
                />

                <label className='uppercase text-gray-600 block text-xl font-bold' >Imagen de la categoria</label>
                <input
                  type="text"
                  id="imagen"
                  name="imagen"
                  placeholder='imagen'
                  className='w-full mt-3 p-3 border rounded-lg bg-gray-50'
                  value={imagen}
                  onChange={onChange}
                />
              </div>

              <input
                type="submit"
                value="Actualizar Categoria"
                className="bg-violet-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-violet-400 transition-colors"
              />

            </form>
          </div >


        </main>
      </div>


    </>
  );
}

export default ActualizarCategoria;



















