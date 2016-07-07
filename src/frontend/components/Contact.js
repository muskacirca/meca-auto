'use strict'

import React from 'react'
import Map from './Map'

class Contact extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return  <div  className="contact-page">
                    <div className="floating-panel">
                        <input className="form-control" placeholder="Enter your address ..."/>
                    </div>
                    <Map />
                    <div>
                        <i className="fa fa-home" aria-hidden="true "/>
                        <p>39 avenue de Fontainebleau 77310 PRINGY</p>
                        <p><i className="fa fa-phone" aria-hidden="true"/>01 64 41 80 97</p>
                        <p><i className="fa fa-fax" aria-hidden="true"/>01 43 76 91 72</p>
                        <p><i className="fa fa-clock-o" aria-hidden="true"/>Nos Horaires d’Ouvertures :</p>
                        <p>Du Lundi au Vendredi :</p>
                        <p>8h30 – 12h30  /  13h30 – 18h30</p>
                    
                        <p>Samedi :</p>
                        <p>9h00 – 13h00</p>
                    </div>
                    
                </div>
    }
}

// 

export default Contact
