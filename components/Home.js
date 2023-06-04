import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, ToastAndroid } from 'react-native';

export default HomeScreen = ({ navigation }) => {

  const [addressInput, setAddressInput] = useState('http://192.168.0.14:');
  const [portInput, setPortInput] = useState('8000');

  const connectAPI = async (navigation) => {
    return fetch(addressInput + portInput, {
      method: 'GET',
    })
    .then(response => {
      console.log(JSON.stringify(response));
      ToastAndroid.show('Connecté au serveur', ToastAndroid.SHORT);
      navigation.navigate('Record');
    })
    .catch(error => {
      console.error(error);
    });

  }

  return (
    <View style={styles.tab}>
      <Text>Adresse IP : </Text>
      <TextInput
        style={styles.addressInput}
        value={addressInput}
        onChangeText={(addressInput) => setAddressInput(addressInput)}>
      </TextInput>
      <Text>Port : </Text>
      <TextInput
        style={styles.addressInput}
        value={portInput}
        onChangeText={(portInput) => setPortInput(portInput)}>
      </TextInput>
      <Button
        title="Connect"
        onPress={() => { connectAPI(navigation) }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addressInput: {
    borderWidth: 2,
    width: 300,
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
});