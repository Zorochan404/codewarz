// import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// import img1 from "../../assets/img1.png";
// import img2 from "../../assets/img2.jpeg";
// import img3 from "../../assets/img3.jpeg";
// import img6 from "../../assets/img6.jpg";
// import img4 from "../../assets/img4.png";
// import img5 from "../../assets/img5.jpeg";
import Party from '../../components/Party';

import DigitalOceanImg from "../../assets/past_sponsers/DigitalOcean.png";
import GeeksforGeeksImg from "../../assets/past_sponsers/GeeksforGeeks.png";
import JBsImg from "../../assets/past_sponsers/JBs.png";
import LottiGhottiImg from "../../assets/past_sponsers/LottiGhotti.png";
import NewtonSchoolImg from "../../assets/past_sponsers/NewtonSchool.png";
import OREILLYImg from "../../assets/past_sponsers/OREILLY.png";
import OlatusImg from "../../assets/past_sponsers/Olatus.png";
import PoyntSportsImg from "../../assets/past_sponsers/Poynt_Sports.png";
import techvariableImg from "../../assets/past_sponsers/techvariable.png";
import UjucodeImg from "../../assets/past_sponsers/Ujucode.png";
import XipaarImg from "../../assets/past_sponsers/Xipaar.png";
import XopuntechImg from "../../assets/past_sponsers/Xopuntech.png";




const Section = styled.div`
  min-height: 100vh;
  background-color: var(--white);
  position: relative;
  width: 100%;
`;

const Title = styled.h1`
  color: var(--black);
  display: flex;
  font-size: calc(1rem + 1.5vw);
  margin: 1rem auto;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid var(--white);
  width: fit-content;
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Item = styled.div`
  width: calc(20rem - 4vw);
  padding: 1rem 0;
  color: var(--purple);
  margin: 2rem 3rem;
  position: relative;
  border: 2px solid var(--black);
  border-radius: 20px;
  backdrop-filter: blur(4px);
  z-index: 5;
`;

const ImageContainer = styled.div`
  width: 15rem;
  height: 16rem;
  margin: auto;
  background-color: var(--white);    
  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    border: 2px solid var(--black);
    border-radius: 20px;
  }
`;

const Name = styled.h2`
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--black);
  margin-top: 1rem;
`;

const Position = styled.h2`
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #808080;
  margin-top: 1rem;
`;

const MemberComponent = ({ img , name = "", position = "" }) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  );
};

MemberComponent.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

function Team() {
  return (
    <Section id='team'>
        <Party/>
      <Title>PAST SPONSORS</Title>
      <Container>
        <MemberComponent img={DigitalOceanImg} name="Digital Ocean" position="" />
        <MemberComponent img={GeeksforGeeksImg} name="GeeksforGeeks" position="" />
        <MemberComponent img={JBsImg} name="JB's" position="" />
        <MemberComponent img={LottiGhottiImg} name="Lotti Ghotti" position="" />
        <MemberComponent img={NewtonSchoolImg} name="Newton School" position="" />
        <MemberComponent img={OREILLYImg} name="O'REILLY" position="" />
        <MemberComponent img={OlatusImg} name="Olatus" position="" />
        <MemberComponent img={PoyntSportsImg} name="Poynt Sports" position="" />
        <MemberComponent img={techvariableImg} name="Tech Variable" position="" />
        <MemberComponent img={UjucodeImg} name="Ujucode" position="" />
        <MemberComponent img={XipaarImg} name="XiPaar" position="" />
        <MemberComponent img={XopuntechImg} name="Xopuntech" position="" />
      </Container>
    </Section>
  );
}

export default Team;
