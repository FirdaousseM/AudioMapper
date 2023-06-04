import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addRecording, editRecording, deleteRecording } from '../scripts/slice';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';       


export default RecordScreen = () => {
  
  const [recording, setRecording] = React.useState();
  const [sound, setSound] = React.useState();

  const [filePath, setFilePath] = React.useState('');
  const recordingsList = useSelector(state => state.recordingsList);

  const dispatch = useDispatch();

  const startRecording = async () => {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
      setRecording(recording);
      setFilePath(recording._uri);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  const stopRecording = async () => {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    console.log(recording);
    dispatch(addRecording({
      name: "enregistrement " + (recordingsList.length + 1),
      uri: filePath
    }));
    console.log(recordingsList);
    console.log('Recording stopped and stored at', filePath);
  }

 
  const playSound = async (uri) => {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync({ uri: uri });
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  const editRecordingButton = async (position, newName) => {
    dispatch(editRecording({position: position, newName : newName}));
  }

  const deleteRecordingButton = async (position) => {
    dispatch(deleteRecording({position: position}));
  }  

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  
  return (
    <View style={styles.tab}>
      <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording}
      />
      <FlatList
          data={recordingsList}
          renderItem={({ item }) =>
          <View>
            <Text>{item.name}</Text>
            <Button title="Play" onPress={() => playSound(item.uri)} />
            <Button title="Delete" onPress={() => deleteRecordingButton()} />

          </View>
            
          }
        ></FlatList>
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
  tab:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});