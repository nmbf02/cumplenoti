import moment from 'moment';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useThemeColor } from '../../hooks/useThemeColor';

// Mock de contactos con fechas de cumpleaños
const contacts = [
  { id: '1', name: 'Luis Gómez', birthday: '2024-07-18' },
  { id: '2', name: 'Paola Díaz', birthday: '2024-07-19' },
  { id: '3', name: 'José Peña', birthday: '2024-07-23' },
  { id: '4', name: 'Ana Salas', birthday: '2024-08-01' },
];

export default function ReminderScreen() {
  const background = useThemeColor({}, 'background');
  const text = useThemeColor({}, 'text');
  const groupTitle = useThemeColor({}, 'tint');
  const cardBg = useThemeColor({ light: '#f0f0f0', dark: '#23272b' }, 'icon');
  const nameColor = useThemeColor({}, 'text');
  const dateColor = useThemeColor({ light: '#555', dark: '#bbb' }, 'tabIconDefault');
  const emptyColor = useThemeColor({ light: '#999', dark: '#888' }, 'icon');

  const today = moment();
  
  const categorized = contacts.reduce(
    (acc: any, contact) => {
      const birthdayThisYear = moment(contact.birthday).year(today.year());
      const daysUntil = birthdayThisYear.diff(today, 'days');

      if (daysUntil === 1) acc['1 día'].push(contact);
      else if (daysUntil <= 3) acc['3 días'].push(contact);
      else if (daysUntil <= 7) acc['7 días'].push(contact);

      return acc;
    },
    { '1 día': [], '3 días': [], '7 días': [] }
  );

  const renderGroup = (label: string, data: any[]) => (
    <>
      <Text style={[styles.groupTitle, { color: groupTitle }]}>🎉 En {label}</Text>
      {data.length === 0 ? (
        <Text style={[styles.empty, { color: emptyColor }]}>Sin cumpleaños en este rango</Text>
      ) : (
        data.map((c) => (
          <View key={c.id} style={[styles.card, { backgroundColor: cardBg }]}> 
            <Text style={[styles.name, { color: nameColor }]}>{c.name}</Text>
            <Text style={[styles.date, { color: dateColor }]}>{moment(c.birthday).format('DD MMM YYYY')}</Text>
          </View>
        ))
      )}
    </>
  );

  return (
    <View style={[styles.container, { backgroundColor: background, flex: 1 }]}> 
      <Text style={[styles.title, { color: text }]}>Próximos Cumpleaños</Text>
      {renderGroup('1 día', categorized['1 día'])}
      {renderGroup('3 días', categorized['3 días'])}
      {renderGroup('7 días', categorized['7 días'])}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 60, flex: 1 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  groupTitle: { fontSize: 18, fontWeight: '600', marginTop: 20 },
  card: {
    padding: 14,
    borderRadius: 8,
    marginTop: 10,
  },
  name: { fontSize: 16 },
  date: { fontSize: 14, marginTop: 2 },
  empty: { fontStyle: 'italic', marginVertical: 10 },
});
