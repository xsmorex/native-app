import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Video from 'react-native-video';

//import Video from 'react-native-video';
//import { Video } from "expo-av";

import styles from "./videocard.style";



const VideoCard = ({ item, handleNavigate }) => {


  const { fileId } = item.contentMeta[0]

  var stylez = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });


  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: fileId
          }}
          resizeMode='contain'
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {item?.numOfLikes}
        </Text>
        <Text style={styles.jobName} numberOfLines={1}>
          {fileId}
        </Text>
        <Video
          source={{ uri: fileId }}   // Can be a URL or a local file.
          ref={(ref) => {
            this.player = ref
          }}                                      // Store reference
          onBuffer={this.onBuffer}                // Callback when remote video is buffering
          onError={this.videoError}               // Callback when video cannot be loaded
          style={stylez.backgroundVideo} 
          />
        <Image
          source={{
            uri: fileId
          }}
          resizeMode='contain'
          style={styles.logoImage}
        />

      </View>
    </TouchableOpacity>
  );

};

export default VideoCard;
