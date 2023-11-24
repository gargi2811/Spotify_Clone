import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // width: 400,
    // height: "32%",
    flexDirection: "row",
    margin: 10,
    backgroundColor: "rgba(84, 180, 53, 0.3)",
  },
  title: {
    color: "white",
    fontSize: 22,
  },
  artist: {
    color: "lightgrey",
    fontSize: 16,
  },
  image: {
    width: 75,
    height: 70,
  },
  rightContainer: {
    width: 300,
    justifyContent: "space-around",
    marginLeft: 10,
    paddingLeft: 15,
  },
});

export default styles;
