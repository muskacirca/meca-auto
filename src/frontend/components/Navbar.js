import React from 'react'
import {Link} from 'react-router'

import Scrollchor from 'react-scrollchor';


import {
    toggleClassInBody
} from '../../utils/utils'

class NavBar extends React.Component {

    constructor(props) {
        super(props);

        this.safeHandleClick = this.safeHandleClick.bind(this);

        this.state = {
            isUserMenuOpened: false
        }
    }

    handleClick(e) {
        e.preventDefault()
        var className = 'with--sidebar'
        toggleClassInBody(className)

    }

    safeHandleClick(path) {
        var className = 'with--sidebar'
        toggleClassInBody(className)
    }

    render() {

        return  <header className={"header " + this.props.fix}>

                    <a href="#" className="header__icon" id="header__icon"
                       onClick={this.handleClick.bind(this)} href="#">
                    </a>
                    <nav className="menu">

                            <Link to="/services" className="" onClick={this.safeHandleClick("/repair")}>
                                Services
                            </Link>

                       

                        <Link to="/booking" onClick={this.safeHandleClick}>Booking</Link>
                        <Link to="/contact" onClick={this.safeHandleClick}>Contact et Plans d'accès</Link>
                    </nav>

                </header>


    }
}

NavBar.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default NavBar
