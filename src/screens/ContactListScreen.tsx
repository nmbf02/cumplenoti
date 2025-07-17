import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useThemeColor } from '../../hooks/useThemeColor';

const mockContacts = [
  { id: '1', name: 'María López', date: '1995-05-10', relation: 'Amiga' },
  { id: '2', name: 'Carlos Ramírez', date: '1990-11-22', relation: 'Hermano' },
  { id: '3', name: 'Ana Torres', date: '1992-03-18', relation: 'Compañera' },
];

export default function ContactListScreen({ navigation }: any) {
  const background = useThemeColor({}, 'background');
  const text = useThemeColor({}, 'text');
  const cardBg = useThemeColor({ light: '#f5f5f5', dark: '#23272b' }, 'icon');
  const nameColor = useThemeColor({}, 'text');
  const relationColor = useThemeColor({ light: '#555', dark: '#aaa' }, 'icon');
  const dateColor = useThemeColor({ light: '#888', dark: '#bbb' }, 'tabIconDefault');

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: cardBg }]}
      onPress={() => navigation.navigate('ContactDetail', { contact: item })}
    >
      <Text style={[styles.name, { color: nameColor }]}>{item.name}</Text>
      <Text style={[styles.relation, { color: relationColor }]}>{item.relation}</Text>
      <Text style={[styles.date, { color: dateColor }]}>🎂 {item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: background }]}> 
      <Text style={[styles.title, { color: text }]}>Tus Contactos</Text>
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
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  name: { fontSize: 18, fontWeight: '600' },
  relation: { fontSize: 14 },
  date: { fontSize: 14, marginTop: 4 },
});
