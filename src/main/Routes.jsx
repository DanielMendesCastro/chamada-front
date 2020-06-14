import React from 'react'
import { IonReactRouter } from '@ionic/react-router';
import { IonRouterOutlet } from '@ionic/react';
import { Route, Redirect } from 'react-router';


import Home from '../components/home/Home'
import aluno from '../components/aluno/aluno'
import aluno2 from '../components/aluno/aluno2'
import aulas from '../components/aulas/aula'
    
export default props =>
    <IonReactRouter>
        <IonRouterOutlet>
            <Route path="/home" component={Home} />
            <Route path="/users" component={aluno} />
            <Route path='/alunos' component={aluno2} />
            <Route path='/aulas' component={aulas} />
            <Redirect exact from="/" to="/home" />
        </IonRouterOutlet>
    </IonReactRouter>
