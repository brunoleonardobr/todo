import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerTask: {
    flex: 1,
    backgroundColor: '#262626',
    borderRadius: 10,
    borderColor: '#2d2d2d',
    borderStyle: 'solid',
    borderWidth: 2,
    height: 70,
    padding: 16,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskText: {
    color: '#fff'
  }
})