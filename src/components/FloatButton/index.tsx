import React from 'react';
import { FiUserPlus } from 'react-icons/fi';
import { Container } from './styles';

const FloatButton: React.FC = () => (
    <Container type="button">
        <FiUserPlus size={20} />&nbsp; Novo usuário
    </Container>
);

export default FloatButton;