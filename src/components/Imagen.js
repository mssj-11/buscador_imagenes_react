import React from 'react';
import '../App.css';

const Imagen = ({imagen}) => {
    //  Extrayendo las variables
    const { largeImageURL, previewURL, views, tags, downloads, likes } = imagen;

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top mx-auto" />
                <div className="card-body">
                    <p className="card-text"><b>Vistas:</b> {views}</p>
                    <p className="card-text"><b>Me gusta:</b> {likes}</p>
                    <p className="card-text"><b>Descargas:</b> {downloads}</p>
                </div>
                <div className="card-footer">
                    <a href={largeImageURL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">Ver Imagen</a>
                </div>
            </div>
        </div>
    );
}

export default Imagen;