import React from 'react';

import { Container } from './styles'

import SideBar from '../../components/Sidebar';
import User from '../User';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <SideBar />
      <User />
    </Container>
  );
};

export default Dashboard;
