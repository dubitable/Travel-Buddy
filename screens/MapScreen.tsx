import { StyleSheet, View } from "react-native";
import MapView, { LongPressEvent, Marker, Region } from "react-native-maps";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { countries } from "../countries";

const getCountry = () => {
  const country = countries[Math.floor(Math.random() * countries.length)];
  console.log(country.name, country.id);
  return country;
};

const country = getCountry();

const COORD_CONV = 111111; // see https://gis.stackexchange.com/questions/2951/algorithm-for-offsetting-a-latitude-longitude-by-some-amount-of-meters
const ZOOM = 1000; // in m

const getLatitudeDelta = () => ZOOM / COORD_CONV;
const getLongitudeDelta = (lat: number) => ZOOM / (COORD_CONV * Math.cos(lat));

const MapScreen = () => {
  const [location, setLocation] = useState(false);

  const [reg, setRegion] = useState(country.region);
  const [markers, setMarkers] = useState<Region[]>([]);

  const addMarker = ({ coordinate }: LongPressEvent["nativeEvent"]) => {
    const { latitude, longitude } = coordinate;
    setMarkers([...markers, { ...reg, latitude, longitude }]);
  };

  useEffect(() => {
    const getPerms = async () => {
      if (location) return;

      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") return;

      const { coords } = await Location.getCurrentPositionAsync();
      const { accuracy, latitude, longitude } = coords;

      const latitudeDelta = getLatitudeDelta() * 100;
      const longitudeDelta = getLongitudeDelta(latitude) * 100;

      setLocation(true);
      setRegion({ latitude, longitude, latitudeDelta, longitudeDelta });
    };

    getPerms();
  });

  return (
    <View>
      <MapView
        style={styles.map}
        region={reg}
        onLongPress={(e) => addMarker(e.nativeEvent)}
      >
        {markers.map((region, index) => (
          <Marker key={index} coordinate={region} />
        ))}
      </MapView>
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
