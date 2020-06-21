import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="Company Logo" />
      <form>
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
      </form>

      <a href="new">
        <FiArrowLeft />
        Already have an account?
      </a>
    </Content>
  </Container>
);

export default SignUp;
