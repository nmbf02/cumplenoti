import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useThemeColor } from '../../hooks/useThemeColor';
import { useThemeContext } from '../context/ThemeContext';

export default function SettingsScreen({ navigation }: any) {
  const { theme, setTheme } = useThemeContext();

  const background = useThemeColor({}, 'background');
  const text = useThemeColor({}, 'text');
  const profileBg = useThemeColor({ light: '#f0f0f0', dark: '#23272b' }, 'icon');
  const labelColor = useThemeColor({ light: '#666', dark: '#aaa' }, 'icon');
  const logoutBg = useThemeColor({ light: '#dc3545', dark: '#ff4d4f' }, 'tabIconSelected');
  const logoutText = useThemeColor({ light: '#fff', dark: '#fff' }, 'background');
  const themeButtonBg = useThemeColor({ light: '#eee', dark: '#23272b' }, 'background');
  const themeButtonActiveBg = useThemeColor({ light: '#cce6ff', dark: '#1e90ff' }, 'tint');
  const themeButtonBorder = useThemeColor({ light: '#ccc', dark: '#444' }, 'icon');
  const themeButtonActiveBorder = useThemeColor({ light: '#1e90ff', dark: '#339cff' }, 'tint');

  const handleLogout = () => {
    Alert.alert('Cerrar sesión', '¿Estás segura/o que deseas salir?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Salir',
        style: 'destructive',
        onPress: () => {
          // Aquí luego borraremos el token del usuario (AsyncStorage)
          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          });
        },
      },
    ]);
  };

  return (
    <View style={[styles.container, { backgroundColor: background }]}> 
      <Text style={[styles.title, { color: text }]}>Configuración</Text>

      {/* Aquí luego se mostrará el nombre del usuario */}
      <View style={[styles.profileBox, { backgroundColor: profileBg }]}> 
        <Text style={[styles.label, { color: labelColor }]}>Usuario:</Text>
        <Text style={[styles.value, { color: text }]}>Nathaly Michel</Text>
      </View>

      <Text style={[styles.label, { color: labelColor }]}>Tema</Text>
      <View style={styles.themeRow}>
        <TouchableOpacity
          style={[
            styles.themeButton,
            { backgroundColor: themeButtonBg, borderColor: themeButtonBorder },
            theme === 'light' && { backgroundColor: themeButtonActiveBg, borderColor: themeButtonActiveBorder },
          ]}
          onPress={() => setTheme('light')}
        >
          <Text style={{ color: text }}>Claro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.themeButton,
            { backgroundColor: themeButtonBg, borderColor: themeButtonBorder },
            theme === 'dark' && { backgroundColor: themeButtonActiveBg, borderColor: themeButtonActiveBorder },
          ]}
          onPress={() => setTheme('dark')}
        >
          <Text style={{ color: text }}>Oscuro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.themeButton,
            { backgroundColor: themeButtonBg, borderColor: themeButtonBorder },
            theme === 'system' && { backgroundColor: themeButtonActiveBg, borderColor: themeButtonActiveBorder },
          ]}
          onPress={() => setTheme('system')}
        >
          <Text style={{ color: text }}>Sistema</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.logoutButton, { backgroundColor: logoutBg }]} onPress={handleLogout}>
        <Text style={[styles.logoutText, { color: logoutText }]}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 60, flex: 1 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  profileBox: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 30,
  },
  label: { fontSize: 16 },
  value: { fontSize: 18, fontWeight: '600', marginTop: 4 },
  logoutButton: {
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: { fontWeight: 'bold' },
  themeRow: { flexDirection: 'row', marginVertical: 16 },
  themeButton: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
  },
  themeButtonActive: {},
});
