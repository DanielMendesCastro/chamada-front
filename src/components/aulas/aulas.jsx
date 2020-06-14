import React, { Component } from 'react'
import {
    IonCard, IonCardHeader, IonCardSubtitle,
    IonCardTitle, IonCardContent
} from '@ionic/react'
import Main from '../template/Main'


export default class Aula extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Main>
                
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Engenharia de Software I</IonCardTitle>
                        <IonCardSubtitle>Segunda - Manhã - 1° Horario</IonCardSubtitle>
                        <IonCardContent>Professor Carlão</IonCardContent>
                    </IonCardHeader>
                </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Engenharia de Software II</IonCardTitle>
                        <IonCardSubtitle>Segunda - Manhã - 2° Horario</IonCardSubtitle>
                        <IonCardContent>Professor Carlão</IonCardContent>
                    </IonCardHeader>
                </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Engenharia de Software I</IonCardTitle>
                        <IonCardSubtitle>Segunda - Noite - 1° Horario</IonCardSubtitle>
                        <IonCardContent>Professor Carlão</IonCardContent>
                    </IonCardHeader>
                </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Engenharia de Software II</IonCardTitle>
                        <IonCardSubtitle>Segunda - Noite - 2° Horario</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>Professor Carlão</IonCardContent>
                </IonCard>
                
            </Main>
        )
    }
}