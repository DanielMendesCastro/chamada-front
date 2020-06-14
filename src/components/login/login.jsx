import React, { Component } from 'react'
import { IonItem, IonLabel, IonPage, IonIcon, IonInput, IonButton } from '@ionic/react'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: ''
        };
    }

    componentWillMount() {

    }

    render() {
        return (
            <IonPage className="ion-align-items-center" >
                <IonItem >
                    <IonLabel position="floating">Usuário</IonLabel>
                    <IonInput value={this.state.user} ></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Senha</IonLabel>
                    <IonInput value={this.state.password} ></IonInput>
                </IonItem>

                <IonButton>
                    Entrar
                </IonButton>
            </IonPage>
        )
    }
}