import React, { Component } from 'react'
import {
    IonItem, IonLabel, IonPage,
    IonInput, IonButton, IonAvatar
} from '@ionic/react'
import Main from '../template/Main'


export default class Aluno extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Main>
                <div className="col-12 col-md-4 align-self-center align-items-center">
                    <IonAvatar>
                        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                    </IonAvatar>
                    <IonItem>
                        <IonLabel position="floating">Nome Completo</IonLabel>
                        <IonInput  ></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">CPF</IonLabel>
                        <IonInput  ></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Email</IonLabel>
                        <IonInput  ></IonInput>
                    </IonItem>

                    <IonButton>
                        Salvar
                </IonButton>
                </div>
            </Main>
        )
    }
}