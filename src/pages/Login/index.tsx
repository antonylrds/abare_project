import React, { FormEvent, useCallback, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { FiLogIn, FiLock, FiUser } from 'react-icons/fi';

import { useToast } from '../../hooks/toast';
import { useAuth } from '../../hooks/auth';

import LogoImg from '../../assets/logo.png';

import Input from '../../components/Input';
import { Container } from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { addToast } = useToast();
  const { signIn, user } = useAuth();

  const history = useHistory();

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault();

      try {
        await signIn({ email, password });

        addToast({
          type: 'success',
          title: 'Usuário autenticado com sucesso',
        });

        history.push('/dashboard');
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description:
            'Ocorreu um erro ao fazer login, verifique as credenciais',
        });
      }
    },
    [history, addToast, signIn, email, password],
  );

  return user ? (<Redirect to="/dashboard" />) : (
    <>
      <Container>
        <img src={LogoImg} alt="logomarca" width={450} />
        <form onSubmit={handleSubmit}>
          <h1>Entrar</h1>
          <Input
            value={email}
            onChange={e => setEmail(e.target.value)}
            name="email"
            type="text"
            placeholder="Usuário"
            icon={FiUser}
          />
          <Input
            value={password}
            onChange={e => setPassword(e.target.value)}
            name="password"
            type="password"
            placeholder="Senha"
            icon={FiLock}
          />

          <button type="submit">
            <FiLogIn /> Entrar
          </button>
        </form>
        <div />
      </Container>
    </>
  );
};

export default Login;
