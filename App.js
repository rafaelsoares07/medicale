import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/app/components/button/Button';
import "./src/styles/global.css"

export default function App() {

  var nome = "rafael"
  
  return (
    <View>
            <Text className="text-red-500 text-6xl">Olá, {nome} tudo bem? ghghghgh</Text>

            <Text className="text-red-500">Olá, {nome} tudo bem? ghghghgh</Text>

            <Text className="text-red-500">Olá, {nome} tudo bem? ghghghgh</Text>

      <Text className="text-red-500">Olá, {nome} tudo bem? ghghghgh</Text>
      <Button text="Rafael ta bom?" />
      <StatusBar style="auto" />
    </View>
  );
}


