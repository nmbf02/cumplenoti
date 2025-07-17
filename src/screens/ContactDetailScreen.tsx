import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useThemeColor } from '../../hooks/useThemeColor';

export default function ContactDetailScreen({ route, navigation }: any) {
  const { contact } = route.params;

  const background = useThemeColor({}, 'background');
  const text = useThemeColor({}, 'text');
  const editBg = useThemeColor({ light: '#007bff', dark: '#339cff' }, 'tint');
  const deleteBg = useThemeColor({ light: '#dc3545', dark: '#ff4d4f' }, 'tabIconSelected');
  const buttonText = useThemeColor({ light: '#fff', dark: '#fff' }, 'background');

  const handleDelete = () => {
    Alert.alert(
      'Eliminar contacto',
      `¿Seguro que deseas eliminar a ${contact.name}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => {
            Alert.alert('Eliminado', `${contact.name} ha sido eliminado`);
            navigation.goBack();
          },
        },
      ]
    );
  };

  const handleEdit = () => {
    // Aquí podríamos navegar a una pantalla de edición (opcional más adelante)
    Alert.alert('Editar contacto', 'Función aún no implementada');
  };

  return (
    <View style={[styles.container, { backgroundColor: background }]}> 
      <Text style={[styles.title, { color: text }]}>{contact.name}</Text>
      <Text style={[styles.detail, { color: text }]}>🎂 Cumpleaños: {contact.date}</Text>
      <Text style={[styles.detail, { color: text }]}>👥 Relación: {contact.relation}</Text>

      <TouchableOpacity style={[styles.editButton, { backgroundColor: editBg }]} onPress={handleEdit}>
        <Text style={[styles.buttonText, { color: buttonText }]}>Editar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.deleteButton, { backgroundColor: deleteBg }]} onPress={handleDelete}>
        <Text style={[styles.buttonText, { color: buttonText }]}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 60, flex: 1 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 10 },
  detail: { fontSize: 18, marginVertical: 8 },
  editButton: {
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  deleteButton: {
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: { fontWeight: 'bold' },
});
