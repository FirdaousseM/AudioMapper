import * as FileSystem from 'expo-file-system';
import { Asset, useAssets } from 'expo-asset';

const serverAddress = "";

const downloadFile = async () => {
  let directory = FileSystem.documentDirectory = "AudioMapper"
  await FileSystem.makeDirectoryAsync(directory);

  // Download file
  const { url } = await FileSystem.downloadAsync(serverAddress + "/download/", directory + "/hey.wav");
}

// Get the asset file local uri
const [assets, error] = useAssets([require('../assets/audio.wav')]);

// Send file function
const sendFile = async () => {
  let fileUri = assets[0].localUri // The uri of the file you want to upload
  resp = await FileSystem.uploadAsync(serverAddress + "/upload", uri, {
    fieldName: 'file',
    httpMethod: 'POST',
    uploadType: FileSystem.FileSystemUploadType.MULTIPART,
    headers: { filename: uri }
  })
  console.log(resp.body);
}

