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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Catflix"
          component={HomeScreen}
        />
 <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
 <Stack.Screen
          name="MovieDetail"
          component={MovieDetailScreen}
        />
 <Stack.Screen
          name="MovieList"
          component={MovieListScreen}
        />
 <Stack.Screen
          name="Register"
          component={RegisterScreen}
        />
 <Stack.Screen
          name="Review"
          component={ReviewFormScreen}
        />
      </Stack.Navigator>
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
