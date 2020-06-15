import React, { Component } from 'react'
import camera from '../../assets/imgs/camera-outline.svg'
import {
    IonItem, IonLabel, IonPage,
    IonInput, IonButton, IonIcon,
    IonContent, IonFab, IonFabButton
} from '@ionic/react'
import { cameraOutline } from 'ionicons/icons';
import Main from '../template/Main'


const headerProps = {
    icon: 'users',
    title: 'Cadastro de Aluno',
    subtitle: 'Cadastro de Alunos'
}

export default class Aluno extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Main {...headerProps} >

                <div className="col-12 col-md-4 align-self-center align-items-center">
                    <IonContent>
                    <IonFab vertical="start" horizontal="center" slot="fixed">
          <IonFabButton>
            <IonIcon icon={cameraOutline} />
          </IonFabButton>
        </IonFab>

                    </IonContent>
                    <IonItem>
                        <IonLabel className="mt-5" position="floating">Nome Completo</IonLabel>
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

                    <IonButton className="mt-4" expand="block">
                        Salvar
                </IonButton>
                </div>
            </Main>
        )
    }
}