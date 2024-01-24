//This is home page, It will contains all the sections require in this page.

//Import all the require sections here
import HeroSection from "../Sections/Hero/index";
import About from "../Sections/About/index";
import Testimonials from "../Sections/Gallery/index";
import Contact from "../Sections/Contact/index";
import styled from "styled-components";
import Team from "../Sections/Team";
import Events from "../Sections/Events";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
`;

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <About />
      <Events/>
      <Testimonials />
      <Team/>
      <Contact />
    </Container>
  );
};

export default Home;
