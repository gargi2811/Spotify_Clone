import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Song } from "../../types";

import { AntDesign, FontAwesome } from "@expo/vector-icons";
// import Marquee from "react-fast-marquee";
import { Audio } from "expo-av";
const song = {
  id: "1",
  uri: "http://webaudioapi.com/samples/audio-tag/chrono.mp3",
  imageUri: "https://i.scdn.co/image/ab67616d0000b273a935e4689f15953311772cc4",
  title: "Forever",
  artist: " Sam Smith, Kim Petras",
};

const PlayerWidget = () => {
  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [duration, setduration] = useState<number | null>(null);
  const [position, setposition] = useState<number | null>(null);
  const onPlaybackStatusUpdate = (status) => {
    setIsPlaying(status.isPlaying);
    setposition(status.position);
    setduration(status.duration);
  };

  const playCurrentSong = async () => {
    if (sound) {
      await sound.unloadAsync();
    }
    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri: song.uri },
      { shouldPlay: isPlaying },
      onPlaybackStatusUpdate
    );
    setSound(newSound);
  };
  useEffect(() => {
    playCurrentSong();
  }, []);
  const onPlayPausePress = async () => {
    if (!sound) {
      return;
    }
    if (isPlaying) {
      await sound.stopAsync();
    } else {
      await sound.playAsync();
    }
  };
  const getProgress = () => {
    if (sound === null || duration === null || position === null) {
      return 0;
    }
    return (position / duration) * 100;
  };

  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${getProgress()}%` }]} />
      <View style={styles.row}>
        <Image source={{ uri: song.imageUri }} style={styles.image} />
        <View style={styles.rightContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.title}>{song.title}</Text>
            <Text style={styles.artist}>{song.artist}</Text>
          </View>
          <View style={styles.iconsContainer}>
            <AntDesign name="hearto" size={20} color={"white"} />
            <TouchableOpacity onPress={onPlayPausePress}>
              <FontAwesome
                name={isPlaying ? "pause" : "play"}
                size={20}
                color={"white"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlayerWidget;
