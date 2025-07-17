import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SettingsScreen({ navigation }: any) {
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
    <View style={styles.container}>
      <Text style={styles.title}>Configuración</Text>

      {/* Aquí luego se mostrará el nombre del usuario */}
      <View style={styles.profileBox}>
        <Text style={styles.label}>Usuario:</Text>
        <Text style={styles.value}>Nathaly Michel</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 60, flex: 1 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  profileBox: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
    marginBottom: 30,
  },
  label: { fontSize: 16, color: '#666' },
  value: { fontSize: 18, fontWeight: '600', marginTop: 4 },
  logoutButton: {
    backgroundColor: '#dc3545',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: { color: '#fff', fontWeight: 'bold' },
});
