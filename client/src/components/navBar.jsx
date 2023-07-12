import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/navBar.css";
import { Link } from 'react-router-dom';


export const NavBar = () => {
    
  //  to set color state of navbar while scrolling
  const [ scrolled, seScrolled ] = useState(false);

  //useEffect func to determine if scroll
  useEffect(()=>{
      const onScroll = () => {
          
          // if user scrolled 50% of screen then set value of seScrolled = true otherwise false
      
          if(window.scrollY > 50){
              seScrolled(true);
          }else{
              seScrolled(false);
          }
      }
      
      //evebt listner on scrolling
      window.addEventListener("scroll",onScroll);
      return() => window.removeEventListener("scroll",onScroll)
  },[])


  return(
      <Navbar  expand="lg" className={
          // to check if scrolled or not
          scrolled?"scrolled":""
          }>
          
          <Container>
              <Navbar.Brand href="/" className='navbar-brand'>
                  <h3>Artopia</h3>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav">
                  <span className="navbar-toggler-icon"></span>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                  <Nav.Link href="/" className="navbar-link">
                      Home
                  </Nav.Link>
                  <Link to="/Products" className="navbar-link" >
                      Products</Link>
                  <Nav.Link href="/Orders" className="navbar-link">
                   Your Orders</Nav.Link>
                   <Nav.Link href="/Cart" className="navbar-link">
                   Cart</Nav.Link>
              </Nav>
              <span className="navbar-text">
                  <Nav.Link href="/Account" className="navbar-link">
                  <button className="vvd" onClick={()=>console.log('connect')}>
                      <span>Account</span> 
                  </button>
                  </Nav.Link>
              </span>
              </Navbar.Collapse>
          </Container>
      </Navbar>
  )
}