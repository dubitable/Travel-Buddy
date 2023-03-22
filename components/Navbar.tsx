import React from "react";
import { Dimensions, StyleSheet, TouchableHighlight, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Component } from "../utils";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const iconSize = HEIGHT * 0.1 * 0.3;

type NavbarProps = {
  setScreen: (index: number) => void;
};

const icons = ["home", "map", "share-2", "user"] as const;

const Navbar: Component<NavbarProps> = ({ setScreen }) => {
  return (
    <View style={styles.nav}>
      {icons.map((elem, index) => (
        <TouchableHighlight onPress={() => setScreen(index)} key={index}>
          <Feather name={elem} size={iconSize} color="white" />
        </TouchableHighlight>
      ))}
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  nav: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: WIDTH / 4 - iconSize,
    paddingBottom: "7%",
  },
});
