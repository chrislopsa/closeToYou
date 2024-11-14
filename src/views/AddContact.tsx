import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {Contact, RootStackParamList} from '../types/types';
import {getContacts, saveContact} from '../services/storage.service';
import styles from '../styles';
import {useNavigation} from '@react-navigation/native';
import {Button as NavButton} from '@react-navigation/elements';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

function AddContactScreen() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const createContactObject = (name: string, phone: string): Contact => {
    const contact: Contact = {
      id: String(Date.now().toString()),
      name,
      phone,
    };
    return contact;
  };

  const addContact = async () => {
    const contact: Contact = createContactObject(name, phone);
    await saveContact(contact);
    setName('');
    setPhone('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Ingresa el Nombre"
      />
      <Text style={styles.label}>Phone:</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        placeholder="Ingresa el Telefono"
      />
      <Button title="Añadir Contacto" onPress={addContact} />
    </View>
  );
}
export default AddContactScreen;
