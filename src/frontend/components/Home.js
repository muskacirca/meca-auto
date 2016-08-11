'use strict'

import React from 'react'

import Scrollchor from 'react-scrollchor';

class Home extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return  <div className="site-container">
                    <div id="repair" className="div1 row anchor">
                        <div className="col-md-6 img-presentation">

                        </div>
                        <div className="col-md-6 text-presentation __right">
                            <h1>Réparation</h1>
                            <p>Meca Pièces Auto vous accueille dans son centre auto situé à Pringy.</p>
                            <p>Nos mécaniciens, spécialisés en réparation automobile, bénéficient d’un large savoir-faire offrant à nos clients une intervention de qualité sur leur véhicule.</p>
                            <p>Nous vous accompagnons à travers une qualité de service ainsi que par une prise en charge rapide de votre véhicule.</p>
                            <p>Nous sommes disponible et à votre écoute pour toutes demandes de diagnostic sur votre véhicule ou renseignements complémentaires concernant une intervention de réparation sur votre automobile.</p>
                        </div>
                    </div>
                    <div id="care" className="div2 row anchor">

                        <div className="col-md-6 col-sm-6 col-sm-push-6 col-md-push-6">
                            <div className="img-presentation"/>
                        </div>
                        <div className="col-md-6 text-presentation col-md-pull-6 col-sm-pull-6 __left">
                            <h1>Entretien</h1>
                            <p>Meca Pièces Auto vous accueille dans son centre auto situé à Pringy.</p>
                            <p>Nos mécaniciens, spécialisés en réparation automobile, bénéficient d’un large savoir-faire offrant à nos clients une intervention de qualité sur leur véhicule.</p>
                            <p>Nous vous accompagnons à travers une qualité de service ainsi que par une prise en charge rapide de votre véhicule.</p>
                            <p>Nous sommes disponible et à votre écoute pour toutes demandes de diagnostic sur votre véhicule ou renseignements complémentaires concernant une intervention de réparation sur votre automobile.</p>
                        </div>
                    </div>
                    <div id="stock" className="div3 row anchor">
                        <div className="col-md-6 img-presentation">
                        </div>
                        <div className="col-md-6 text-presentation __right">
                            <h1>Ventes de pièces détachées</h1>
                            <p>Meca Pièces Auto vous accueille dans son centre auto situé à Pringy.</p>
                            <p>Nos mécaniciens, spécialisés en réparation automobile, bénéficient d’un large savoir-faire offrant à nos clients une intervention de qualité sur leur véhicule.</p>
                            <p>Nous vous accompagnons à travers une qualité de service ainsi que par une prise en charge rapide de votre véhicule.</p>
                            <p>Nous sommes disponible et à votre écoute pour toutes demandes de diagnostic sur votre véhicule ou renseignements complémentaires concernant une intervention de réparation sur votre automobile.</p>
                        </div>
                    </div>
                </div>
    }
}

export default Home
