import { StyleSheet, View } from "react-native";
import MapScreen from "./screens/MapScreen";
import { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import Navbar from "./components/Navbar";
import ProfileScreen from "./screens/ProfileScreen";
import ShareScreen from "./screens/ShareScreen";

const screens = [
  <HomeScreen />,
  <MapScreen />,
  <ShareScreen />,
  <ProfileScreen />,
];

const App = () => {
  const [screen, setScreen] = useState(screens[1]);

  const setScreenByIndex = (index: number) => {
    return setScreen(screens[index]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.screen}>{screen}</View>
      <View style={styles.navbar}>
        <Navbar setScreen={setScreenByIndex} />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  screen: {
    width: "100%",
    height: "90%",
  },
  navbar: {
    width: "100%",
    height: "10%",
  },
});
