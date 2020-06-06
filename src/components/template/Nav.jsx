import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
        {}
            <Link to="/home"> 
                <i className='fa fa-home'> Início</i>
            </Link>
            <Link to="/users">
                <i className={`fa fa-${props.icon}`}></i> {props.title} 
            </Link>
        </nav>
    </aside>