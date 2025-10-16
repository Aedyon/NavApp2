import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PetListScreen from './PetListScreen';
import PetDetailScreen from './PetDetailScreen';

const Stack = createNativeStackNavigator();

export default function AdocaoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Lista de Pets" component={PetListScreen} />
      <Stack.Screen name="Detalhes do Pet" component={PetDetailScreen} />
    </Stack.Navigator>
  );
}
