// import React from 'react';
import styled from 'styled-components';

import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpeg";
import img6 from "../../assets/img6.jpg";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.jpeg";
import Party from '../../components/Party';

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

function Team() {
  return (
    <Section id='team'>
        <Party/>
      <Title>Team</Title>
      <Container>
        <MemberComponent img={img1} name="Abhinash" position="CC Lead" />
        <MemberComponent img={img2} name="Parthiv" position="GDSC Lead" />
        <MemberComponent img={img3} name="Radhika" position="..." />
        <MemberComponent img={img4} name="Bidyasagar" position="..." />
        <MemberComponent img={img5} name="Tirthankar" position="..." />
        <MemberComponent img={img6} name="Jyotirmoy" position="Smile in Pain" />
      </Container>
    </Section>
  );
}

export default Team;
