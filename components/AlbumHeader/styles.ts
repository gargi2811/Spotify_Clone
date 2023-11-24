import React from "react";
import { StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { withSafeAreaInsets } from "react-native-safe-area-context";
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    margin: 15,
    marginLeft: 75,
  },
  creatorContainer: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#2e8b57",
    opacity: 0.8,
    height: 40,
    width: 150,
    borderRadius: 50,
    marginLeft: 100,
    marginTop: 10,
    justifyContent: "center",
  },
  buttonText: {
    color: "lightgrey",
    fontweight: "bold",
    fontSize: 24,
    marginLeft: 45,
    // marginTop: 10,
  },
  name: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 95,
  },
  creator: {
    color: "white",
    marginLeft: 125,
    fontSize: 20,
  },
  likes: {
    color: "white",
    margin: 5,
    fontSize: 20,
  },
});

export default styles;
