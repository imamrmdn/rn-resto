//
import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/routes/routes';

export default function App() {
  return (
    <>
      <StatusBar style="auto" backgroundColor='teal' />
      <Routes />
    </>
    
  );
}

