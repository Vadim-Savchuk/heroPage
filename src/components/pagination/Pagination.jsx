import { useEffect } from 'react';
import './Pagination.css'

function Pagination({ elemsLength, totalPage, setThisPage, thisPage }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPage / elemsLength); i++) {
        pageNumbers.push(i)
    }

    const pages = pageNumbers.map(page => {
        return <li
            key={page}
            className='pagenation-page'
            onClick={(event) => {setThisPage(event.target.textContent); window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}}
        >{page}</li>
    })

    return (
        <ul className='pagination-offer'>
            <>{pages[thisPage - 2]}</>
            <>{pages[thisPage - 1]}</>
            <>{pages[thisPage]}</>
        </ul>
    )
}

export default Pagination