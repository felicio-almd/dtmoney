'use client'

import React from "react";
import { useRouter } from "next/navigation"; 
import signUp from "../firebase/auth/signUp";
import {
  Container,
  FormContainer,
  Title,
  Form,
  FormLabel,
  FormInput,
  FormButton
} from "./styles"; 

function Page() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const router = useRouter();

  const handleForm = async (event: any) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      return console.log(error);
    }

    console.log(result);
    return router.push("/signIn");
  };

  return (
    <Container>
      <FormContainer>
        <Title>SignUp</Title>
        <Form onSubmit={handleForm}>
          <FormLabel htmlFor="email">
            <p>Email</p>
            <FormInput
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
            />
          </FormLabel>
          <FormLabel htmlFor="password">
            <p>Password</p>
            <FormInput
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </FormLabel>
          <FormButton type="submit">Sign Up</FormButton>
          <FormButton type="button" onClick={() => router.push("/signIn")}>Sign In</FormButton>
        </Form>
      </FormContainer>
    </Container>
  );
}

export default Page;
