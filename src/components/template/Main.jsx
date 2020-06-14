import './Main.css'
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { IonContent } from '@ionic/react'

export default props =>
    <React.Fragment>
        <Header {...props} />
        <IonContent>
            <main className="content container-fluid">
                <div className="p-3 mt-3 ">
                    {props.children}
                </div>
            </main>
            <Footer />
        </IonContent>
        
    </React.Fragment>
