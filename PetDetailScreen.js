import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function PetDetailScreen({ route }) {
  const { pet } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: pet.imagem }} style={styles.image} />
      <Text style={styles.nome}>{pet.nome}</Text>
      <Text style={styles.idade}>{pet.idade}</Text>
      <Text style={styles.desc}>
        {`Olá! Eu sou ${pet.nome}, tenho ${pet.idade} e estou pronto pra encontrar uma família cheia de amor! ❤️`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  image: { width: 200, height: 200, marginBottom: 20 },
  nome: { fontSize: 26, fontWeight: 'bold', color: '#ff914d' },
  idade: { fontSize: 18, marginBottom: 10 },
  desc: { textAlign: 'center', fontSize: 16, color: '#333' },
});
