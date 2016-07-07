'use strict'

import React from 'react'
import Map from './Map'

class Contact extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            customerAddress: ""
        }
    }


    handleSearch(e) {
        e.preventDefault();
        this.setState({customerAddress: this.refs.addressField.value})

    }
    
    submit(customerAddress) {
        
    }

    handlePressEnter(e) {
        if(e.keyCode === 13 && this.state.customerAddress != ""){
            console.log("this.refs.addressField.value : " + JSON.stringify(this.refs.addressField.value));
            this.submit(this.state.customerAddress)
        }
    }

    render() {
        return  <div  className="contact-page">
                    <div className="floating-panel">
                            <div className="input-group">
                                
                                <input id="addressField"
                                       ref="addressField"
                                       type="text"
                                        className="form-control"
                                       placeholder="Enter your address ..."
                                       aria-describedby="basic-addon1"
                                       onKeyDown={this.handlePressEnter.bind(this)} />
                                <span className="input-group-btn" aria-hidden="true" id="basic-addon1">
                                    <button className="btn btn-default" type="button" onClick={this.handleSearch.bind(this)}>Search</button>
                                </span>
                            </div>
                    </div>
                    <Map customerAddress={this.state.customerAddress}/>
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
