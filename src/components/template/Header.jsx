import './Header.css'
import React from 'react'

export default props =>
    <header className="header d-sm-flex flex-column justify-content-center"> 
        <h1 className="mt-3">
            <i className={`fa fa-${props.icon}`}></i> {props.title} 
        </h1>
    </header>
