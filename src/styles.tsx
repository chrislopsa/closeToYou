import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  label: {
    fontSize: 25,
    marginBottom: 8,
  },
  input: {
    height: 40,
    marginBottom: 8,
    borderColor: '#ccc',
    paddingLeft: 18,
    borderWidth: 2,
    borderRadius: 25,
    fontSize: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  contactItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  contactName: {
    fontSize: 18,
  },
  itemContainer: {
    paddingVertical: 15,
    borderBottomColor: '#6f6f6f',
    borderBottomWidth: 0.5,
  },
});

export default styles;
