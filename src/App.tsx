import 'react-native-gesture-handler';
import React from 'react';

import Routes from './routes';
import AuthProvider from './context/AuthContext';
import CategoriaProvider from './context/CategoriaContext';
import { CarrinhoProvider } from './context/CarrinhoContext';

export default () => {
  return (
    <AuthProvider>
      <CategoriaProvider>
        <CarrinhoProvider>
          <Routes />
        </CarrinhoProvider>
      </CategoriaProvider>
    </AuthProvider>
  );
}