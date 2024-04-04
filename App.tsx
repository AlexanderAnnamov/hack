import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Routes from "./src/navigation/Routes";
import { NavigationContainer } from "@react-navigation/native";
import linking from "./src/navigation/Linking";

export default function App() {
  return (
    <View >
       <NavigationContainer  linking={linking}>
        <Routes />
      </NavigationContainer>
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
});
