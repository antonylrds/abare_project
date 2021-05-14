import React from 'react';
import { Link } from 'react-router-dom';
import { FiUsers, FiFileText, FiChevronDown } from 'react-icons/fi';
import { Container } from './styles';

import Logo from '../../assets/logo.png';

const SideBar: React.FC = () => {
  return (
    <Container>
      <img src={Logo} alt="Logtipo" />

      <div>
        <ul>
          <li>
            <Link to="/users">
              <div>
                <FiUsers size={20} />
             Usuários
            </div>
              <div>
                <FiChevronDown size={20} />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/users">
              <div>
                <FiFileText size={20} />
             Relatórios
            </div>
              <div>
                <FiChevronDown size={20} />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </Container>
  )
};

export default SideBar;