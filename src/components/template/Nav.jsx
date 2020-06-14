import './Nav.css'
import React from 'react'
import { IonNav, IonMenu, IonContent, IonList, IonItem } from '@ionic/react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {}
            <Link to="/home">
                <i className='fa fa-home'> Início</i>
            </Link>
            <Link to="/users" isActive={false}>
                <i className={`fa fa-${props.icon}`}></i> {props.title}
            </Link>
        </nav>
    </aside>
//     <IonMenu className="menu-area">
//     <IonContent>
//         <IonList>
//             <IonItem>Menu Item</IonItem>
//             <IonItem>Menu Item</IonItem>
//             <IonItem>Menu Item</IonItem>
//         </IonList>
//     </IonContent>
// </IonMenu>