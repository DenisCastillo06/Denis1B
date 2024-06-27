import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

import * as React from 'react';
import Navigation from './Navigation';

export default function App() {
  return <Navigation />;
}

const App = () => {
  // Estado para manejar el texto de la nueva tarea y la lista de tareas
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Función para agregar una nueva tarea a la lista
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { key: Math.random().toString(), value: newTask }]);
      setNewTask('');
    }
  };

  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nueva tarea"
          value={newTask}
          onChangeText={setNewTask}
        />
        <Button title="Agregar" onPress={addTask} />
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text>{item.value}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flex: 1,
    marginRight: 10,
    padding: 5,
  },
  taskItem: {
    padding: 10,
    backgroundColor: '#f9c2ff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});




