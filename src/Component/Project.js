import React from 'react'
import Header from './Header'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'

const About = () => {
    return (
        <Container >
            <Wrapper >
                <Body>
                  <Image >good</Image>
                  <Content>hello</Content> 
                </Body>
                
            </Wrapper>
        </Container>
    )
}

export default About;
const Content = styled.div`
display:flex;
align-items:center;
margin:10px;
`;
const Profile = styled.div`
height:80%;
width: 650px;
display:flex;
align-items:center;
margin-bottom:90px;
// justify-content:center;
flex-direction:column;
background-color:mintcream;
`;
const Underprof = styled.div``;
const TextBody = styled.div`
margin:0px 15px;
font-size: 1.2rem;
font-weight: 500;
line-height: 2;
`;
const Details = styled.div``;
const Detail = styled.div``;
const Detail2 = styled.div``;
const Birthday = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;
const Contenttext = styled.div``;
const Image = styled.div`
height:400px;
`;
const Body = styled.div`
height:600px;
width:500px;
margin-top:30px;
display:flex;
flex-direction:column;
// justify-content:center;
align-items:center;
flex-wrap:wrap;
// box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
box-shadow:0px 20px 20px 5px #87cefa;
border-radius:10px;
`;
const Text = styled.div`
margin:0px 20px;
font-size:40px;
`;
const Wrapper = styled.div`
width:100%;
height:100%;
display:flex;
// flex-direction:column;
justify-content:center;
// margin: 20px;
// background-color:mintcream;
`;
const Container = styled.div`
width:100%;
height:100%;
min-height: 100vh;
background-color:mintcream;
`;
