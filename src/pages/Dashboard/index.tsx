import React from 'react';

import { Redirect } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import { Container } from './styles'

import SideBar from '../../components/Sidebar';
import User from '../User';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  console.log(user);
  return user ? (
    <>
      <Container>
        <SideBar />
        <User />
      </Container>
    </>
  ) : (<Redirect to="/login" />);
};

export default Dashboard;
