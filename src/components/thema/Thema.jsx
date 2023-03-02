import './Thema.css'


import { useEffect, useState } from 'react'

import dark from '../../img/dark.png'
import white from '../../img/white.png'


function Thema() {

    // Thema
    const [thema, setThema] = useState('black')

    useEffect(() => {
        document.querySelector('body').className = thema;
    }, [thema]);

    return (
        <div className='thema'>

            <button
                className={thema === 'white' ? 'active' : ''}
                onClick={() => setThema('white')}
            >
                <img className='them-img' src={white} alt="Sun" />
            </button>

            <button
                className={thema === 'black' ? 'active' : ''}
                onClick={() => { setThema('black') }}
            >
                <img className='them-img' src={dark} alt="Moon" />
            </button>

        </div>
    )
}

export default Thema