import React from 'react'
import Main from '../template/Main'
import Login from '../login/login'
import Logo from '../template/Logo'

export default props =>
    <Main >
        <div className="col-12 col-md-3 justify-content-center">
            <Logo className="col-12 col-md-3" />
        </div>
        <div className="col-12 col-md-4 justify-content-center">
            <Login />
        </div>

        <div className="display-4"></div>
        <hr />
        <p className="mb-0">Esse sistema tem por objetivo, agilizar e simplificar o processo de chamada efetuado em uma sala de aula!
        </p>
    </Main>
    