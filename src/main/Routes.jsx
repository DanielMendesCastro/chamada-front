import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import aluno from '../components/aluno/aluno'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={aluno} />
        <Redirect from='*' to="/" /> 
    </Switch>
