import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Tareas de hoy */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Tareas de hoy</Text>

        <View style={styles.items}>
          {/* Aqui van las tareas de hoy */}
          <Task text={'Task 1'} />
          <Task text={'Task 2'} />
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper: {
    paddingTop: 90,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
});
