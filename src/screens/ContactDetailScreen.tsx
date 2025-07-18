import React from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useThemeColor } from '../../hooks/useThemeColor';
import '../i18n';

export default function ContactDetailScreen({ route, navigation }: any) {
  const { contact } = route.params;

  const background = useThemeColor({}, 'background');
  const text = useThemeColor({}, 'text');
  const editBg = useThemeColor({ light: '#007bff', dark: '#339cff' }, 'tint');
  const deleteBg = useThemeColor({ light: '#dc3545', dark: '#ff4d4f' }, 'tabIconSelected');
  const buttonText = useThemeColor({ light: '#fff', dark: '#fff' }, 'background');

  const { t } = useTranslation();

  const handleDelete = () => {
    Alert.alert(
      t('contactDetail.delete_title'),
      t('contactDetail.delete_confirm', { name: contact.name }),
      [
        { text: t('settings.logout_cancel'), style: 'cancel' },
        {
          text: t('contactDetail.delete'),
          style: 'destructive',
          onPress: () => {
            Alert.alert(t('contactDetail.delete_success', { name: contact.name }));
            navigation.goBack();
          },
        },
      ]
    );
  };

  const handleEdit = () => {
    Alert.alert(t('contactDetail.edit_title'), t('contactDetail.edit_not_implemented'));
  };

  return (
    <View style={[styles.container, { backgroundColor: background }]}> 
      <Text style={[styles.title, { color: text }]}>{contact.name}</Text>
      <Text style={[styles.detail, { color: text }]}>🎂 {t('contactDetail.birthday')}: {contact.date}</Text>
      <Text style={[styles.detail, { color: text }]}>👥 {t('contactDetail.relation')}: {contact.relation}</Text>

      <TouchableOpacity style={[styles.editButton, { backgroundColor: editBg }]} onPress={handleEdit}>
        <Text style={[styles.buttonText, { color: buttonText }]}>{t('contactDetail.edit')}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.deleteButton, { backgroundColor: deleteBg }]} onPress={handleDelete}>
        <Text style={[styles.buttonText, { color: buttonText }]}>{t('contactDetail.delete')}</Text>
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
