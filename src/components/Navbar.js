import React, { PureComponent } from 'react'

import {
  isSignInPending,
  loadUserData,
  Person,
} from 'blockstack';
import { Header, Menu, Input, Button, Responsive, Segment } from 'semantic-ui-react';

const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';


class Navbar extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        name() {
          return 'Anonymous';
        },
        avatarUrl() {
          return avatarFallbackImage;
        },
      },
    };
    
  }

  componentWillMount() {
    this.setState({
      person: new Person(loadUserData().profile),
    });
  }

  navbar() {
    const { handleSignOut } = this.props;
    return (

          <Segment style={{ backgroundColor: 'transparent', boxShadow: 'none', borderStyle: 'none' }}>
            < Menu fluid style={{ backgroundColor: '#feffff', borderRadius: 'unset' }} >
              <Menu.Item style={{ justifyContent: 'flex-start' }}>
                < Header as='h1' style={{ fontFamily: "Roboto, sans-serif", fontWeight: "300", color: "#3c3744", }} >
                  safelist
                </Header>
              </Menu.Item>

              <Menu.Menu position="right">
                <Menu.Item>
                  <Button style={{ backgroundColor: "#B4C5E4", color: "3D52D5" }} onClick={handleSignOut.bind(this)}>LOGOUT</Button>
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          </Segment>
    )
  }



  render() {
    return this.navbar()
  }
}

export default Navbar