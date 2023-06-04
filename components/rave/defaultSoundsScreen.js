import { StyleSheet, Text, View } from 'react-native';

export default DefaultSoundsScreen = () => {
  return (
    <View style={styles.tab}>
      <Text>Default sounds !</Text>
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