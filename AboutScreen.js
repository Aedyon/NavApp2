import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/616/616408.png' }}
        style={styles.logo}
      />
      <Text style={styles.title}>Sobre o Abrigo Esperança 🐾</Text>
      <Text style={styles.text}>
        Somos uma ONG dedicada a encontrar lares cheios de amor para cães e gatos abandonados.
        Aqui, cada adoção muda uma vida — a do pet e a sua! 💛
      </Text>
      <Text style={styles.footer}>Versão 1.0 | Desenvolvido com ❤️ por estudantes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ff914d',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  footer: {
    fontSize: 12,
    color: 'gray',
  },
});
