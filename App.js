import { StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import AccountScreen from './screens/AccountScreen';
import MovieDetailScreen from './screens/MovieDetailScreen';
import MovieListScreen from './screens/MovieListScreen';
import RegisterScreen from './screens/RegisterScreen';
import ReviewFormScreen from './screens/ReviewFormScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';
import { Righteous_400Regular } from '@expo-google-fonts/righteous';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { AuthProvider } from './context/AuthContext';
import { colors } from './constants/Colors';

/*
  Navigation:
  NavigationContainer
  └── MainTabs (bottom tabs)
      ├── Home       → HomeScreen
      ├── MovieMenu  → MainStack
      │     ├── MovieList    (första screenen)
      │     ├── MovieDetail
      │     └── Review
      └── Account    → AccountStack
            ├── Login        (första screenen)
            └── Register
*/


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainStack() {
  return (
    <Stack.Navigator 
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MovieList" component={MovieListScreen} />
      <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
      <Stack.Screen name="Review" component={ReviewFormScreen} />
    </Stack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false,
        tabBarStyle: {backgroundColor: colors.background },
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.textMuted, 
       }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="MovieMenu"
        component={MainStack}
        options={{
          popToTopOnBlur: true,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountStack}
        options={{
          popToTopOnBlur: true,
        }}
      />
    </Tab.Navigator>
  );
}

function AccountStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={AccountScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}


export default function App() {
  
const [fontsLoaded] = useFonts({
  Righteous_400Regular,
  Poppins_400Regular,
});

if (!fontsLoaded) {
  return null;
}
  return (
    <AuthProvider>
      <NavigationContainer>
        <MainTabs />
      </NavigationContainer>
    </AuthProvider>
  );
};
