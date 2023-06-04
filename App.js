import { StyleSheet, Text, View } from 'react-native';

// TABS
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// react-native-vector-icons/Ionicons otherwise.
import Ionicons from '@expo/vector-icons/Ionicons';

// COMPONENTS
import HomeScreen from './components/Home';
import RaveScreen from './components/Rave';
import RecordScreen from './components/Record';

// REDUX
import { store, persistor } from './scripts/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                switch (route.name) {
                  case 'Home':
                    iconName = focused
                      ? 'home'
                      : 'home-outline';
                    break;
                  case 'Record':
                    iconName = focused
                      ? 'mic'
                      : 'mic-outline';
                    break;
                  case 'Rave':
                    iconName = focused
                      ? 'musical-note'
                      : 'musical-note-outline';
                    break;

                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Record" component={RecordScreen} />
            <Tab.Screen name="Rave" component={RaveScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
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
  }
});
