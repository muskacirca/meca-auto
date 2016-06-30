import React from 'react'

import NavBar from './navbar'

import {
    toggleClassInBody
} from '../../utils/utils'

class MainApp extends React.Component{

    constructor(props) {
        super(props);
    }

    onHiddenSiteCLick() {
        var className = 'with--sidebar'
        toggleClassInBody(className)

    }

    render() {        
        
        return (
            <div className="site-pusher">
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
