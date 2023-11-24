import { StyleSheet, Text, View, FlatList, Button } from "react-native";
// import { FlatList } from "react-native-gesture-handler";
import AlbumCategory from "../components/AlbumCategory";
// import EditScreenInfo from "../components/EditScreenInfo";
// import { Text, View } from "../components/Themed";
// import { RootTabScreenProps } from '../types';
import albumCategories from "../data/albumCategories";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={albumCategories}
        renderItem={({ item }) => (
          <AlbumCategory title={item.title} albums={item.albums} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
