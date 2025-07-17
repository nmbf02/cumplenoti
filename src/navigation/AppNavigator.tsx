import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import AddContactScreen from '../screens/AddContactScreen';
import ContactDetailScreen from '../screens/ContactDetailScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Crear Cuenta' }} />
      <Stack.Screen name="Main" component={DrawerNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="AddContact" component={AddContactScreen} options={{ title: 'Agregar Contacto' }} />
      <Stack.Screen name="ContactDetail" component={ContactDetailScreen} options={{ title: 'Detalle de Contacto' }} />
    </Stack.Navigator>
  );
}
