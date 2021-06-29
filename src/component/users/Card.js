import React, { Component } from 'react'
import Classes from '../UI/Card.module.css'

export default class Card extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={`${Classes.card} ${this.props.className}`}>
                {this.props.children}
            </div>
        )
    }
}