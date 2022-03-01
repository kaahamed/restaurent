import React, { Component } from 'react'
import { Navbar,NavbarBrand } from 'reactstrap'
export default class Navigation extends Component {
  render() {
    return (

          <Navbar dark color="dark">
              <div className='container'>
              <NavbarBrand href='/'>Restaurent</NavbarBrand>
              </div>
              
          </Navbar>
    
    )
  }
}
