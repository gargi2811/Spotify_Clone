import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    // width: 400,
    // height: "3%",
    position: "absolute",
    bottom: 49,

    // margin: 10,
    backgroundColor: "#3C4048",
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    // alignItems: "center",
  },
  progress: {
    height: 3,
    width: "100%",
    backgroundColor: "#bcbcbc",
  },
  row: {
    flexDirection: "row",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    margin: 5,
  },
  artist: {
    color: "lightgrey",
    fontSize: 14,
  },
  image: {
    width: 60,
    height: 55,
    borderWidth: 3,

    // marginRight: 10,
  },
  rightContainer: {
    flex: 1,
    width: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconsContainer: {
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
    width: 50,
    justifyContent: "space-between",
  },
});

export default styles;
