// import  { lazy } from "react";
import styled from "styled-components";

// import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Carousal from "../../components/Carousal/Carousal";
// import image1 from "../../assets/Website Image-1.png"

// const Card = lazy(() => import("../../components/Card/index"));

const Section = styled.div`
  min-height: 100vh;
  background-color: var(--black);
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  // padding: 5rem 0;
`;
const Container = styled.div`
width:75%;
// min-height: 80vh;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;

`
const Box = styled.div`
width: 50%;
height:100%;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media only Screen and (max-width: 64em){
  width: 100%;
}
`


const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1.5rem;
  // position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--purple);
  }
`;

const SubText = styled.h5`
color: var(--white);
  display: inline-block;
  font-size: calc(1.3rem);
  margin-top: 1.5rem;
`



const Gallery = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,

  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  return (
    
    <Section id="gallery">
      <Container>
        <Box><Carousal/></Box>
        <Box>
          <Title>
            GALLERY
          </Title>
          <SubText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, sed harum quisquam sunt autem nulla velit ab accusamus reiciendis earum reprehenderit a magni ex veniam aut et incidunt hic atque facilis ipsum quae voluptate inventore. Iste a inventore dolorem, quod architecto possimus itaque obcaecati delectus perferendis laborum libero eveniet harum.
          </SubText>
        </Box>
      </Container>
    </Section>
    
  );
};

export default Gallery;
