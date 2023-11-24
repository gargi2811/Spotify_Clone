import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
import { Album } from "../../types";
import styles from "./styles";

export type AlbumHeaderProps = {
  album: Album;
};

const AlbumHeader = (props: AlbumHeaderProps) => {
  const { album } = props;
  return (
    <View>
      {/* <LinearGradient
        colors={["#c0392b", "#f1c40f", "#8e44ad"]}
        style={styles.container}
      /> */}
      <Image source={{ uri: album.imageUri }} style={styles.image} />
      <Text style={styles.name}>{album.name}</Text>
      <View style={styles.creatorContainer}>
        <Text style={styles.creator}> By {album.by}</Text>
        <Text>{album.numberOfLikes} Likes</Text>
      </View>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonText}>PLAY</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default AlbumHeader;
