import React from 'react'


import NavBar from './navbar'

import {
    toggleClassInBody
} from '../../utils/utils'

class MainApp extends React.Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    onHiddenSiteCLick() {
        var className = 'with--sidebar'
        toggleClassInBody(className)

    }

    handleScroll(e) {
        console.log("hello");
        
        // this.refs.nav.getDOMNode().style.top =
        let scrollTop = e.srcElement.body.scrollTop,
            itemTranslate = Math.min(0, scrollTop/3 - 60);

        console.log("scrollingg height " + scrollTop);
        console.log("scrollingg itemTranslate " + itemTranslate);
    }

    render() {

        return (
            <div className="site-pusher">
                <h1 id="logo-row">Méca Pièces Auto</h1>
                <NavBar />

                <div className="site-content">
                    {this.props.children}
                </div>
                <div className="site-cache" onClick={this.onHiddenSiteCLick.bind(this)}></div>
            </div>
        );
    }
}

export default MainApp
