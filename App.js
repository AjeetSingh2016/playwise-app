import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Home from './src/Home';
import HomeScreen from './src/screens/HomeScreen';
import Store from './src/store';
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={Store}>
      <View style={styles.container}>
        <Home />
        <StatusBar style="auto" />
      </View>
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
});
