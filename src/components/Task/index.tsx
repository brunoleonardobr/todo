import { Text, View } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Feather';

type Tasks = {
  description: String,
  id: number,
  setTaskCompleted: (id: number, isChecked: boolean) => void,
  removeTask: (id: number) => void
}

export default function Task({ id, description, setTaskCompleted, removeTask }: Tasks) {
  return (
    <View style={styles.containerTask}>
      <BouncyCheckbox
        fillColor='#585abd'
        size={20}
        iconStyle={{ borderColor: '#4ea8de', borderWidth: 2 }}
        onPress={(isChecked: boolean) => setTaskCompleted(id, isChecked)} />
      <Text style={styles.taskText}>{description}</Text>
      <Text style={styles.taskText}><Icon name="trash-2" size={18} onPress={() => removeTask(id)} /></Text>
    </View>
  )
}