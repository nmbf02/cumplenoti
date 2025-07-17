import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import * as yup from 'yup';
import { useThemeColor } from '../../hooks/useThemeColor';

const schema = yup.object().shape({
  email: yup.string().email('Correo inválido').required('El correo es obligatorio'),
  password: yup.string().min(6, 'Mínimo 6 caracteres').required('La contraseña es obligatoria'),
});

export default function LoginScreen({ navigation }: any) {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const background = useThemeColor({}, 'background');
  const text = useThemeColor({}, 'text');
  const inputBorder = useThemeColor({ light: '#ccc', dark: '#444' }, 'icon');
  const linkColor = useThemeColor({ light: 'blue', dark: '#4da3ff' }, 'tint');

  const onSubmit = (data: any) => {
    // Aquí luego conectaremos con el backend
    navigation.replace('Main');
  };

  return (
    <View style={[styles.container, { backgroundColor: background }]}> 
      <Text style={[styles.title, { color: text }]}>Iniciar Sesión</Text>

      <Text style={{ color: text }}>Email</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[styles.input, { borderColor: inputBorder, color: text }]}
            placeholder="Correo"
            placeholderTextColor={inputBorder}
            value={value}
            onChangeText={onChange}
            keyboardType="email-address"
          />
        )}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      <Text style={{ color: text }}>Contraseña</Text>
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[styles.input, { borderColor: inputBorder, color: text }]}
            placeholder="Contraseña"
            placeholderTextColor={inputBorder}
            secureTextEntry
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

      <Button title="Iniciar sesión" onPress={handleSubmit(onSubmit)} />
      <Text style={[styles.link, { color: linkColor }]} onPress={() => navigation.navigate('Register')}>
        ¿No tienes cuenta? Regístrate
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 80 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  error: { color: 'red', marginBottom: 10 },
  link: { marginTop: 15 },
});
