import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
    <nav className='navbar navbar-dark navbar-expand-lg bg-primary'>
       
        <div className='navbar-brand'>
            Todo App
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink
                        className="nav-link" 
                        to="/" 
                        exact
                    >
                        Главная
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link" 
                        to="/about" 
                        exact
                    >
                        Информация
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav> 
)