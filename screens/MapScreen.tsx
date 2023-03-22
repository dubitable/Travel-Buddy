import { StyleSheet, View, Dimensions } from "react-native";
import MapView from "react-native-maps";
import Draggable from "react-native-draggable";
import { Feather } from "@expo/vector-icons";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const iconSize = HEIGHT * 0.1 * 0.3;

const MapScreen = () => {
  return (
    <View>
      <MapView style={styles.map} />
      <Draggable x={WIDTH * 0.85} y={HEIGHT * 0.9 * 0.9} shouldReverse>
        <Feather name="map-pin" size={iconSize * 1.5} color="black" />
      </Draggable>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
