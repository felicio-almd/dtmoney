import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
`;

export const FormContainer = styled.section`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
`;

export const Title = styled.h1`
  font-size: 64px;
  padding: 64px;
`;

export const Description = styled.p`
  font-size: 28px;
  padding: 44px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  margin-bottom: 12px;
`;

export const FormInput = styled.input`
  padding: 8px;
  margin-top: 15px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

export const FormButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 12px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Link = styled.a`
  font-weight: bold;
  font-size: 28px;
  color: #fff;
`;