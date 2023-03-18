import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './styles';

export default function EmptyList() {
  return (
    <View style={styles.container}>
      <Icon name="clipboard" size={60} style={styles.iconTrash} />
      <Text style={{ color: '#3f3f3f', fontWeight: '600', fontSize: 16 }}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={{ color: '#3f3f3f', fontSize: 16 }}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}