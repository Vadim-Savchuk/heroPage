import { NavLink } from 'react-router-dom'

import './Search.css'

function Search({ heroes, setSearch, search }) {

    const filter = heroes.filter(obj => {
        if (obj.name.toLowerCase().includes(search.toLowerCase())) {
            return true
        }

        return false
    })

    const result = filter.map(hero => {
        return <NavLink
            key={hero.id}
            to={`/hero/${hero.id}`}
            className='autocomplete-item'
            onClick={() => setSearch('')}
        >
            <img className='autocomplete-item-img' src={hero.images.lg} alt={hero.name} />
            {hero.name}
        </NavLink>
    });


    return (
        <div className='search-offer'>
            <input
                type='text'
                value={search}
                placeholder='Batman' className='search'
                onChange={(event => setSearch(event.target.value))}
            />
            <ul className='autocomplete'>
                {search.length !== 0 ? result : null}
            </ul>
        </div>
    )
}

export default Search