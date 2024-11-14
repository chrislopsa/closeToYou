import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles';
import {useNavigation, RouteProp} from '@react-navigation/native';
import {Contact, RootStackParamList} from '../types/types';
import {getContacts} from '../services/storage.service';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;
type Props = {
  route: DetailsScreenRouteProp;
};

function DetailsScreen({route}: Props) {
  const navigation = useNavigation<DetailsScreenRouteProp>();
  const [phone, setPhone] = useState('');
  const {id} = route.params;

  useEffect(() => {
    const getContactDetails = async () => {
      try {
        const contacts: Contact[] = await getContacts();
        const contact: Contact | undefined = contacts.find(
          cont => cont.id === id,
        );
        if (contact) {
          setPhone(contact.phone);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getContactDetails();
  }, [id]);

  return (
    <View>
      <Text style={styles.title}>Phone Number: {phone}</Text>
    </View>
  );
}
export default DetailsScreen;
