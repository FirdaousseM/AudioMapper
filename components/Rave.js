import { StyleSheet, Text, View } from 'react-native';

import RecordingsScreen from "./rave/RecordingsScreen";
import MySoundsScreen from "./rave/mySoundsScreen";
import DefaultSoundsScreen from "./rave/defaultSoundsScreen";

// TABS
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

export default function Rave() {
  const Tab = createMaterialTopTabNavigator()
    
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator initialRouteName="My Sounds">
        <Tab.Screen name={"My Sounds"} component={MySoundsScreen}></Tab.Screen>
        <Tab.Screen name={"Default Sounds"} component={DefaultSoundsScreen}></Tab.Screen>
        <Tab.Screen name={"Recordings"} component={RecordingsScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
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