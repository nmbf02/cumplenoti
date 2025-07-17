import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import ContactListScreen from '../screens/ContactListScreen';
import HomeScreen from '../screens/HomeScreen';
import ReminderScreen from '../screens/ReminderScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
      <Drawer.Screen name="ContactList" component={ContactListScreen} options={{ title: 'Contactos' }} />
      <Drawer.Screen name="Reminders" component={ReminderScreen} options={{ title: 'Recordatorios' }} />
      <Drawer.Screen name="Settings" component={SettingsScreen} options={{ title: 'Configuración' }} />
    </Drawer.Navigator>
  );
}
