import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    color: '#0d0d0d'
  },
  image: {
    marginTop: 40,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    height: 48,
    padding: 16,
    marginTop: 20,
    zIndex: 1
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#262626',
    borderRadius: 8,
    color: '#FFF',
    padding: 16,
    marginRight: 5
  },
  button: {
    backgroundColor: '#1e6f9f',
    width: 56,
    height: 56,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 24
  },
  containerList: {
    width: '100%',
    height: '100%',
    backgroundColor: '#191919',
    padding: 20
  },
  statusBar: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
    color: '#fff',
    marginTop: 40,
    justifyContent: 'space-between',
    borderBottomColor: '#4F4F4F',
  },
  barCreated: {
    height: 20,
    flexDirection: 'row',
  },
  aliasCreated: {
    color: '#1e6f9f',
    fontSize: 16,
    fontWeight: '900',
  },
  barCompleted: {
    height: 20,
    flexDirection: 'row',
  },
  aliasCompleted: {
    color: '#6e70cf',
    fontSize: 16,
    fontWeight: '900'
  },
  textCreated: {
    width: 30,
    height: 20,
    backgroundColor: '#333333',
    textAlign: 'center',
    borderRadius: 10,
    marginLeft: 10,
    color: '#fff',
    fontWeight: '900'
  }
})