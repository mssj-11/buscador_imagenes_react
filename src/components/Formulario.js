import React, { useState } from 'react';
import Error from './Error';

const Formulario = ({guardarBusqueda}) => {

    //  Validacion del formulario
    const [termino, guardarTermino] = useState('');
    const [error, guardarError] = useState(false);

    const buscarImagenes = e => {
        e.preventDefault();
        //  Validacion
        if(termino.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);
        //  Enviar el termino de busqueda
        guardarBusqueda(termino);
    }

    return(
        <form onSubmit={buscarImagenes}>
            <div className="row">
                <div className="form-group col-md-8">
                    <input type="text" className="form-control form-control-lg" placeholder="Busca una imagen, ejemplo: goku o naruto"
                    onChange={ e => guardarTermino(e.target.value)} />
                </div>
                <div className="form-group col-md-4">
                    <button type="submit" className="btn btn-lg btn-primary btn-block">Buscar</button>
                </div>
            </div>
            {/* En caso de que error exista, se creara el componente <Error> */}
            {  error ? <Error mensaje="Agrega un termino de busqueda" /> : null }
        </form>
    );
}

export default Formulario;