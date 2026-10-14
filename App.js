import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import MovieDetailScreen from './screens/MovieDetailScreen';
import MovieListScreen from './screens/MovieListScreen';
import RegisterScreen from './screens/RegisterScreen';
import ReviewFormScreen from './screens/ReviewFormScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/*
  Navigation:
  NavigationContainer
  └── MainTabs (bottom tabs)
      ├── Home       → HomeScreen
      ├── MovieMenu  → MainStack
      │     ├── MovieList    (första screenen)
      │     ├── MovieDetail
      │     ├── Review
      │     ├── Login
      │     └── Register
      └── Account    → LoginScreen
*/


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainStack() {
  return (
  <Stack.Navigator>
    <Stack.Screen name="MovieList" component={MovieListScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Review" component={ReviewFormScreen} />
  </Stack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="MovieMenu" component={MainStack} />
      <Tab.Screen name="Account" component={LoginScreen} />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MainTabs />
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
