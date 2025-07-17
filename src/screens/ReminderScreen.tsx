import moment from 'moment';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Mock de contactos con fechas de cumpleaños
const contacts = [
  { id: '1', name: 'Luis Gómez', birthday: '2024-07-18' },
  { id: '2', name: 'Paola Díaz', birthday: '2024-07-19' },
  { id: '3', name: 'José Peña', birthday: '2024-07-23' },
  { id: '4', name: 'Ana Salas', birthday: '2024-08-01' },
];

export default function ReminderScreen() {
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
      <Text style={styles.groupTitle}>🎉 En {label}</Text>
      {data.length === 0 ? (
        <Text style={styles.empty}>Sin cumpleaños en este rango</Text>
      ) : (
        data.map((c) => (
          <View key={c.id} style={styles.card}>
            <Text style={styles.name}>{c.name}</Text>
            <Text style={styles.date}>{moment(c.birthday).format('DD MMM YYYY')}</Text>
          </View>
        ))
      )}
    </>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Próximos Cumpleaños</Text>
      {renderGroup('1 día', categorized['1 día'])}
      {renderGroup('3 días', categorized['3 días'])}
      {renderGroup('7 días', categorized['7 días'])}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 60 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  groupTitle: { fontSize: 18, fontWeight: '600', marginTop: 20 },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 14,
    borderRadius: 8,
    marginTop: 10,
  },
  name: { fontSize: 16 },
  date: { fontSize: 14, color: '#555' },
  empty: { fontStyle: 'italic', color: '#999', marginVertical: 10 },
});
