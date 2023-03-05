import { useEffect, useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Abouth from './components/abouth/Abouth';
import Header from './components/header/Header';
import Hero from './components/hero-card-page/Hero';
import AllHero from './components/all-heroes-pages/AllHero';

import './App.css';

function App() {
    const [search, setSearch] = useState('')
    const [heroes, setHeroes] = useState([])

    // Response server all heroes
    useEffect(() => {
        const getFetch = async () => {
            try {
                const response = await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`)
                const data = await response.json()

                setHeroes(data)
            } catch (error) {
                console.log(`Сталась помилка + ${error}`);
            }
        }
        getFetch()
    }, [])

    return (
        <div className='wrapper'>
            <div className='container'>
                <Router>
                    <Header
                        search={search}
                        heroes={heroes}
                        setSearch={setSearch}
                    />

                     <Routes>
                        <Route path='/heroPage/' element={<AllHero heroes={heroes} search={search} />} />
                        <Route path='/abouth' element={<Abouth />} />
                        <Route path='/hero/:id' element={<Hero />} />
                    </Routes>

                </Router>
            </div>
        </div>
    );
}

export default App;
