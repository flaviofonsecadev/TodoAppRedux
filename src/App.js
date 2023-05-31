
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, markTaskAsCompleted, deleteTask } from './store';

const App = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [taskTitle, setTaskTitle] = useState('');

  const handleAddTask = () => {
    dispatch(addTask({ id: tasks.length + 1, title: taskTitle }));
    setTaskTitle('');
  };

  const handleCompleteTask = (taskId) => {
    dispatch(markTaskAsCompleted(taskId));
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Lista de Tarefas utilizando react-redux:</Text>
      {tasks.map((task) => (
        <View key={task.id} style={styles.taskContainer}>
          <Text
            style={[styles.taskTitle, task.completed && styles.completedTask]}
          >
            {task.title}
          </Text>
          <View style={styles.taskActions}>
            {!task.completed && (
              <Button
                title="Concluir"
                onPress={() => handleCompleteTask(task.id)}
              />
            )}
            <Button
              title="Excluir"
              onPress={() => handleDeleteTask(task.id)}
            />
          </View>
        </View>
      ))}
      <TextInput
        style={styles.input}
        placeholder="Nova tarefa"
        value={taskTitle}
        onChangeText={setTaskTitle}
      />
      <Button title="Adicionar" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  taskTitle: {
    flex: 1,
    fontSize: 18,
  },
  completedTask: {
    textDecorationLine: 'line-through',
  },
  taskActions: {
    flexDirection: 'row',
  },
});

export default App;

