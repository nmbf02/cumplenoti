import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-datepicker';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('El nombre es obligatorio'),
  date: yup.string().required('La fecha de cumpleaños es obligatoria'),
  relation: yup.string().required('Indica la relación con esta persona'),
});

export default function AddContactScreen({ navigation }: any) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log('Nuevo contacto:', data);
    Alert.alert('Contacto guardado', `${data.name} fue agregado con éxito`);
    navigation.goBack(); // vuelve a la pantalla anterior
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Contacto</Text>

      <Text>Nombre</Text>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <TextInput style={styles.input} placeholder="Nombre del contacto" value={value} onChangeText={onChange} />
        )}
      />
      {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}

      <Text>Fecha de cumpleaños</Text>
      <Controller
        control={control}
        name="date"
        render={({ field: { onChange, value } }) => (
          <DatePicker
            style={{ width: '100%', marginBottom: 10 }}
            date={value}
            mode="date"
            placeholder="Selecciona la fecha"
            format="YYYY-MM-DD"
            confirmBtnText="Confirmar"
            cancelBtnText="Cancelar"
            customStyles={{
              dateInput: styles.dateInput,
            }}
            onDateChange={(date: string) => {
              onChange(date);
            }}
          />
        )}
      />
      {errors.date && <Text style={styles.error}>{errors.date.message}</Text>}

      <Text>Relación</Text>
      <Controller
        control={control}
        name="relation"
        render={({ field: { onChange, value } }) => (
          <TextInput style={styles.input} placeholder="Amigo, familia, etc." value={value} onChangeText={onChange} />
        )}
      />
      {errors.relation && <Text style={styles.error}>{errors.relation.message}</Text>}

      <TouchableOpacity style={styles.saveButton} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.saveButtonText}>Guardar Contacto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 60 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 10 },
  error: { color: 'red', marginBottom: 10 },
  dateInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'flex-start',
    paddingLeft: 10,
    height: 40,
  },
  saveButton: {
    backgroundColor: '#1e90ff',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: { color: '#fff', fontWeight: 'bold' },
});
