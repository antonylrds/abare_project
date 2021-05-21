import React, { useCallback, useEffect, useState } from 'react';

import { FiUsers, FiAlignJustify, FiSearch } from 'react-icons/fi';

import { startOfMonth, endOfMonth } from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import CaixaTable from '../../components/CaixaTable';
import api from '../../services/api';

import { useToast } from '../../hooks/toast';
import { useSidebar } from '../../hooks/sidebar';

import { Container, Content, Header } from './styles';

interface CaixaItemInterface {
  id: number;
  data: Date;
  despesa: string;
  historico: string;
  auditoria: string;
  valor: number;
}


const Caixa: React.FC = () => {

  const { addToast } = useToast();
  const { toggleSidebar } = useSidebar();
  const [caixas, setCaixas] = useState<CaixaItemInterface[]>([] as CaixaItemInterface[]);

  const [despesaFilter, setDespesaFilter] = useState('');
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    startOfMonth(new Date()),
  );
  const [selectedDateFinal, setSelectedDateFinal] = React.useState<Date | null>(
    endOfMonth(new Date()),
  );

  useEffect(() => {
    try {
      api.get<CaixaItemInterface[]>('/reports/caixa', {
        params: {
          intervaloInicio: selectedDate,
          intervaloFinal: selectedDateFinal,
        }
      }).then((response) => {
        setCaixas(response.data);

      })
    } catch (e) {
      addToast({
        title: e.message,
        type: 'error'
      })
    }
  }, [addToast, selectedDate, selectedDateFinal])


  const handleSubmit = useCallback(
    (event): void => {
      event.preventDefault();
      try {
        api.get<CaixaItemInterface[]>('/reports/caixa', {
          params: {
            despesa: despesaFilter,
            intervaloInicio: selectedDate,
            intervalorFinal: selectedDateFinal,
          }
        }).then((response) => {
          setCaixas(response.data);

        })
      } catch (e) {
        addToast({
          title: e.message,
          type: 'error'
        })
      }
    },
    [addToast, despesaFilter, selectedDate, selectedDateFinal],
  );


  const handleDateChange = (date: Date | null, final = false) => {
    if (final) {
      setSelectedDateFinal(date);
    }

    setSelectedDate(date);
  };


  return (
    <Container>
      <div>
        <Header>
          <IconButton onClick={toggleSidebar} aria-label="expand"><FiAlignJustify size={30} /></IconButton>
        </Header>
      </div>
      <Content>
        <h1>
          <FiUsers size={40} />Despesas
        </h1>
        <form onSubmit={handleSubmit}>
          <FormControl margin="normal" fullWidth size="medium" variant="standard">
            <InputLabel htmlFor="inputDespesa">Despesa</InputLabel>
            <Input
              id="inputDespesa"
              type="text"
              value={despesaFilter}
              onChange={(e) => setDespesaFilter(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    type="submit"
                    aria-label="Buscar"
                  >
                    <FiSearch />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Inicio do intervalo"
              value={selectedDate}
              onChange={(e) => handleDateChange(e, false)}
              KeyboardButtonProps={{
                'aria-label': 'Mudar inicio do intervalo',
              }}
            />
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline2"
              label="Fim do intervalo"
              value={selectedDateFinal}
              onChange={(e) => handleDateChange(e, true)}
              KeyboardButtonProps={{
                'aria-label': 'Mudar fim do intervalo',
              }}
            />
          </MuiPickersUtilsProvider>
        </form>
        <div className="table">
          <CaixaTable rows={caixas} />
        </div>
      </Content>
    </Container>
  );
};

export default Caixa;
