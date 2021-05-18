import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { SidebarProvider } from './sidebar';
import CustomStyle from './theme';

const AppProvider: React.FC = ({ children }) => (
  <CustomStyle>
    <SidebarProvider>
      <AuthProvider>
        <ToastProvider>{children}</ToastProvider>
      </AuthProvider>
    </SidebarProvider>

  </CustomStyle>
);

export default AppProvider;
