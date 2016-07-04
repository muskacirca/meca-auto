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
        var className = 'with--sidebar'
        toggleClassInBody(className)

    }

    handleScroll(e) {
        
        // this.refs.nav.getDOMNode().style.top =
        let scrollTop = e.srcElement.body.scrollTop;
            // itemTranslate = Math.min(0, scrollTop/3 - 60);


        if(scrollTop > 151) {
            console.log("scrollingg height " + scrollTop);
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
                <h1 id="logo-row">Méca Pièces Auto</h1>
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
