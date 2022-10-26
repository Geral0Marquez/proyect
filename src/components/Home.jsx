import React from 'react';
import styled from "styled-components";

import Navbar from './Navbar';
import { motion } from "framer-motion";
import { homeAnimation } from "animation";

function Home() {
  return (
    <Section id="home">
      <Navbar />
      <motion.div className="home"
        variants={homeAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="content">
          <div className="title">
            <h1>Distrito Perpetuo del Socorro</h1>
          </div>
          <div className="subTitle">
            <p>
              La creatividad nunca se detiene
            </p>
          </div>
          
            <div className="cta">
              <div className='bnt-cv'>¡Conócelo!</div>
              
            </div>

        

        </div>
      </motion.div>


    </Section>
  );
}

const Section = styled.section`
  background: linear-gradient(174deg, rgba(37,87,187,1) 0%, rgba(37,87,187,1) 42%, rgba(3,206,254,1) 100%);;
  min-height: 100vh;
  background-size: cover;
  position: relative;
  .home{
    height: 100%;
    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 60%;
      color: #fff;
      gap: 1.2rem;
      margin-top: 8rem;
      padding-left: 18rem;
      .title {
        h1 {
          font-size: 5rem;
          line-height: 5.3rem;
        }
      }
      .subTitle {
        p {
          width: 70%;
          margin-bottom: 2rem;
          font-size:40px;
        }
      }
    }
  }
  .info {
    position: absolute;
    bottom: -6rem;
    right: 0;
    background-color: var(--secondary-color);
    padding: 4rem;
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
      color: #fff;
    }
  }
  .cta {
    
    padding: 15px 20px;
    display: flex;
    grid-gap: 1rem;
    gap: 1.2rem;
    border: 1px solid #fff;
    font-size: 18px;
    font-weight: 700;
    }
  
  
  .btn-cv {
    font-weight: 700;
    color: #fff;
    padding: 15px 20px;
    font-size: 18px;
    margin-left: 18px;
    position: relative;
    background-color: transparent;

    text-decoration: none;
  }
  
  .cta:hover {
    color: black;
    background-color: #fff;
  }

  @media screen and (min-width: 280px) and (max-width: 1635px) {
    .home {
      .content {
        padding-left: 8rem;
        width: 100%;
        margin-bottom: 2rem;
        .title {
          h1 {
            font-size: 4rem;
            line-height: 4rem;
          }
        }
      }
    }
    .info {
      position: initial;
      .grid {
        grid-template-columns: 1fr;
      }
    }
  }
`;

export default Home