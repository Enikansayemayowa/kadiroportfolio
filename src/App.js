import Homepage from "./Component/Homepage";
import styled from "styled-components";
import Stars from "./Component/Img/Stars.jpg";
import { BrowserRouter , Switch, Route } from "react-router-dom";
import About from "./Component/About";
import Resume from "./Component/Resume";
import Project from "./Component/Project";
import Contact from "./Component/Contact";
import Header from "./Component/Header";

function App() {
  return (
    
      <Container>
      <Wrapper>
      {/* <BrowserRouter> */}
      {/* <Header /> */}
       {/* <Switch> */}
         {/* <Route path="/" exact component={Homepage}/> */}
         {/* <Route path="/about" component={About}/> */}
         {/* <Route path="/abouts" exact component={About}/>
         <Route path="/resume" exact component={Resume}/>
         <Route path="/project" exact component={Project}/>
         <Route path="/contact" exact component={Contact}/> */}
       {/* </Switch> */}
       {/* </BrowserRouter> */}
<Header />
<Homepage/>

<Resume/>
<About />
<Project/>

<About />
<Contact />

      </Wrapper>
      </Container>
   
   
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  // display: flex;
  // background-image: url(${Stars});
  // object-fit: contain;
  // background-repeat: no-repeat;
  // position: relative;
  // opacity: 0.98;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  // background-color: black;
  // position: absolute;
  // // display: flex;
  // justify-content: center;
  // opacity: 0.8;
`;
