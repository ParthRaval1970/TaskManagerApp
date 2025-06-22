import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { TaskProvider } from './src/context/TaskContext';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <TaskProvider>
      <SafeAreaView style={styles.container}>
        <HomeScreen />
      </SafeAreaView>
    </TaskProvider>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default App;
