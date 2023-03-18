import { useEffect, useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import EmptyList from '../components/EmptyList';
import Task from '../components/Task';
import { styles } from './styles';

type Tasks = {
  description: string,
  id: number
  completed: boolean
}

export default function Home() {
  const [taskDescription, setTaskDescription] = useState<string>('')
  const [taskList, setTaskList] = useState<Array<Tasks>>([])
  const [qtdCreated, setQtdCreated] = useState<number>(0)
  const [qtdCompleted, setQtdCompleted] = useState<number>(0)

  function handleAddTask() {
    if (taskDescription.length > 0) setTaskList(prev => [...prev, { id: taskList.length + 1, description: taskDescription, completed: false }])
    setTaskDescription('')
  }

  function removeTask(id: number) {
    let atualizeTasks = taskList.filter(task => task.id !== id)
    setTaskList(atualizeTasks)
    setQtdCompleted(atualizeTasks.filter(task => task.completed === true).length)
  }

  function setTaskCompleted(id: number, isChecked: boolean) {
    let atualizeTasks = taskList
    atualizeTasks.map(task => { if (task.id === id) task.completed = isChecked })
    setQtdCompleted(atualizeTasks.filter(task => task.completed === true).length)
    setTaskList(atualizeTasks)
  }

  useEffect(() => {
    setQtdCreated(taskList.length)
  }, [taskList])

  return (
    <View style={styles.container}>
      <View><Image source={require('../assets/logo.png')} style={styles.image} /></View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor='#6f6f6f'
          onChangeText={desc => setTaskDescription(desc)}
          value={taskDescription}
        />
        <TouchableOpacity
          style={styles.button}>
          <Text style={styles.buttonText}>
            <Icon name="plus-circle" size={18}
              onPress={handleAddTask} />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerList}>
        <View style={styles.statusBar}>
          <View style={styles.barCreated}>
            <Text style={styles.aliasCreated}>Criadas</Text>
            <Text style={styles.textCreated}>{qtdCreated}</Text>
          </View>
          <View style={styles.barCompleted}>
            <Text style={styles.aliasCompleted}>Concluídas</Text>
            <Text style={styles.textCreated}>{qtdCompleted}</Text>
          </View>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={taskList}
          renderItem={
            ({ item }) => <Task
              key={item.id}
              id={item.id}
              description={item.description}
              setTaskCompleted={setTaskCompleted}
              removeTask={removeTask}
            />} ListEmptyComponent={() => <EmptyList />}
        />
      </View>
    </View>
  )
}