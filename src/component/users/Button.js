import React, { Component } from 'react'
import Classes from '../UI/Button.module.css'

export default class Button extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <button type={this.props.type || 'button'} className={Classes.button} onClick={this.props.onClick}>
                {this.props.children}
            </button>
        )
    }
}