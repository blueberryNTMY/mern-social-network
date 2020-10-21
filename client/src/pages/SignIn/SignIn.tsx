import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const SignIn = () => {
  const [validated, setValidated] = useState<boolean>(false);

  const hadleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  
  return (
    <Container>
      <Form noValidate validated={validated} onSubmit={hadleSubmit}>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Еmail</Form.Label>
          <Form.Control
            required
            type='email'
            placeholder='Введите email'
            name='email'
          />
          <Form.Control.Feedback type='invalid'>
            Введите корректный email
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            required
            type='password'
            placeholder='Введите ваш пароль'
            name='password'
            minLength={6}
          />
          <Form.Control.Feedback type='invalid'>
            Минимальная длинна пароля 6 символов
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant='primary' href='/register'>
          Войти
        </Button>
      </Form>
    </Container>
  );
};

export default SignIn;
