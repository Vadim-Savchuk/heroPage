import { NavLink } from 'react-router-dom'

import Search from '../search/Search'
import logo from '../../img/logo.png'

import './Header.css'
import Thema from '../thema/Thema'
function Header({ search, setSearch, heroes }) {

    return (
        <header className='header'>

            <div className='header-left-box'>
                {/* Logo */}
                <NavLink to='/'>
                    <img className='logo' src={logo} alt="Logo" />
                </NavLink>

                {/* Thema */}
                <Thema />
            </div>


            {/* Menu */}
            <nav className='menu'>
                <NavLink className='link active' to='/heroPage'>
                    Heroes
                </NavLink>

                <NavLink className='link' to='/abouth'>
                    Abouth
                </NavLink>
            </nav>

            {/* Search */}
            <Search search={search} setSearch={setSearch} heroes={heroes} />

        </header>
    )
}

export default Header
