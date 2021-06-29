import React, { Component } from 'react'
import Classes from '../UI/ErrorModal.module.css'
import Card from './Card'
import Button from './Button'

export default class ErrorModal extends Component{
    render(){
        return(
            <div>
                <div className={Classes.backdrop} />
                <Card className={Classes.modal}>
                    <header className={Classes.header}>
                        <h2>{this.props.title}</h2>
                    </header>
                    <div className={Classes.content}>
                        <p>{this.props.message}</p>
                    </div>
                    <footer className={Classes.footer}>
                        <Button onClick={this.props.onClick}>Ok</Button>
                    </footer>
                </Card>
            </div>
        )
    }
}