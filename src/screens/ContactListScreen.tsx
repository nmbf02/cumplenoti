import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const mockContacts = [
  { id: '1', name: 'María López', date: '1995-05-10', relation: 'Amiga' },
  { id: '2', name: 'Carlos Ramírez', date: '1990-11-22', relation: 'Hermano' },
  { id: '3', name: 'Ana Torres', date: '1992-03-18', relation: 'Compañera' },
];

export default function ContactListScreen({ navigation }: any) {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ContactDetail', { contact: item })}
    >
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.relation}>{item.relation}</Text>
      <Text style={styles.date}>🎂 {item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tus Contactos</Text>
      <FlatList
        data={mockContacts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 60, flex: 1 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  name: { fontSize: 18, fontWeight: '600' },
  relation: { fontSize: 14, color: '#555' },
  date: { fontSize: 14, color: '#888', marginTop: 4 },
});
