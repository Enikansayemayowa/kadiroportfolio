import React from 'react'
import styled from 'styled-components';
// import * as Scroll from 'react-scroll';
// import { Link, animateScroll as scroll,  } from 'react-scroll'
// import { Link  } from 'react-router-dom'
import { animateScroll as Scroll, Link } from "react-scroll";


const Header = () => {
    return (
        <Container>
            <Wrapper>
            <Logo
        //   src={logo}
          onClick={() => {
            Scroll.scrollToTop();
          }} />
            <Paths>
                        <Comp to="/">HOME</Comp>
                        <Comp to="/abouts">ABOUT</Comp>
                        <Comp to="/resume">RESUME</Comp>
                        <Comp to="/project">PROJECT</Comp>
                        <Comp to="/contact">CONTACT</Comp>
                        
                    </Paths>
            </Wrapper>
        </Container>
    )
}

export default Header;
const Name = styled.div`
display:flex;
align-items:center;
padding-left:30px;
`;
const Paths = styled.div`
display:flex;
align-items:center;
padding-right:30px;
text-decoration:none;
`;
const Comp = styled(Link)`
margin:10px;
text-decoration:none;
color:white;
font-size:20px;
`;
// const Container = styled.div``;
const Logo = styled.div``;
const Wrapper = styled.div`
width:100%;
height:100%;
display:flex;
color:white;
justify-content:space-between;
`;
const Container = styled.div`
width:100%;
height:50px;
// background-color: #87cefa;
background-color:blue;
color:white;
position:fixed;
// background: rgba( 255, 255, 255, 0.4 );
// box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
// backdrop-filter: blur( 2px );
// -webkit-backdrop-filter: blur( 2px );
// border-radius: 10px;
// border: 1px solid rgba( 255, 255, 255, 0.18 );

`;
