import React, { useState } from 'react';
import styled from "styled-components";
import logo from "assets/Logos.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useScroll } from "components/useScroll";
import { motion } from "framer-motion";
import { navAnimation } from "animation";


function Navbar() {
  const [isNavOpen,setIsNavOpen] = useState(false);
  const [element, controls] = useScroll();
  return <Nav ref={element}
  variants={navAnimation}
  transition={{ delay: 0.1 }}
  animate={controls} 
  state={isNavOpen ? 1 : 0}
  >
    <div className="brand__container">
      <div className='brand'>
       <img src={logo} alt=""/> 
       
      </div>  
     <div className='brand padding'> Metamorfosis visual</div>
      <div className="toggle">
        {isNavOpen ? (
          <MdClose onClick={ () => setIsNavOpen(false)} />
        ) : (
          <GiHamburgerMenu
            onClick={ (e) => {
              e.stopPropagation();
              setIsNavOpen(true);
            }}
            />
        )}
      </div>
    </div>
    <div className={`links ${isNavOpen ? "show" : ""}`}>
    <ul>
       
          <li>
            <a href="#services">Origen</a>
          </li>
          <li>
            <a href="#portfolio">Galería</a>
          </li>
          <li>
            <a href="#blog">Mapa</a>
          </li>
          
          <li>
            <a href="#testimonials">Testimonio</a>
          </li>
          <li>
            <a href="#pricing">Tienda</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
    </div>
  </Nav>
}

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  margin: 0 2rem;
  color: #fff;
  padding-top: 2rem;
  .brand__container {
    margin: 0 2rem;
    .toggle {
      display: none;
    }
  }

  .padding{
    padding-top:2%
  }
  .brand{
    display:flex;
    justify-content:center;
  }
  img{
    width:30%;
  
   
  }
  .links {
    ul {
      list-style-type: none;
      display: flex;
      gap: 3rem;
      .active{
        
      }
      li {
        a {
          color: #fff;
          text-decoration: none;
          font-weight: 400;
          font-size: 0.9rem;
          text-transform: uppercase;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0;
    position: relative;
    .brand__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        padding-right: 1rem;
        display: block;
        z-index: 1;
      }
    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }
    .links {
      position: absolute;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? "100%" : "0%")};
      height: 100vh;
      background-color: black;
      opacity: 0;
      visibility: hidden;
      transition: 0.4s ease-in-out;
      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
      }
    }
  }
`;

export default Navbar;