import React, { useCallback, useEffect, useState } from 'react';

import { FiUserPlus, FiUsers, FiAlignJustify } from 'react-icons/fi';
import { DataGrid } from '@material-ui/data-grid';

import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import api from '../../services/api';

import { useToast } from '../../hooks/toast';
import { useSidebar } from '../../hooks/sidebar';

import { Container, Content, Header } from './styles';

interface FuncionarioInterface {
  nome: string;
  funcinario: string;
  departamento: string;
  funcao: string;
}

const User: React.FC = () => {

  const { addToast } = useToast();
  const { toggleSidebar } = useSidebar();

  const [funcionarios, setFuncionarios] = useState<FuncionarioInterface[]>([] as FuncionarioInterface[]);

  useEffect(() => {
    try {
      api.get<FuncionarioInterface[]>('/employees').then((response) => {
        setFuncionarios(response.data);
      })
    } catch (e) {
      addToast({
        title: e.message,
        type: 'error'
      })
    }
  }, [addToast])


  const handleSubmit = useCallback(
    (): void => {
      try {
        addToast({
          title: 'Eba',
          type: 'success'
        })


      } catch (e) {
        addToast({
          title: e.message,
          type: 'error'
        })
      }
    },
    [addToast],
  );

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nome', headerName: 'Nome', width: 500 },
    { field: 'departamento', headerName: 'Departamento', width: 150 },
    {
      field: 'funcao',
      headerName: 'Função',
      width: 150,
    },
  ];

  return (
    <Container>
      <div>
        <Header>
          <IconButton onClick={toggleSidebar} aria-label="expand"><FiAlignJustify size={30} /></IconButton>
        </Header>
      </div>
      <Content>
        <h1>
          <FiUsers size={40} />Gerenciamento de usuários
        </h1>
        {false && <Button variant="contained" color="primary" startIcon={<FiUserPlus size={20} />} onClick={handleSubmit}>Adicionar novo usuário</Button>}
        {funcionarios && <div className="table">
          <DataGrid rows={funcionarios} columns={columns} pageSize={10} />
        </div>}
      </Content>
    </Container>
  );
};

export default User;
