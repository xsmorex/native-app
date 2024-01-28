import React, {useRef} from 'react'
import { View, Text, StyleSheet } from "react-native";

import Video from 'react-native-video';


//import { Video, ResizeMode } from 'expo-av';


const VideoPlayer = () => {

  //const { fileId } = item.contentMeta[0]

  //const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  var styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });

  return (
    <View>
      <Text>Renderd</Text>
      <Video
       source={{uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}}   // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }}                                      // Store reference
       onBuffer={this.onBuffer}                // Callback when remote video is buffering
       onError={this.videoError}               // Callback when video cannot be loaded
       style={styles.backgroundVideo} />
    </View>
  )

  
}


export default VideoPlayer