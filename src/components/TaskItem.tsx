import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Task } from '../types/Task';
import { useTask } from '../context/TaskContext';

const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
  const { toggleTaskStatus, deleteTask } = useTask();

  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <CheckBox
          value={task.status === 'Completed'}
          onValueChange={() => toggleTaskStatus(task._id)}
        />
        <Text style={[styles.text, task.status === 'Completed' && styles.completed]}>
          {task.title}
        </Text>
      </View>
      <TouchableOpacity onPress={() => deleteTask(task._id)} style={styles.deleteButton}>
        <Text style={styles.deleteText}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 6,
    marginHorizontal: 4,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
    color: '#333',
    flexShrink: 1,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  deleteButton: {
    marginLeft: 12,
    padding: 6,
  },
  deleteText: {
    fontSize: 18,
  },
});

export default TaskItem;
