import React, { Component } from 'react';
import { isUserSignedIn } from 'blockstack';
import { Input, Button } from 'semantic-ui-react'

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state={loginActive: false}

    this.onHoverInHandler = this.onHoverInHandler.bind(this)
    this.onHoverOutHandler = this.onHoverOutHandler.bind(this)
  }

  onHoverInHandler() {
    this.setState({loginActive: true})
  }

  onHoverOutHandler() {
    this.setState({loginActive: false})
  }

  content() {
    const { handleSignIn } = this.props;


    return (
        < div style = {
        {
            width: "auto",
            height: "100vh",
            minHeight: "100vh",
            backgroundColor: '#062f4f',
            backgroundImage: `-webkit-linear-gradient(20deg, #b4c5e4 10%, transparent)`,
            // backgroundRepeat:'no-repeat',
            backgroundSize: 'contain',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10em"
        }
    } >
        <div style={
                {
                    // padding:"1em", 
                    flexDirection:"row", 
                    alignItems:"center", 
                    justifyContent:"space-between", 
                    alignContent:"flex-start",
                    // backgroundColor: "#f2f5ea",
                    // borderStyle: "solid",
                    borderBottom:"solid",
                    borderColor: "#E75A7C",
                    // backgroundImage: `-webkit-linear-gradient(bottom, #59c3c3, transparent 80%)`,

                }
            }>
            < h1 style = {
                {
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: "300",
                    fontSize: "8em",
                    color: "#fbfff1"
                }
            } > safelist </h1>
        </div>

        < div style = {
            {
                width: "85%",
                height: "65%",
                maxHeight: "800px",
                // borderStyle: "solid",
                // borderColor: "#E75A7C",
                borderRadius: "4px",
                justifySelf: "center",
                display:"flex",
                alignItems:"center",
                justifyContent: "center",
                // backgroundColor: '#52489C',
            }
        } >
          <Button size="massive" onClick={handleSignIn.bind(this)}
            style={{
              backgroundColor: 'transparent',
              borderRadius: 'unset',
              borderStyle: 'solid',
              borderColor: this.state.loginActive ? 'red': 'white',
              color: 'white',
              fontFamily: 'Roboto, sans-serif'
            }}
            onMouseEnter={this.onHoverInHandler.bind(this)}
            onMouseOut={this.onHoverOutHandler.bind(this)}
          >
            sign in with blockstack
          </Button> 
        </div>
    </div>
    )
  }

  render() {
    return this.content()
  }
}
