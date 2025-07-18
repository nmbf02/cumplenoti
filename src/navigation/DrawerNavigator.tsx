import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useThemeColor } from '../../hooks/useThemeColor';
import '../i18n';
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
  const { t } = useTranslation();

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
      <Drawer.Screen name="Home" component={HomeScreen} options={{ title: t('drawer.home') }} />
      <Drawer.Screen name="ContactList" component={ContactListScreen} options={{ title: t('drawer.contacts') }} />
      <Drawer.Screen name="Reminders" component={ReminderScreen} options={{ title: t('drawer.reminders') }} />
      <Drawer.Screen name="Settings" component={SettingsScreen} options={{ title: t('drawer.settings') }} />
    </Drawer.Navigator>
  );
}
