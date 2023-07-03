import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/navBar.css";


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
              <Nav className="me-auto">
                  <Nav.Link href="/" className="navbar-link">
                      Home
                  </Nav.Link>
                  <Nav.Link href="#" className="navbar-link" >
                      Products</Nav.Link>
                  <Nav.Link href="#" className="navbar-link">
                   Your Orders</Nav.Link>
                   <Nav.Link href="#" className="navbar-link">
                   Cart</Nav.Link>
              </Nav>
              <span className="navbar-text">
                  <div className="social-icon">
                      <a href='#'><img src=""></img></a>
                      <a href='#'><img src=""></img></a>
                  </div>
                  <button className="vvd" onClick={()=>console.log('connect')}>
                      <span>Account</span> 
                  </button>
              </span>
              </Navbar.Collapse>
          </Container>
      </Navbar>
  )
}