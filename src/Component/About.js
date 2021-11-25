import React from "react";
import Header from "./Header";
import styled from "styled-components";
import vid from "./Img/personaldetail.mp4"
// import { Link } from 'react-router-dom'

const About = () => {
  return (
    <Container id="abouts">
      <Wrapper>
        <Body>
        <Video src={vid} controls loops autoPlay muted />
          <Content>
            <Text>About Us</Text>
            <TextBody>
              <p>
                My name is Kadiri sunday Eshiomonu, i started falling in love
                with programming from age 18 when my brothers friend will come
                into the house and display different website done with
                dreamweaver.. I have a bachealor degree in system Engineering
                from UNILAG. Early i started creating websites for friends and
                just for fun as well. Besides web development i also explored c#
                and other non-web-only languages. This passion has since lasted
                and lead to my decision of working as a freelance web developer.
                The succes and fun i have in the job is immense and really keeps
                that passion burning alive.
              </p>

              <p>
                I started web development using PHP, i also became more and more
                of a front-end developer using modern frameworks like Angular
                and Vue.
              </p>
            </TextBody>
          </Content>
        </Body>
      </Wrapper>
    </Container>
  );
};

export default About;
const Content = styled.div`
  height: 80%;
  width: 600px;
  display: flex;
  align-items: center;
  margin-top: 80px;
  // justify-content:center;
  flex-direction: column;
  // background-color:teal;
  margin-left: 10px;
`;
const Video = styled.video`
  height: 670px;
  width: 650px;
  display: flex;
  align-items: center;
  margin-bottom: 90px;
  margin: 30px auto;
  object-fit: cover;
  border-radius: 10px;
  // justify-content:center;
  flex-direction: column;
  background-color: mintcream;
`;
const Underprof = styled.div``;
const TextBody = styled.div`
  margin: 0px 15px;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 2;
`;
const Image = styled.img``;
const Body = styled.div`
  height: 700px;
  width: 1300px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  // box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  box-shadow: 10px 20px 8px 5px #87cefa;
`;
const Text = styled.div`
  margin: 0px 20px;
  font-size: 40px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  // flex-direction:column;
  justify-content: center;
  // margin: 20px;
  // background-color:mintcream;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: mintcream;
`;
