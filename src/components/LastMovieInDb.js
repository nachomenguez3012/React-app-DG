import React from 'react';
import imagenFondo from '../assets/images/450_1000.webp';

function LastMovieInDb(){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto cargado en la base de datos</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>GTA 5 es la quinta entrega de la exitosa saga de videojuegos sandbox desarrollada por Rockstar Games, Grand Theft Auto. Con millones de ventas a sus espaldas y uno de los mundos abiertos más ricos hasta la fecha, Grand Theft Auto V transporta al jugador a Los Santos, una extensa y soleada metrópolis en declive que lucha por mantenerse a flote en una era de incertidumbre económica y realities baratos que referencia de una forma paródica a la Los Ángeles de nuestro tiempo. En este contexto tan crítico y sarcástico de la sociedad actual, tres criminales muy diferentes barajan sus probabilidades de éxito: Franklin, un estafador callejero en busca de mucho dinero; Michael, profesional ex convicto con un retiro muy diferente al que imaginaba; y por último Trevor, un maníaco violento cuya motivación pasa por encontrar drogas baratas que meterse y propinar nuevos atracos. Los tres unidos crean una banda en la que se lo jugarán al todo o nada para lograr el gran golpe de sus vidas: hacerse ricos. Y es que GTA 5 combina historia y jugabilidad de una nueva forma vista en la serie. Los jugadores entran y salen repetidamente de las vidas de los tres personajes, participando en todos los aspectos de la historia entrelazada del juego. Un mundo abierto gigantesco repleto de posibilidades y experiencias: desde atracos, persecuciones policiales, carreras y tiroteos, hasta actividades más pintorescas como saltar en paracaídas, jugar al tenis o al golf entre otros. Además el título de Rockstar incluye un potente modo multijugador llamado GTA Online, un juego de mundo abierto dinámico y persistente para 16 jugadores (30 en PS4, Xbox One y PC) que comparte el contenido y la mecánica con Grand Theft Auto V, pero que se expande con nuevos contenidos adicionales de forma continua.</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle de producto</a>
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;
