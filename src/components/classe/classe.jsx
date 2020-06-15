import React, { useState } from 'react'
import Main from '../template/Main'
import {
    IonListHeader, IonLabel, IonList, IonItem,
    IonIcon, IonFabButton, IonRow, IonHeader,
    IonToolbar, IonTitle, IonFab, IonCol
} from '@ionic/react'
import { camera, closeCircleSharp, checkmarkCircleSharp, save, exit } from 'ionicons/icons';
import { usePhotoGallery } from '../camera/camera';

export default props => {

    const { photos, takePhoto } = usePhotoGallery();

    return (
        <>
            <Main>
                <IonListHeader>
                    <IonItem>
                        <h2>Engenharia de Software I</h2>
                    </IonItem>
                </IonListHeader>
                <IonList>
                    <IonItem>
                        <IonLabel>Daniel Castro</IonLabel>
                        <IonIcon icon={checkmarkCircleSharp} />
                        <IonIcon icon={closeCircleSharp} />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Joãozinho Figueiredo</IonLabel>
                        <IonIcon icon={checkmarkCircleSharp} />
                        <IonIcon icon={closeCircleSharp} />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Luke Skywalker</IonLabel>
                        <IonIcon icon={checkmarkCircleSharp} />
                        <IonIcon icon={closeCircleSharp} />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Pedro Ribeiro</IonLabel>
                        <IonIcon icon={checkmarkCircleSharp} />
                        <IonIcon icon={closeCircleSharp} />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Welber Silverio</IonLabel>
                        <IonIcon icon={checkmarkCircleSharp} />
                        <IonIcon icon={closeCircleSharp} />
                    </IonItem>
                </IonList>
                <IonRow>
                    <IonCol>
                        <IonFabButton onClick={() => takePhoto()}>
                            <IonIcon icon={camera}></IonIcon>
                        </IonFabButton>
                    </IonCol>
                    <IonCol>
                        <IonFabButton color="success">
                            <IonIcon icon={save} ></IonIcon>
                        </IonFabButton>
                    </IonCol>
                    <IonCol>
                        <IonFabButton color="danger">
                            <IonIcon icon={exit}></IonIcon>
                        </IonFabButton>
                    </IonCol>
                </IonRow>
            </Main>
        </>
    )
}