import React from 'react';
import { UserProvider } from './UserContext';
import { DataStorageProvider } from './DataStorageContext';
import { ThemeProvider } from './ThemeContext';

const ContextProviders = ({ children }) => {
  return (
    <ThemeProvider>
      <UserProvider>
        <DataStorageProvider>{children}</DataStorageProvider>
      </UserProvider>
    </ThemeProvider>
  );
};

export default ContextProviders;
