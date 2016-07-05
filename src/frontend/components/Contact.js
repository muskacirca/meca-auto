'use strict'

import React from 'react'

class Contact extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return  <div>
                    <i className="fa fa-home" aria-hidden="true"/> 39 avenue de Fontainebleau 77310 PRINGY
                    <i className="fa fa-phone" aria-hidden="true"/>01 64 41 80 97
                    <i className="fa fa-fax" aria-hidden="true"/>01 43 76 91 72
                    <i className="fa fa-clock-o" aria-hidden="true"/>Nos Horaires d’Ouvertures :
                    <p>Du Lundi au Vendredi :</p>
                    <p>8h30 – 12h30  /  13h30 – 18h30</p>

                    <p>Samedi :</p>
                    <p>9h00 – 13h00</p>
                </div>
    }
}

export default Contact
