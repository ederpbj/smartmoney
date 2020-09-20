import React from 'react';
import {
  FlatList, View, Text, Button, StyleSheet,
} from 'react-native';
import { create } from 'react-test-renderer';

export default function App() {
  const addEntry = () => {
    // const x = 123;
    // console.log(`Vamos lá: ${x}`);

  };

  const meuAlerta = () => {
    const nome = 'Eder';
    alert(`Olá ${nome} tudo bem?`);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={styles.title}>Saldo: R$ 3.102,45</Text>

      <Button onPress={addEntry} title="Adicionar" />

      <Text style={styles.title}>Categorias</Text>

      <FlatList
        data={[
          { key: 'Alimentação: $201' },
          { key: 'Combustível: $12' },
          { key: 'Aluguel: $120' },
          { key: 'Lazer: $250' },
          { key: 'Outros: $1.200' },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
