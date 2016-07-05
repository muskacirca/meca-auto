import React from 'react'


import NavBar from './navbar'

import {
    toggleClassInBody
} from '../../utils/utils'

class MainApp extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isNavbarFixed: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    onHiddenSiteCLick() {
        let className = 'with--sidebar'
        toggleClassInBody(className)

    }

    handleScroll(e) {

        
        let scrollTop = /*e.srcElement.body.scrollTop ||*/ window.scrollY;

        if(scrollTop > 151) {
            // console.log("scrollingg height " + scrollTop);
            this.setState({isNavbarFixed: true})
        } else if(scrollTop < 151) {
            this.setState({isNavbarFixed: false})
        }
    }

    render() {

        let yo = "";
        if(this.state.isNavbarFixed) yo = "fixed"

        return (
            <div className="site-pusher">
                <div id="logo-row">
                    <div className="col-md-6 col-md-offset-3 center">
                        <img src="style/images/mpa/mpa-logo.png" className="img-responsive" />
                        <span>Téléphone : 01 64 41 80 97 | 39 avenue de Fontainebleau 77310 PRINGY</span>
                    </div>
                </div>
                <NavBar fix={yo}/>

                <div className="site-content">
                    {this.props.children}
                </div>
                <div className="site-cache" onClick={this.onHiddenSiteCLick.bind(this)}></div>
            </div>
        );
    }
}

export default MainApp
