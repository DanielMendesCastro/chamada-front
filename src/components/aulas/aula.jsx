import React, { useState } from 'react'
import {
    IonCard, IonCardHeader, IonCardSubtitle, IonItem,
    IonCardTitle, IonCardContent, IonModal, IonButton, IonContent,
    IonFab, IonFabButton, IonIcon
} from '@ionic/react'
import Main from '../template/Main'
import { close, camera } from 'ionicons/icons';
import { usePhotoGallery } from '../camera/camera';

export default props => {
    
    const [modal, setModal] = useState(false);

    const { photos, takePhoto } = usePhotoGallery();

    return (
        <>
            <Main>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Engenharia de Software I</IonCardTitle>
                        <IonCardSubtitle>Segunda - Manhã - 1° Horario</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>Professor Carlão</IonCardContent>
                    <IonItem>
                        <IonButton size="small" onClick={() => setModal(true)}>Abrir aula</IonButton>
                    </IonItem>
                </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Engenharia de Software II</IonCardTitle>
                        <IonCardSubtitle>Segunda - Manhã - 2° Horario</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>Professor Carlão</IonCardContent>
                    <IonItem>
                        <IonButton size="small" onClick={() => setModal(true)}>Abrir aula</IonButton>
                    </IonItem>
                </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Engenharia de Software I</IonCardTitle>
                        <IonCardSubtitle>Segunda - Noite - 1° Horario</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>Professor Carlão</IonCardContent>
                    <IonItem>
                        <IonButton size="small" onClick={() => setModal(true)}>Abrir aula</IonButton>
                    </IonItem>
                </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Engenharia de Software II</IonCardTitle>
                        <IonCardSubtitle>Segunda - Noite - 2° Horario</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>Professor Carlão</IonCardContent>
                    <IonItem>
                        <IonButton size="small" onClick={() => setModal(true)}>Abrir aula</IonButton>
                    </IonItem>
                </IonCard>
                <IonModal isOpen={modal}>

                    <IonFab vertical="top" horizontal="end" slot="fixed">
                        <IonFabButton onClick={() => setModal(false)}>
                            <IonIcon icon={close} />
                        </IonFabButton>
                    </IonFab>

                    <IonFab vertical="bottom" horizontal="center" slot="fixed">
                        <IonFabButton onClick={() => takePhoto()}>
                            <IonIcon icon={camera}></IonIcon>
                        </IonFabButton>
                    </IonFab>

                </IonModal>
            </Main>
        </>
    )
}