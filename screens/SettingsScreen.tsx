import { StyleSheet, View, Text } from "react-native";

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text> Hello World </Text>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
