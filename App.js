import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Terceiro Info 2024</Text>
      <Text style={{ fontWeight: 'bold' }}>Etec Prof. Milton Gazetti</Text>
      <Text style={{ fontStyle: 'italic' }}>Desenvolvimento para Dispositivos Móveis 2</Text>
      <StatusBar style="auto" />
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
