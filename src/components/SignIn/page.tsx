'use client'

import { useState, FormEvent } from "react";
import { FirebaseError } from "firebase/app";
import signIn from "../../firebase/auth/signIn";
import { useRouter } from 'next/navigation';
import { Container, FormContainer, Title, Form, FormLabel, FormInput, FormButton } from "./styles";

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleForm = async (event: FormEvent) => {
        event.preventDefault();
        try {
            const { result, error } = await signIn(email, password);

            if (error) {
                const firebaseError = error as FirebaseError;
                if (firebaseError.message) {
                    console.log(firebaseError.message);
                    throw new Error(firebaseError.message);
                } else {
                    console.log('Unknown Error:', firebaseError);
                    throw new Error('Unknown Error');
                }
            }

            console.log(result);
            return router.push("/");
        } catch (error) {
            console.error('Error: ', error);
        }
    };

    return (
        <Container>
            <FormContainer>
                <Title>SignIn</Title>
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
                    <FormButton type="submit">Sign In</FormButton>
                    <FormButton type="button" onClick={() => router.push("/signUp")}>Sign Up</FormButton>
                </Form>
            </FormContainer>
        </Container>
    );
}

export default SignIn;