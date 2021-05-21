import React from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ptBR } from '@material-ui/data-grid';


const theme = createMuiTheme({
  typography: {
    fontSize: 11,
  }

}, ptBR);

const CustomStyle: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export default CustomStyle;