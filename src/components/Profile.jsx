import React, { Component } from 'react';
import {
  isSignInPending,
  loadUserData,
  Person,
} from 'blockstack';
import { Header, Menu, Input, Button, Responsive, Segment } from 'semantic-ui-react';
import List from "./List"
import Navbar from './Navbar';

const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';

export default class Profile extends Component {
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
    
    this.profile = this.profile.bind(this);
    this.content = this.content.bind(this);
  }


  profile() {
    const { handleSignOut } = this.props;
    const { person } = this.state;

    return (
      <div className="panel-welcome" id="section-2">
        <div className="avatar-section">
          <img src={ person.avatarUrl() ? person.avatarUrl() : avatarFallbackImage } className="img-rounded avatar" id="avatar-image" />
        </div>
        <h1>Hello, <span id="heading-name">{ person.name() ? person.name() : 'Nameless Person' }</span>!</h1>
        <p className="lead">
          <button
            className="btn btn-primary btn-lg"
            id="signout-button"
            onClick={ handleSignOut.bind(this) }
          >
            Logout
          </button>
        </p>
      </div>
    )
  }

  list() {
    return (
      <Header>HEALTH APP</Header>
    )
  }

  navbar() {
    const { handleSignOut } = this.props;
    return (

        // <Responsive minWidth={1000}>
          <Segment style={{ backgroundColor: 'transparent', boxShadow: 'none', borderStyle: 'none' }}>
            < Menu fluid style={{ backgroundColor: '#feffff', borderRadius: 'unset' }} >
              <Menu.Item style={{ justifyContent: 'flex-start' }}>
                < Header as='h1' style={{ fontFamily: "Roboto, sans-serif", fontWeight: "300", color: "#3c3744", }} >
                  healthapp
                </Header>
              </Menu.Item>
              <Menu.Item>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center", marginLeft: '1em' }}>
                  <Button circular icon="user" />
                  <Button circular icon="map pin" />
                  <Button circular icon="feed" />
                </div>
              </Menu.Item>
              <Menu.Menu>
                {/* POSSIBLE ADDITIONAL SEARCH TERM, MAYBE BY EVENT TYPE??? */}
                <Input />
              </Menu.Menu>
              <Menu.Menu position="right">
                <Menu.Item>
                  <Button style={{ backgroundColor: "#B4C5E4", color: "3D52D5" }} onClick={handleSignOut.bind(this)}>LOGOUT</Button>
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          </Segment>
        // </Responsive>
    )
  }


  contactButtons() {
    return (
      <div>
        <div>
          <Button primary>
            Reset
          </Button>
        </div>
        <div>
          <Button color='red'>
            Alert
          </Button>
        </div>
      </div>
    )
  }

  content() {
    return (
      <div>
        <Navbar handleSignOut={this.props.handleSignOut}/>
        <List/>
        {this.contactButtons()}
      </div>
    )
  }

  render() {
    return !isSignInPending() ? this.content() : null;
  }

  componentWillMount() {
    this.setState({
      person: new Person(loadUserData().profile),
    });
  }
}
