import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function ContactDetailScreen({ route, navigation }: any) {
  const { contact } = route.params;

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
    <View style={styles.container}>
      <Text style={styles.title}>{contact.name}</Text>
      <Text style={styles.detail}>🎂 Cumpleaños: {contact.date}</Text>
      <Text style={styles.detail}>👥 Relación: {contact.relation}</Text>

      <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
        <Text style={styles.buttonText}>Editar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.buttonText}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 60, flex: 1 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 10 },
  detail: { fontSize: 18, marginVertical: 8 },
  editButton: {
    backgroundColor: '#007bff',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
