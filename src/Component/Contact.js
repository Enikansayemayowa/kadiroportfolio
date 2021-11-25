import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Contact() {
  const mySchema = yup
    .object()
    .shape({
      name: yup.string().required("This field is required"),
      email: yup.string().email().required("This field is required"),
      // message: yup.string().message().required("this field is required"),
    //   text: yup.string().text().required("this field is required"),
     
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(mySchema),
  });

  return (
    <Container>
      <Wrapper>
        <Card>
          <FormData>
              <Topic>Send Message Us</Topic>
          <form onSubmit={handleSubmit((mySubmit) => console.log(mySubmit))}>
            <Input placeholder="Your Name" {...register("name")} />
            <div>{errors.name?.message}</div>
            <Input placeholder="Your Email" {...register("email")} />
            <div>{errors.name?.message}</div>
            <Input placeholder="Subject" {...register("message")} />
            <div>{errors.mail?.message}</div>
            <Input type="texrarea" placeholder="Message" {...register("text")} />
            <div>{errors.name?.message}</div>
            <ButCont>
            <Button type="submit">Submit</Button>
            </ButCont>
          </form>
          </FormData>
          <FormDetails>
              <Topic>Get in Touch</Topic>
              

          </FormDetails>
        </Card>
      </Wrapper>
    </Container>
  );
}

export default Contact;

const Button = styled.button`
width:150px;
height:50px;
background-color:#87cefa;
border-radius:5px;
color:black;
font-size:30px;
font-weight:bold;
outline:0px;
border: 2px solid #87cefa;
margin-top:20px;
display:flex;
justify-content:center;
align-items: center;
`;
const Topic = styled.div``;
const ButCont = styled.div`
width:100%;
display:flex;
// background-color:#87cefa;
margin-top:20px;
justify-content:center;
`;
const FormDetails = styled.div`
width:600px;
margin-left:30px;
`;
const FormData = styled.div`
width:600px;
`;
const Input = styled.input`
width:600px;
height:50px;
margin-top:20px;
border: 2px solid #87cefa;
border-radius:5px;
outline:0px;
`;
const Card = styled.div`
height: 80vh;
width: 1300px;
border-radius:5px;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
// box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
const Wrapper = styled.div`
width: 100%;
height: 100%;
display:flex;
justify-content: center;
`;
const Container = styled.div`
height:82vh;
width:100%;
background-color: mintcream;
`;