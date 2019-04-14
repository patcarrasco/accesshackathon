import React, { Component } from 'react';
import {
  isSignInPending,
  loadUserData,
  Person,
} from 'blockstack';
import { Header, Menu, Input, Button, Responsive, Segment } from 'semantic-ui-react';
import Navbar from './Navbar';

export default class MainButtons extends React.PureComponent {
    constructor(props) {
        super(props)

        this.content = this.content.bind(this)
        this.clearHandler = this.clearHandler.bind(this)
        this.alertHandler = this.alertHandler.bind(this)
    }

    clearHandler() {}

    alertHandler() {}

    content() {
        return (
            <Segment>
                <div>
                    <Button onClick={this.clearHandler.bind(this)}>
                        CLEAR
                    </Button>
                </div>
                <div>
                    <Button onClick={this.alertHandler.bind(this)}>
                        ALERT
                    </Button>
                </div>
            </Segment>
        )
    }



    render() {
        return this.content()
    }
}