import './Menu.css'
import React from 'react'
import { Link }from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Início</Link>
                </li>
                <li>
                    <Link to="/about">Sobre</Link>
                    {/* <a href="/about">Sobre</a> */}
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu