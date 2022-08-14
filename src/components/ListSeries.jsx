import React, { useState } from 'react'
import {FiUsers} from "react-icons/fi" 
import '../App.css'

const ListSeries = ({title, detals, image, statusSerie, reference, like}) => {
    {/* values props */}

    const [learemMore, setMore] = useState('Saber mais')

  return (
    <div>
        <div className='box-series'>
            <div><img src={image}/></div>
            <article>
                <h3>{title}</h3>
                <p>{detals}</p>
                <span className='flex-buttons'>
                    <span>{statusSerie}</span>
                    <a onClick={() => setMore} href={reference} target='_blank'>{learemMore}</a>
                </span>
                <span className='like'>
                    <FiUsers/> {like}
                </span>
            </article>
        </div>
    </div>
  )
}

export default ListSeries;