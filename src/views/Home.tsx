import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Contact} from '../types/types';
import {getContacts, saveContact} from '../services/storage.service';
import styles from '../styles';

function HomeScreen() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [contacts, setContacts] = useState<Contact[]>([]);

  const loadContacts = async () => {
    const storedContacts = await getContacts();
    setContacts(storedContacts);
  };

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
    loadContacts();
  };

  useEffect(() => {
    loadContacts();
  }, []);

  const renderItem = ({item}: {item: Contact}) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Text style={styles.contactName}>{item.name}</Text>
    </TouchableOpacity>
  );

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
      <Text style={styles.title}>My Contacts</Text>
      <View>
        <FlatList
          data={contacts}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}
export default HomeScreen;
