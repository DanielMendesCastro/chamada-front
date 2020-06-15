import React, { useState } from 'react'
import {
    IonCard, IonCardHeader, IonCardSubtitle, IonItem,
    IonCardTitle, IonCardContent, IonButton, IonSelect, IonSelectOption, 
} from '@ionic/react'
import Main from '../template/Main'

export default props => {

    const headerProps = {
        icon: 'calendar-check-o',
        title: 'Aulas',
        subtitle: 'Lista de aulas'
    }    
    return (
        <>
            <Main {...headerProps}>
                <IonSelect okText="OK"  placeholder="Segunda">
                    <IonSelectOption value="terça">Segunda</IonSelectOption>
                </IonSelect>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Engenharia de Software I</IonCardTitle>
                        <IonCardSubtitle>Segunda - Manhã - 1° Horario</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>Professor Carlos Lucas</IonCardContent>
                    <IonItem>
                        <IonButton size="small" className="buttonClassSelect">Abrir aula</IonButton>
                    </IonItem>
                </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Engenharia de Software II</IonCardTitle>
                        <IonCardSubtitle>Segunda - Manhã - 2° Horario</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>Professor Carlos Lucas</IonCardContent>
                    <IonItem >
                        <IonButton size="small" className="buttonClassSelect">Abrir aula</IonButton>
                    </IonItem>
                </IonCard>

            </Main>
        </>
    )
}