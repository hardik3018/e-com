
import { useState, useEffect, useRef } from "react"; // to animate ( delete and type ) --> what's useState & useEffect
import { Container, Row, Col } from "react-bootstrap";
import "../styles/banner.css"
import img1 from "../assets/images/background.jpg";
import img2 from "../assets/images/background2.jpg";
import img3 from "../assets/images/background3.jpg";
import img4 from "../assets/images/background4.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';
//npx create-react-app appname


function Banner(){

  const images = [img1, img2, img3, img4];
  const [currentSlide, setCurrentSlide] = useState(0);
  // useRef does not cause a re-render
  let sliderInterval = useRef();
  let switchImages = () => {
    if (currentSlide < images.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };
  useEffect(() => {
    sliderInterval = setInterval(() => {
      switchImages();
    }, 5000);
    return () => {
      clearInterval(sliderInterval);
    };
  });
      
  return (
    
    <section className="banner" id="home" >
     <div className="imgWrapper">
      {images.map((img, index) => {
        return (
          <img
            src={img}
            className={
              index === currentSlide ? "imageActive homeImage" : "image"
            }
          />
        );
      })}
    </div>
     <div className="centered">
          
          <h1> Artopia </h1>
          <p>Where Artists meet Admirers!!</p>
        
     </div>

    </section>
  )
}

export default Banner;