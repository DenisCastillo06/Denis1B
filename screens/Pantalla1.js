import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const estudiantes = [
  { id: '1', nombre: 'Juan Pérez', carne: '12345678', foto: require('../assets/juan.png') },
  { id: '2', nombre: 'María Gómez', carne: '87654321', foto: require('../assets/maria.png') },
  // Añade más estudiantes según sea necesario
];

const EstudianteCard = ({ estudiante }) => (
  <View style={styles.card}>
    <Image source={estudiante.foto} style={styles.image} />
    <Text style={styles.name}>{estudiante.nombre}</Text>
    <Text style={styles.carne}>{estudiante.carne}</Text>
  </View>
);

export default function Pantalla1() {
  return (
    <FlatList
      data={estudiantes}
      renderItem={({ item }) => <EstudianteCard estudiante={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  carne: {
    fontSize: 16,
  },
});
