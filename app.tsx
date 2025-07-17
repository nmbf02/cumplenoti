import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import './src/i18n'; // <-- Importa esto para inicializar i18n-js

export default function App() {
  return <AppNavigator />;
}