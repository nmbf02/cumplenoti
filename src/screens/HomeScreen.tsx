import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useThemeColor } from '../../hooks/useThemeColor';

export default function HomeScreen({ navigation }: any) {
  const background = useThemeColor({}, 'background');
  const text = useThemeColor({}, 'text');
  const cardBg = useThemeColor({ light: '#f5f5f5', dark: '#23272b' }, 'icon');
  const nameColor = useThemeColor({}, 'text');
  const dateColor = useThemeColor({ light: '#666', dark: '#bbb' }, 'tabIconDefault');
  const emptyColor = useThemeColor({ light: '#999', dark: '#888' }, 'icon');
  const buttonBg = useThemeColor({ light: '#1e90ff', dark: '#0a7ea4' }, 'tint');
  const buttonText = useThemeColor({ light: '#fff', dark: '#fff' }, 'background');

  const upcomingBirthdays: any[] = []; // aquí luego conectaremos la data real

  const renderBirthday = ({ item }: any) => (
    <View style={[styles.card, { backgroundColor: cardBg }]}> 
      <Text style={[styles.name, { color: nameColor }]}>{item.name}</Text>
      <Text style={[styles.date, { color: dateColor }]}>🎂 {item.date}</Text>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: background }]}> 
      <Text style={[styles.title, { color: text }]}>Hola, Nathaly 👋</Text>
      <Text style={[styles.subtitle, { color: text }]}>Estos son los próximos cumpleaños:</Text>

      {upcomingBirthdays.length === 0 ? (
        <Text style={[styles.empty, { color: emptyColor }]}>Aún no hay cumpleaños próximos</Text>
      ) : (
        <FlatList
          data={upcomingBirthdays}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderBirthday}
        />
      )}

      <TouchableOpacity
        style={[styles.addButton, { backgroundColor: buttonBg }]}
        onPress={() => navigation.navigate('AddContact')}
      >
        <Text style={[styles.addButtonText, { color: buttonText }]}>+ Agregar Contacto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60 },
  title: { fontSize: 24, fontWeight: 'bold' },
  subtitle: { fontSize: 16, marginTop: 10 },
  empty: { marginTop: 20, fontStyle: 'italic' },
  card: {
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  name: { fontSize: 18, fontWeight: '600' },
  date: { fontSize: 14, marginTop: 4 },
  addButton: {
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  addButtonText: { fontWeight: 'bold' },
});
