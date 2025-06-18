import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function AddTaskScreen() {
  const [taskTitle, setTaskTitle] = useState('');
  
  const handleAddTask = () => {

    if (taskTitle.trim() === '') {
      Alert.alert('Campo obrigatório', 'Por favor, digite o título da tarefa.');
      return;
    }

    Alert.alert('Tarefa adicionada!', taskTitle);

    setTaskTitle('');
  };

    return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova Tarefa</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o título da tarefa"
        value={taskTitle}
        onChangeText={setTaskTitle}
      />
      <Button title="Adicionar" onPress={handleAddTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#aaa',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 8,
  },
});
