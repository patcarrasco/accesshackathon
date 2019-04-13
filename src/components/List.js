import React, { Component } from 'react'
import { Button } from 'semantic-ui-react';

export class List extends Component {

  constructor(props) {
    super(props);
      this.state = {
        partners: ["Person 1", "Person 2", "Person 3"],
        searchTerm: ""
      }
    this.searchHandler = this.searchHandler.bind(this);
    this.filteredPartners = this.filteredPartners.bind(this);
    this.filterPartners = this.filterPartners.bind(this);
  }

  searchHandler(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

      
  filterPartners() {
    function clickHandler(){
      console.log("looking")
    }
    // console.log(this.state.searchTerm)
    let partners = this.state.partners
    let searchTerm = this.state.searchTerm
    return partners.filter(function(partner, index){
      return partner.toUpperCase().includes(searchTerm.toUpperCase());
    })
  }

  filteredPartners() {
    return this.filterPartners().map(function(partner, index) {
      return <div className="former-partner" key={index} style={{display:'flex', flexDirection:'row', justifyContent:"space-between", alignItems:"center"}}> {partner} 
          <Button>add</Button>
      </div>
    })
  }

  // fetch()

  render() {
    this.filteredPartners();
    return (
      <div>
        <div className="list-container">
        <input className="list-container-search" name="searchTerm" onChange={this.searchHandler} value={this.state.searchTerm}/>
          {this.filteredPartners()}
        </div>
      </div>
    )
  }
}

export default List
