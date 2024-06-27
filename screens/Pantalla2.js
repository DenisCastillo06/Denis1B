import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const comidas = [
  { id: '1', nombre: 'Pizza', descripcion: 'Deliciosa pizza con queso y pepperoni', imagen: require('../assets/pizza.png') },
  { id: '2', nombre: 'Hamburguesa', descripcion: 'Hamburguesa con carne de res y queso', imagen: require('../assets/hamburguesa.png') },
  // Añade más comidas según sea necesario
];

const ComidaCard = ({ comida }) => (
  <View style={styles.card}>
    <Image source={comida.imagen} style={styles.image} />
    <Text style={styles.name}>{comida.nombre}</Text>
    <Text style={styles.description}>{comida.descripcion}</Text>
  </View>
);

export default function Pantalla2() {
  return (
    <FlatList
      data={comidas}
      renderItem={({ item }) => <ComidaCard comida={item} />}
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
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  description: {
    fontSize: 16,
  },
});
