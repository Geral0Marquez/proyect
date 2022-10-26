import React from 'react';
import styled from "styled-components";
import Title from './Title';
import { useScroll } from "components/useScroll";
import { motion } from "framer-motion";
import { blogsAnimation } from "animation";



function Services() {
  const [element, controls] = useScroll();

  const data = [
    {
      type: "Blowout",
      text: "Shampoo and blow dry. If you are looking to celebrate your special day with us, please note we only have 3 stylists scheduledksajskajslkjasklñdjñasjdjasñdjsadghjg",

    },
    {
      type: "Olaplex",
      text: "Hair treatment helping keep coloured hair healthy from the inside If you are looking to celebrate your special day with usjkdklñsajkdlñaskldñkasldklasñkdlñaskdlashjkhjkhnjhjkhjkhjk",

    },
    {
      type: "Retouch",
      text: "We bring to you a bouquet of services to remain worry free about your looks. We have made effortless beauty equipment and productsdjkjasdkljaskldjklasjdklasjdkljakjdakljaddjkadjka.",

    },
  ];
  return <Section id="services" ref={element}>
    <Title value="Origen" />

    <Section id="home">

      <motion.div className="home"
        variants={blogsAnimation}
        animate={controls}
        transition={{
          delay: 0.03,
          type: "tween",
          duration: 0.8,}}
      >
        <div className="content">
          <div className="title">
            <h1>Así empezó todo</h1>
          </div>
          <div className="subTitle">
            <p>
              Lorem ipsum eritatis reiciendis tenetur explicabo, aliquid adipisci repellendus, consectetur rem vitae ipsam dolore. Laudantium pariatur sapiente accusamus facilis ipsa?
            </p>
          </div>





        </div>
      </motion.div>


    </Section>

  </Section>
}

const Section = styled.section`
min-height: 100vh;
.img-p{
  width:40%
}
.services {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  height: 100%;
  margin: 0 14rem;
  margin-top: 10rem;
  gap: 5rem;
  &__service {
    padding: 2rem;
    
      background-color: var(--primary-color);
      .services__service__title {
        span {
          color: #fff;
        }
      }
      .services__service__description {
        color: #fff;
      }
    }
    &__image {
      margin-bottom: 3rem;
    }
    &__title {
      span {
       
        font-weight: bolder;
      }
      h2 {
        font-size: 20px;
        line-height: 2.5rem;
        margin-bottom: 5rem;
        color: var(--secondary-color);
      }
    }
    &__description {
     
      margin-bottom: 2rem;
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) {

  .content {
        
    width: 100%;
    display: flex;
  align-items: center;
  justify-content: center;
    margin-bottom: 10rem;
    .title {
      h1 {
        font-size: 4rem;
        line-height: 4rem;
      }
    }
  }
}
  .services {
    margin: 2rem 0;
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 2rem;
  }
}


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
      color: black;
      gap: 1.2rem;
      margin-top: 8rem;
      padding-left: 18rem;
      .title {
        h1 {
          font-size: 3rem;
          line-height: 5.3rem;
        }
      }
      .subTitle {
        p {
          width: 100%;
          margin-bottom: 1rem;
          font-size:40px;
          font-size:30px;
        }
      }
    }
  }


  @media screen and (min-width: 280px) and (max-width: 1435px) {
    .home {
      .content {
        
        width: 100%;
        display: flex;
      align-items: center;
      justify-content: center;
        margin-bottom: 10rem;
        .title {
          h1 {
            font-size: 4rem;
            line-height: 4rem;
          }
        }
      }
    }
  

`;



export default Services