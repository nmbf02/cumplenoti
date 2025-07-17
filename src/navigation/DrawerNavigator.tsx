import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { useThemeColor } from '../../hooks/useThemeColor';
import ContactListScreen from '../screens/ContactListScreen';
import HomeScreen from '../screens/HomeScreen';
import ReminderScreen from '../screens/ReminderScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const background = useThemeColor({}, 'background');
  const text = useThemeColor({}, 'text');
  const activeBg = useThemeColor({ light: '#cce6ff', dark: '#23272b' }, 'tint');
  const activeTint = useThemeColor({ light: '#0a7ea4', dark: '#fff' }, 'tint');
  const inactiveTint = useThemeColor({ light: '#687076', dark: '#aaa' }, 'icon');

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: background },
        headerTintColor: text,
        drawerStyle: { backgroundColor: background },
        drawerActiveBackgroundColor: activeBg,
        drawerActiveTintColor: activeTint,
        drawerInactiveTintColor: inactiveTint,
        drawerLabelStyle: { fontWeight: 'bold' },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
      <Drawer.Screen name="ContactList" component={ContactListScreen} options={{ title: 'Contactos' }} />
      <Drawer.Screen name="Reminders" component={ReminderScreen} options={{ title: 'Recordatorios' }} />
      <Drawer.Screen name="Settings" component={SettingsScreen} options={{ title: 'Configuración' }} />
    </Drawer.Navigator>
  );
}
