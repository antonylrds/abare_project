import React, { createContext, useContext, useCallback, useState } from 'react';

interface SidebarContextData {
  toggleSidebar(): void;
  collapsed: boolean;
}

const SideBarContext = createContext<SidebarContextData>({} as SidebarContextData);

const SidebarProvider: React.FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleSidebar = useCallback(() => {
    setCollapsed(!collapsed);
  }, [collapsed])

  return (
    <SideBarContext.Provider value={{ toggleSidebar, collapsed }}>
      {children}
    </SideBarContext.Provider>
  );
};

function useSidebar(): SidebarContextData {
  const context = useContext(SideBarContext);

  if (!context) {
    throw new Error('useSidebar must be used whitin a SidebarProvider');
  }

  return context;
}

export { SidebarProvider, useSidebar };
