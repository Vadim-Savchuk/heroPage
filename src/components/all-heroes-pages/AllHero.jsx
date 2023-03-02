import { useState, useEffect } from 'react';
import { NavLink }             from 'react-router-dom'

import MiniHeroCard from '../all-hero-card/MiniHeroCard'
import Loading      from '../sceleton-loading/Loading';
import Pagination   from '../pagination/Pagination';

import './AllHero.css'

function AllHero({ heroes, search }) {

    // Filter
    const filter = heroes.filter(obj => {
        if (obj.name.toLowerCase().includes(search.toLowerCase())) {
            return true
        }

        return false
    })
    // Result
    const result = filter.map(hero => {
        return <NavLink
            key={hero.id}
            className='link-card'
            to={`/hero/${hero.id}`}
            onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }}
        >
            <MiniHeroCard
                heroes={heroes}
                name={hero.name}
                img={hero.images.lg}
                comics={hero.biography.publisher}
            />

        </NavLink>
    });
    // Paginate
    const [thisPage, setThisPage] = useState(1)
    const [elemsLength, setElemsLength] = useState(12)
    const lastPage = thisPage * elemsLength
    const firstPage = lastPage - elemsLength

    // Scroll to Top
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <main>
            <section>
                <div className='heroes'>
                    {result.length !== 0 ? result.slice(firstPage, lastPage) : <Loading />}
                </div>

                <Pagination elemsLength={elemsLength} totalPage={heroes.length} setThisPage={setThisPage} thisPage={thisPage} />
            </section>
        </main>
    )
}

export default AllHero