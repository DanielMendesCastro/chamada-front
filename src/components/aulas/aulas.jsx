import React, { Component } from 'react'
import {
    IonCard, IonCardHeader, IonCardSubtitle, IonItem,
    IonCardTitle, IonCardContent, IonModal, IonButton, IonContent,
    IonFab, IonFabButton, IonIcon
} from '@ionic/react'
import Main from '../template/Main'
import { close, camera } from 'ionicons/icons';
import { usePhotoGallery } from '../camera/camera';

import { useCamera } from '@ionic/react-hooks/camera';
import { CameraResultType, CameraSource, CameraPhoto, Capacitor, FilesystemDirectory } from "@capacitor/core";


export default class Aula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    setShowModal(value) {
        this.setState({ showModal: value })
    }

    takePhoto() {
        useCamera({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 25
          });
    }

    render() {
        ;
        return (
            <Main>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Engenharia de Software I</IonCardTitle>
                        <IonCardSubtitle>Segunda - Manhã - 1° Horario</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>Professor Carlão</IonCardContent>
                    <IonItem>
                        <IonButton size="small" onClick={() => this.setShowModal(true)}>Abrir aula</IonButton>
                    </IonItem>
                </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Engenharia de Software II</IonCardTitle>
                        <IonCardSubtitle>Segunda - Manhã - 2° Horario</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>Professor Carlão</IonCardContent>
                    <IonItem>
                        <IonButton size="small" onClick={() => this.setShowModal(true)}>Abrir aula</IonButton>
                    </IonItem>
                </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Engenharia de Software I</IonCardTitle>
                        <IonCardSubtitle>Segunda - Noite - 1° Horario</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>Professor Carlão</IonCardContent>
                    <IonItem>
                        <IonButton size="small" onClick={() => this.setShowModal(true)}>Abrir aula</IonButton>
                    </IonItem>
                </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Engenharia de Software II</IonCardTitle>
                        <IonCardSubtitle>Segunda - Noite - 2° Horario</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>Professor Carlão</IonCardContent>
                    <IonItem>
                        <IonButton size="small" onClick={() => this.setShowModal(true)}>Abrir aula</IonButton>
                    </IonItem>
                </IonCard>
                <IonModal isOpen={this.state.showModal}>
                    
                        <p>This is modal content</p>
                        <IonFab vertical="top" horizontal="end" slot="fixed">
                            <IonFabButton onClick={() => this.setShowModal(false)}>
                                <IonIcon icon={close} />
                            </IonFabButton>
                        </IonFab>

                        <IonFab vertical="bottom" horizontal="center" slot="fixed">
                            <IonFabButton onClick={() => this.takePhoto()}>
                                <IonIcon icon={camera}></IonIcon>
                            </IonFabButton>
                        </IonFab>
                    
                </IonModal>
            </Main>
        )
    }
}