import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  const upcomingBirthdays: any[] = []; // aquí luego conectaremos la data real

  const renderBirthday = ({ item }: any) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.date}>🎂 {item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola, Nathaly 👋</Text>
      <Text style={styles.subtitle}>Estos son los próximos cumpleaños:</Text>

      {upcomingBirthdays.length === 0 ? (
        <Text style={styles.empty}>Aún no hay cumpleaños próximos</Text>
      ) : (
        <FlatList
          data={upcomingBirthdays}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderBirthday}
        />
      )}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddContact')}
      >
        <Text style={styles.addButtonText}>+ Agregar Contacto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60 },
  title: { fontSize: 24, fontWeight: 'bold' },
  subtitle: { fontSize: 16, marginTop: 10 },
  empty: { marginTop: 20, fontStyle: 'italic', color: '#999' },
  card: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  name: { fontSize: 18, fontWeight: '600' },
  date: { fontSize: 14, color: '#666', marginTop: 4 },
  addButton: {
    backgroundColor: '#1e90ff',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  addButtonText: { color: '#fff', fontWeight: 'bold' },
});
