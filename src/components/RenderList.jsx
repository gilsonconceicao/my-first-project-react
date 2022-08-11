import React, { useState } from 'react'

import '../assets/css/App.css'

const RenderList = () => {
    const [listSeries] = useState([
        {id: 1, serie: 'The flash', ano: 2014}, 
        {id: 2, serie: 'On My Block', ano: 2018}, 
        {id: 3, serie: 'Stranger Things', ano: 2016}, 
        {id: 4, serie: 'Dark', ano: 2017}, 
        {id: 5, serie: 'Sintonia', ano: 2019}, 
        {id: 6, serie: 'Manifest', ano: 2018}
    ]); 

    return (
        <div>
            <div className="render-list">
                <h2>Render List - Obter séries</h2>
                <div>
                    <ul>
                        {listSeries.map((list) => (
                            <li key={list.id}>
                                {list.id} <br /> 
                                Nome: {list.serie} <br /> 
                                Ano de lançamento: {list.ano}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RenderList; 