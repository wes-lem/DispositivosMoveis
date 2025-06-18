import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Task {
  id: string;
  title: string;
}

export default function HomeScreen() {
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const loadTasks = async () => {
      const stored = await AsyncStorage.getItem('tasks');
      if (stored) setTasks(JSON.parse(stored));
    };
    loadTasks();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Tarefas</Text>

      <TouchableOpacity style={styles.btnLogin} onPress={() => router.push('/Login')}>
        <Text style={styles.btnLoginText}>Tela de Login</Text>
      </TouchableOpacity>

      <Button title="Nova Tarefa" onPress={() => router.push('/AdicionarTarefa')} />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            <Text style={styles.taskText}>{item.title}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20, marginTop: 20 }}
        ListEmptyComponent={<Text>Nenhuma tarefa cadastrada.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9F9', padding: 20, paddingTop: 50 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  btnLogin: {
    backgroundColor: '#9e0db8',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  btnLoginText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  taskCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  taskText: { fontSize: 18, color: '#555' },
});
