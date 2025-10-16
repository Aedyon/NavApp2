import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function FormsScreen() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = () => {
    if (!nome || !idade || !descricao) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }
    Alert.alert('Sucesso!', `Pet ${nome} cadastrado com sucesso! 🐶`);
    setNome('');
    setIdade('');
    setDescricao('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Pet para Adoção</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do pet"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Idade do pet"
        value={idade}
        onChangeText={setIdade}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Descrição"
        multiline
        numberOfLines={4}
        value={descricao}
        onChangeText={setDescricao}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#ff914d',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
