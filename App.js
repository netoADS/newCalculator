import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppCalculator from "./src/components";


export default function App() {
  return (
    <View style={styles.container}>
      <AppCalculator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
