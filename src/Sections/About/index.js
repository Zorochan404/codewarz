import styled, { keyframes } from "styled-components";
// import wave from "../../assets/waves.svg";
import rocket from "../../assets/rocket image.png";
import human from "../../assets/human.svg";
import hand from "../../assets/hand.svg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import orangeBlob from "../../assets/orangeBlob.png"
// /
// import pinkBlob from "../../assets/blobPink.png";
// import purpleBlob from "../../assets/blob purple.png";
// import whiteBlob from "../../assets/blob white.png";


const move = keyframes`
0% { transform: translateY(-5px)         }
    50% { transform: translateY(10px) translateX(10px)        }
    100% { transform: translateY(-5px)         }
`;


const Blobs = styled.div`
  width: 100%;
  position: absolute;
  right: 0;
  @media only Screen and (max-width: 48em) {
    opacity: 0.5;
  }
`;


// const OliveBlob = styled.div`
//   width: calc(12% + 10vw);
//   position: absolute;
//   left: 1rem;
//   top: calc(4rem + 0vw);
//   z-index: 0;
//   // animation: ${move} 3.0s ease infinite;
// `;

const OrangeBlob = styled.div`
  width: calc(25% + 10vw);
  position: absolute;
  right: -8rem;
  top: calc(4rem + 0vw);
  z-index: 0;
  // animation: ${move} 3.0s ease infinite;
  @media only Screen and (max-width: 48em) {
    right: calc(0rem);
    top: calc(23rem);
    width: calc(55%)
  }
`;




const AboutSection = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
// const Waves = styled.img`
//   width: 100%;
//   height: auto;
//   position: absolute;
//   top: -1rem;
// `;
const Hand = styled.div`
  position: absolute;
  bottom: -1rem;
  right: 0;

  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;

const Main = styled.div`
  margin: 0 15rem;
  margin-top: 16rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only Screen and (max-width: 64em) {
    margin: 0 calc(5rem + 5vw);
    margin-top: 10rem;
  }
  @media only Screen and (max-width: 40em) {
    align-items: center;
    margin: 3rem calc(3rem + 3vw);
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  display: inline-block;
`;




const CurvedLine = styled.div`
  width: 7rem;
  height: 2rem;
  border: solid 5px var(--purple);
  border-color: var(--purple) transparent transparent transparent;
  border-radius: 150%/60px 70px 0 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
`;

const Rocket = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 40%;
  padding-bottom: 5rem;

  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 40em) {
    width: 50vw;
    padding-bottom: 0;
  }
`;

const Human = styled.div`
  width: 50%;
  position: absolute;
  right: 0;
  bottom: 100%;

  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;
const Text = styled.h4`
  font-size: calc(1.2rem);
  line-height: 1.5;
  color: var(--nav2);
`;
const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: black;
  margin-right: 0.5rem;
  margin-top: 1rem;
`;
const AboutText = styled.div`
  width: 50%;
  position: relative;
  @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`;

const About = () => {


  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    // const element = ref.current;
    ////

    // const t1 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: document.getElementById("about"),

    //     start: "top top+=180",

    //     end: "bottom bottom",

    //     pin: element,
    //     pinReparent: true,
    //   },
    // });

    
  



      gsap.to("#rocket", {
      x: -300, // Adjust the distance the rocket will fly horizontally
      y: -300, // Adjust the distance the rocket will fly vertically
      ease: "power1.inOut", // Use a custom easing function if needed
      scrollTrigger: {
        trigger: document.getElementById("rocket"),
        start: "top top+=200",
        end: "bottom top+=220",
        scrub: true,
      },
    });

}, []);


  return (
    <AboutSection id="about" ref={ref}>
      {/* <Waves src={wave} alt="" />  */}
      <Blobs>

        <OrangeBlob>
          <img src={orangeBlob} alt="" width="400" height="400" />{" "}
        </OrangeBlob>

      </Blobs>
      <Hand>
        <img src={hand} alt="" />
      </Hand>
      <Main>
        <div>
          <Title>About Us</Title>
          <CurvedLine />
        </div>
        <Content id="content">
          <Rocket>
            <img id="rocket" src={rocket} alt="" width="400" height="400" />
          </Rocket>
          <AboutText>
            <Human>
              <img src={human} alt="" width="400" height="400" />
            </Human>

            <Text>
            <p>The annual technical event of AEC Coding Club - CODEWAR 4.0, organized under the banner of Udbhavanam - the annual technical fest of Assam Engineering College.</p>
            <p>
              <br/>
            Codestellation: A 24 hours software based hackathon shall be conducted starting from introduction of problem statement to submission of the final software
            </p>
            <br/>
            <p>
            Decode_Stack: Competitive Programming competition that will be conducted in two stages: the Debugging round, and the Final Code War
            </p>
            </Text>
            <div>
              <Circle style={{ backgroundColor: "var(--purple)" }} />
              <Circle style={{ backgroundColor: "var(--pink)" }} />
              <Circle style={{ backgroundColor: "var(--black)" }} />
            </div>
          </AboutText>
        </Content>
      </Main>
    </AboutSection>
  );
};

export default About;
