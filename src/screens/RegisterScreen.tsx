import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import * as yup from 'yup';
import { useThemeColor } from '../../hooks/useThemeColor';

const schema = yup.object().shape({
  name: yup.string().required('El nombre es obligatorio'),
  email: yup.string().email('Correo inválido').required('El correo es obligatorio'),
  password: yup.string().min(6, 'Mínimo 6 caracteres').required('La contraseña es obligatoria'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Las contraseñas no coinciden')
    .required('Confirma tu contraseña'),
});

export default function RegisterScreen({ navigation }: any) {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    // Aquí luego conectaremos con el backend
    Alert.alert('Registro exitoso', `Bienvenida ${data.name}`);
    navigation.navigate('Login');
  };

  const background = useThemeColor({}, 'background');
  const text = useThemeColor({}, 'text');
  const inputBorder = useThemeColor({ light: '#ccc', dark: '#444' }, 'icon');
  const linkColor = useThemeColor({ light: 'blue', dark: '#4da3ff' }, 'tint');

  return (
    <View style={[styles.outer, { backgroundColor: background }]}>
      <View style={styles.centeredBox}>
        <Text style={[styles.title, { color: text }]}>Crear Cuenta</Text>

        <Text style={{ color: text }}>Nombre completo</Text>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <TextInput style={[styles.input, { borderColor: inputBorder, color: text }]} placeholder="Nombre completo" placeholderTextColor={inputBorder} value={value} onChangeText={onChange} />
          )}
        />
        {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}

        <Text style={{ color: text }}>Email</Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <TextInput style={[styles.input, { borderColor: inputBorder, color: text }]} placeholder="Correo" placeholderTextColor={inputBorder} keyboardType="email-address" value={value} onChangeText={onChange} autoCapitalize="none" autoCorrect={false} />
          )}
        />
        {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

        <Text style={{ color: text }}>Contraseña</Text>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <TextInput style={[styles.input, { borderColor: inputBorder, color: text }]} placeholder="Contraseña" placeholderTextColor={inputBorder} secureTextEntry value={value} onChangeText={onChange} autoCapitalize="none" autoCorrect={false} />
          )}
        />
        {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

        <Text style={{ color: text }}>Confirmar Contraseña</Text>
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, value } }) => (
            <TextInput style={[styles.input, { borderColor: inputBorder, color: text }]} placeholder="Confirmar contraseña" placeholderTextColor={inputBorder} secureTextEntry value={value} onChangeText={onChange} autoCapitalize="none" autoCorrect={false} />
          )}
        />
        {errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword.message}</Text>}

        <View style={styles.buttonWrapper}>
          <Button title="Registrarse" onPress={handleSubmit(onSubmit)} color="#189CFC" />
        </View>
        <Text style={[styles.link, { color: linkColor }]} onPress={() => navigation.navigate('Login')}>¿Ya tienes cuenta? Inicia sesión</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  centeredBox: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: '#111',
    borderRadius: 10,
    padding: 32,
    elevation: 4, // Sombra compatible RN
  },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#444',
    padding: 12,
    marginBottom: 10,
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: '#181818',
    color: '#fff',
  },
  error: { color: 'red', marginBottom: 10, fontSize: 14 },
  buttonWrapper: { marginTop: 10, marginBottom: 10 },
  link: { color: '#4da3ff', marginTop: 15, fontSize: 14 },
});
