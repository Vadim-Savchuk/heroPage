import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import './Hero.css'

function Hero() {
    const [thisHero, setThisHero] = useState({})
    const { id }                  = useParams()

    // Response Server
    useEffect(() => {
        async function getHero() {
            try {
                const response = await fetch(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
                const data     = await response.json()

                setThisHero(data)
            } catch (error) {
                console.log("Сталась помилка" + error);
            }
        }
        getHero()
    }, [id])

    

    return (
        <main>
            <section className='hero-page'>
                <div className='hero-page-card'>
                    <div className='hero-page-offer'>

                        {/* Img */}
                        <div className='hero-page-img-offer'>
                            <img className='hero-page-img' src={thisHero.images?.lg} alt={thisHero?.name} />
                            <p className='comics-page'>{thisHero.biography?.publisher}</p>
                        </div>

                        {/* Powerstats */}
                        <div className='biography-info dod'>
                            <p className='biography'>Intelligence: {thisHero.powerstats?.intelligence}</p>
                            <p className='biography'>Strength: {thisHero.powerstats?.strength}</p>
                            <p className='biography'>Speed: {thisHero.powerstats?.speed}</p>
                            <p className='biography'>Durability: {thisHero.powerstats?.durability}</p>
                            <p className='biography'>Power: {thisHero.powerstats?.power}</p>
                            <p className='biography'>Combat: {thisHero.powerstats?.combat}</p>
                        </div>

                    </div>

                    {/* Name */}
                    <div className='hero-page-info-offer'>
                        <div className='hero-page-info-names'>
                            <h2 className='hero-page-name'>
                                {thisHero?.name}
                            </h2>

                            <h2 className='hero-page-name'>
                                ({thisHero.biography?.aliases[0]})
                            </h2>
                        </div>

                        {/* Biography */}
                        <div className='biography-info'>
                            <p className='biography'>Gender:    {thisHero.appearance?.gender}</p>
                            <p className='biography'>Height:    {thisHero.appearance?.height[1]}</p>
                            <p className='biography hr'>Weight: {thisHero.appearance?.weight[1]}</p>
                            <p className='biography'>Work:      {thisHero.work?.occupation}</p>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    )
}

export default Hero
