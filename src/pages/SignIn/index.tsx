import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="Company Logo" />
      <form>
        <h1>Log in</h1>
        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="Password" />
        <button type="submit">Log In</button>
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
