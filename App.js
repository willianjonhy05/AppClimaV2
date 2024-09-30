import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import TesteConcluido from './screens/Teste';
import CidadeShow from './screens/Cidade';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: 'HOME',
          headerStyle: {
            backgroundColor: "#2C3E50",
            padding: 20,
          },
          headerTitleAlign: "center",
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            marginVertical: 20,
          },
        }} />
        <Stack.Screen name="Segunda Tela" component={TesteConcluido} options={({ navigation }) => ({
          title: 'Destinos',
          headerStyle: {
            backgroundColor: "#2C3E50",
            padding: 20,
          },
          headerTitleAlign: "center",
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            marginVertical: 20,
          },
          headerLeft: () => (
            <Ionicons 
              name="menu" 
              size={24} 
              color="#ffffff" 
              style={{ marginLeft: 10 }} 
              onPress={() => navigation.navigate('Home')} 
            />
          ),
        })} />
        <Stack.Screen name="Cidade" component={CidadeShow} options={({ navigation }) => ({
          title: 'nomeDaCidade',
          headerStyle: {
            backgroundColor: "#2C3E50",
            padding: 20,
          },
          headerTitleAlign: "center",
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            marginVertical: 20,
          },
          headerLeft: () => (
            <Ionicons 
              name="menu" 
              size={24} 
              color="#ffffff" 
              style={{ marginLeft: 10 }} 
              onPress={() => navigation.navigate('Segunda Tela')} 
            />
          ),
        })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
