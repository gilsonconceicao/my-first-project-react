import React, {useState} from 'react'

import '../assets/css/App.css'

const EventsUseState = () => {
  // text
  const [textName, setName] = useState('Clique aqui')
  // count
  const [count, setCount] = useState(0)
  return (
    <div>
        <div className="usestate-enet">
            <h2>useState com eventos</h2>
            <div className="functions-methods">
                <div>
                    <button onClick={() => setName('Botão foi clicado')}>{textName}</button>

                    <p>useState localizou <span className="number">{count}</span> cliques no botão abaixo.</p>

                    <button onClick={() => setCount(number => number + 1)}>+1</button>
                    <button onClick={() => setCount(number => number -1)}>-1</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventsUseState