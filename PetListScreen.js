import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const pets = [
  { id: '1', nome: 'Luna', idade: '2 anos', imagem: 'https://cdn-icons-png.flaticon.com/512/616/616408.png' },
  { id: '2', nome: 'Rex', idade: '3 anos', imagem: 'https://cdn-icons-png.flaticon.com/512/616/616408.png' },
  { id: '3', nome: 'Mimi', idade: '1 ano', imagem: 'https://cdn-icons-png.flaticon.com/512/616/616408.png' },
];

export default function PetListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Detalhes do Pet', { pet: item })}
          >
            <Image source={{ uri: item.imagem }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text>{item.idade}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 10 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    marginVertical: 8,
    padding: 10,
    borderRadius: 12,
    elevation: 2,
  },
  image: { width: 60, height: 60, marginRight: 15 },
  info: { flex: 1 },
  nome: { fontSize: 18, fontWeight: 'bold', color: '#ff914d' },
});
