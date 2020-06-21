import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="Company Logo" />
      <form>
        <h1>Log in</h1>
        <Input name="email" type="text" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          type="password"
          icon={FiLock}
          placeholder="Password"
        />
        <Button type="submit">Log In</Button>
        <a href="forgot">Forgot your password?</a>
      </form>

      <a href="new">
        <FiLogIn />
        Create an Account
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
