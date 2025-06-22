import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import { useTask } from '../context/TaskContext';
import TaskItem from '../components/TaskItem';
import { Picker } from '@react-native-picker/picker';

const HomeScreen: React.FC = () => {
    const { tasks, addTask, filter, setFilter } = useTask();
    const [title, setTitle] = useState('');
    const [error, setError] = useState('');

    const handleAddTask = () => {
        if (!title.trim()) {
            setError('Task title cannot be empty!');
            return;
        }
        addTask(title);
        setTitle('');
        setError('');
        Keyboard.dismiss();
    };

    return (
        <View style={styles.container}>
            <TextInput
                value={title}
                onChangeText={(text) => {
                    setTitle(text);
                    if (error) setError('');
                }}
                placeholder="New Task"
                style={styles.input}
            />

            {error && <Text style={styles.errorText}>{error}</Text>}

            <TouchableOpacity
                onPress={handleAddTask}
                style={[styles.addButtonStyle, !title && styles.disabledButton]}
                disabled={!title}
            >
                <Text style={{ color: 'white' }}>Add Task</Text>
            </TouchableOpacity>

            <Picker
                selectedValue={filter}
                onValueChange={(val) => setFilter(val)}
                style={styles.picker}
            >
                <Picker.Item label="All" value="All" />
                <Picker.Item label="Completed" value="Completed" />
                <Picker.Item label="Pending" value="Pending" />
            </Picker>

            <FlatList
                data={tasks}
                keyExtractor={(item) => item._id.toHexString()}
                ListEmptyComponent={<EmptyList />}
                renderItem={({ item }) => <TaskItem task={item} />}
            />
        </View>
    );
};

const EmptyList = () => (
    <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No tasks found. Add a new task!</Text>
    </View>
);

const styles = StyleSheet.create({
    container: { padding: 16, flex: 1 },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginVertical: 8, borderRadius: 10 },
    picker: { marginVertical: 8, borderRadius: 10, width: '50%', alignSelf: 'flex-end' },
    addButtonStyle: {
        borderRadius: 10,
        backgroundColor: 'blue',
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '55%'
    },
    emptyText: {
        fontSize: 16,
        color: 'gray'
    },
    errorText: {
        color: 'red',
        marginBottom: 8,
    },
    disabledButton: {
        backgroundColor: 'gray',
        opacity: 0.6,
    },
});

export default HomeScreen;