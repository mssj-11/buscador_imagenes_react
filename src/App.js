import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';

function App() {
  //  State de la APP
  const [ busqueda, guardarBusqueda ] = useState('');
  const [ imagenes, guardarImagen ] = useState([]);
  const [ paginaactual, guardarPaginaActual ] = useState(1);
  const [ totalpaginas, guardarTotalPaginas ] = useState(1);

  useEffect(() => {
    const consultarApi = async () => {
      if(busqueda === '') return;

      const imagenesPorPagina = 20;
      const key = '1732750-d45b5378879d1e877cd1d35a6';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaactual}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      guardarImagen(resultado.hits);
      //  Calcular Total de paginas
      const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina);
      guardarTotalPaginas(calcularTotalPaginas);

      //  Mover la pantalla hacia arriba
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({ behavior: 'smooth' });
    }
    consultarApi();
  }, [busqueda, paginaactual]);

  //  Definir la pagina anterior
  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaactual - 1;
    if(nuevaPaginaActual === 0) return;

    guardarPaginaActual(nuevaPaginaActual);
  }
  //  Definir la pagina siguiente
  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaactual + 1;
    if(nuevaPaginaActual > totalpaginas) return;

    guardarPaginaActual(nuevaPaginaActual);
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="text-center mb-4">Buscador de Imagenes</h1>

        <Formulario guardarBusqueda={guardarBusqueda} />
      </div>

      <div className="row justify-content-center mb-5">
        <ListadoImagenes imagenes={imagenes} />

        {  (paginaactual === 1) ? null : (
          <button onClick={paginaAnterior} type="button" className="mr-1 btn-primary">&laquo; Anterior</button>
        ) }
        
        { (paginaactual === totalpaginas) ? null : (
          <button onClick={paginaSiguiente} type="button" className="mr-1 btn-primary">Siguiente &raquo;</button>
        )  }
      </div>
      <br />
      
      <div className="card-footer text-center text-white bg-primary fixed-bottom mt-5">
        2023 - Creado por <b>MSS</b>
      </div>
    </div>
  );
}

export default App;
