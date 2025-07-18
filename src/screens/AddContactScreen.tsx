import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-datepicker';
import * as yup from 'yup';
import { useThemeColor } from '../../hooks/useThemeColor';
import '../i18n';

export default function AddContactScreen({ navigation }: any) {
  const background = useThemeColor({}, 'background');
  const text = useThemeColor({}, 'text');
  const inputBorder = useThemeColor({ light: '#ccc', dark: '#444' }, 'icon');
  const buttonBg = useThemeColor({ light: '#1e90ff', dark: '#0a7ea4' }, 'tint');
  const buttonText = useThemeColor({ light: '#fff', dark: '#fff' }, 'background');
  const { t } = useTranslation();

  const schema = yup.object().shape({
    name: yup.string().required(t('addContact.error_name')),
    date: yup.string().required(t('addContact.error_date')),
    relation: yup.string().required(t('addContact.error_relation')),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log('Nuevo contacto:', data);
    Alert.alert(t('addContact.saved_title'), t('addContact.saved_message', { name: data.name }));
    navigation.goBack(); // vuelve a la pantalla anterior
  };

  return (
    <View style={[styles.container, { backgroundColor: background }]}> 
      <Text style={[styles.title, { color: text }]}>{t('addContact.title')}</Text>

      <Text style={{ color: text }}>{t('addContact.name')}</Text>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[styles.input, { borderColor: inputBorder, color: text }]}
            placeholder={t('addContact.name_placeholder')}
            placeholderTextColor={inputBorder}
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}

      <Text style={{ color: text }}>{t('addContact.date')}</Text>
      <Controller
        control={control}
        name="date"
        render={({ field: { onChange, value } }) => (
          <DatePicker
            style={{ width: '100%', marginBottom: 10 }}
            date={value}
            mode="date"
            placeholder={t('addContact.date_placeholder')}
            format="YYYY-MM-DD"
            confirmBtnText={t('addContact.confirm')}
            cancelBtnText={t('addContact.cancel')}
            customStyles={{
              dateInput: [styles.dateInput, { borderColor: inputBorder }],
            }}
            onDateChange={(date: string) => {
              onChange(date);
            }}
          />
        )}
      />
      {errors.date && <Text style={styles.error}>{errors.date.message}</Text>}

      <Text style={{ color: text }}>{t('addContact.relation')}</Text>
      <Controller
        control={control}
        name="relation"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[styles.input, { borderColor: inputBorder, color: text }]}
            placeholder={t('addContact.relation_placeholder')}
            placeholderTextColor={inputBorder}
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.relation && <Text style={styles.error}>{errors.relation.message}</Text>}

      <TouchableOpacity style={[styles.saveButton, { backgroundColor: buttonBg }]} onPress={handleSubmit(onSubmit)}>
        <Text style={[styles.saveButtonText, { color: buttonText }]}>{t('addContact.save')}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 60, flex: 1 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, borderRadius: 5, marginBottom: 10 },
  error: { color: 'red', marginBottom: 10 },
  dateInput: {
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'flex-start',
    paddingLeft: 10,
    height: 40,
  },
  saveButton: {
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: { fontWeight: 'bold' },
});
