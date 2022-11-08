import React from 'react';
import ChartRow from './ChartRow';

let tableRowsData = [
    {
        Title: 'FIFA 23 ',
        Length: ["PS4", "PS5", "XBOX ONE"],
        Rating: "Deporte",
        Categories: ["1 Jugador", "Multijugador"],
        Awards: "Español",
    },
    {
        Title: "Grand Theft Auto V",
        Length: ["PS3", "PS4", "PS5", "XBOX ONE", "XBOX 360"],
        Rating: "Accion / Disparos / Aventura",
        Categories:  ["1 Jugador", "Multijugador"],
        Awards:  ["Español", "Ingles"],
    },
    
]


function Chart (){
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Tambien para</th>
                                <th>Género</th>
                                <th>Modo de juego</th>
                                <th>Idioma</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;