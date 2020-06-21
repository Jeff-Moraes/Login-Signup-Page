import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }
  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="Company Logo" />
        <Form
          // initialData={{ name: 'Your name here' }}
          onSubmit={handleSubmit}
        >
          <h1>Create an Account</h1>
          <Input name="name" type="text" icon={FiUser} placeholder="Name" />
          <Input name="email" type="text" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            type="password"
            icon={FiLock}
            placeholder="Password"
          />
          <Button type="submit">Continue</Button>
        </Form>

        <a href="new">
          <FiArrowLeft />
          Already have an account?
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
