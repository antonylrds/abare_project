import React from 'react';

import { Redirect } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import { Container } from './styles'

import SideBar from '../../components/Sidebar';
import Caixa from '../Caixa';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return user ? (
    <>
      <Container>
        <SideBar />
        <Caixa />
      </Container>
    </>
  ) : (<Redirect to="/login" />);
};

export default Dashboard;
