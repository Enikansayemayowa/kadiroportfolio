import React from 'react'
import styled from 'styled-components'
import background from "./Img/background.jpg"
import Header from './Header'
import Typical from 'react-typical'
import {BsArrowUpCircleFill} from "react-icons/bs";

const Homepage = () => {
    const steps =[
     'Web Developer',1000,
     'Front-End Developer',1000,
     'Fullstack Developer',1000,   
    ]
    return (
        <Container>
            <Wrapper>
                <Header />
               <Content>
                   <Name>Kadiri Sunday Eshiomonu</Name>
                   <span style={{color:"blue", fontSize:"60px",fontWeight:"bold",}}>
        
        <Typical 
         loop={Infinity}
         wrapper ="span"
         steps={steps}
// style={{textcolor:"red"}}
       ></Typical>
       </span>
       <Butt>
           <Button1>RESUME</Button1>
           <Button> CV</Button>
       </Butt>
               </Content>
            </Wrapper>
            <BsArrowUpCircleFill/>
        </Container>
    )
}

export default Homepage;

// const Wrapper = styled.div``
// const Skill = styled(span)`
// text-color:red;
// `
const Button1 = styled.div`
width:150px;
height:50px;
background-color:blue;
border-radius:5px;
color:white;
font-size:30px;
font-weight:bold;
outline:0px;
border: 2px solid #87cefa;
margin-right:20px;
margin-top:20px;
display:flex;
justify-content:center;
align-items: center;

`
const Button = styled.div`
width:150px;
height:50px;
background-color:blue;
border-radius:5px;
color:white;
font-size:30px;
font-weight:bold;
outline:0px;
border: 2px solid #87cefa;
margin-top:20px;
display:flex;
justify-content:center;
align-items: center;
`
const Butt = styled.div`
display:flex;
margin-top:100px;
justify-content:space-around;;

`
const Skill = styled.div`
font-size:300;
`;
const Name = styled.div`
text-transform : uppercase;
color:white;
font-weight:bold;
font-size:60px;
color:white;
margin-top:40px;
// background:-webkit-linear gradient(#eee, #333);
// -webkit-background-clip:text;
// -moz-background-clip:text;
// // -moz-text-fill-color:transparent;
// -webkit-text-fill-color:transparent;
`
const Content = styled.div`
display:flex;
flex-direction:column;
height:80vh;
align-items:center;
justify-content:center;
padding-top:100px;
color:white;

`
const Wrapper = styled.div`
width:100%;
height:100%;
min-height:100vh;
background-image: url(${background});
background-repeat:no-repeat;
background-size:cover;
position: relative;
opacity: 0.8;
`;
const Container = styled.div`
width:100%;
min-height:100vh;
height:100%;
position: absolute;
opacity: 1;
background-color:black;

`;
