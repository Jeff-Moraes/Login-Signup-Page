import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background, AnimationContainer } from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Name is required'),
          email: Yup.string()
            .required('E-mail is required')
            .email('Add a valid email'),
          password: Yup.string()
            .required('Password is required')
            .min(6, 'minimum of 6 digits'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        history.push('/');
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    },
    [history],
  );

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="Company Logo" />
          <Form
            // initialData={{ name: 'Your name here' }}
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <h1>Create an Account</h1>
            <Input name="name" type="text" icon={FiUser} placeholder="Name" />
            <Input
              name="email"
              type="text"
              icon={FiMail}
              placeholder="E-mail"
            />
            <Input
              name="password"
              type="password"
              icon={FiLock}
              placeholder="Password"
            />
            <Button type="submit">Continue</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Already have an account?
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
