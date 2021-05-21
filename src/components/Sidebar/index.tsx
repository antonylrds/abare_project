import React from 'react';
import { FiUsers, FiFileText, FiLogOut } from 'react-icons/fi';

import { ProSidebar, SidebarHeader, SidebarContent, SidebarFooter, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import { useSidebar } from '../../hooks/sidebar';
import { useAuth } from '../../hooks/auth';

import { Logo, Container } from './style';

import logoImg from '../../assets/logo.png';


const SideBar: React.FC = () => {

  const { collapsed } = useSidebar();
  const { signOut } = useAuth();
  return (
    <Container>
      <ProSidebar collapsed={collapsed}>
        <SidebarHeader>
          <Logo src={logoImg} alt="Logotipo" />
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square" popperArrow>
            <MenuItem icon={<FiUsers />}>
              Usuários
          </MenuItem>
            <SubMenu title="Relatórios" icon={<FiFileText />}>
              <MenuItem>Comissão de Funcionários</MenuItem>
              <MenuItem>Faturamento</MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <Menu iconShape="square" popperArrow>
            <MenuItem icon={<FiLogOut />} onClick={signOut}>
              Sair
          </MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
    </Container>
  )
};

export default SideBar;