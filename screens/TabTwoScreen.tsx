import { StyleSheet } from "react-native";

// import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
// import { VStack, Input, Box, Divider, Center } from "native-base";
import SearchBar from "../components/SearchBar";
import { NativeBaseProvider } from "native-base";
// import { SearchBar } from "react-native-screens";
export default function TabTwoScreen() {
  return (
    <NativeBaseProvider>
      <View>
        <SearchBar />
      </View>
      <View>{/* <Card/> */}</View>
    </NativeBaseProvider>
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
