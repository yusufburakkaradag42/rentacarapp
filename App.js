
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import SavedScreen from './screens/SavedScreen';
import SettingScreen from './screens/SettingScreen';


const Stack = createNativeStackNavigator();
const Tab =  createBottomTabNavigator();



export default function App() {
  return (
  <NavigationContainer>
    <Tab.Navigator  style={{
          labelStyle: { textAlign: 'center' }, // Başlıkları ortala
        }}>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Map' component={MapScreen} />
      <Tab.Screen name='Saved' component={SavedScreen} />
      <Tab.Screen name='Setting' component={SettingScreen} />
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
});
