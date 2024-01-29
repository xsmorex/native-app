import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Video from 'react-native-video';

import styles from "./videocard.style";



const VideoCard = ({ item, handleNavigate }) => {


  const { fileId, type } = item.contentMeta[0]


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
        <Text style={styles.cardName} numberOfLines={1}>
          {item?.numOfLikes}
        </Text>

        {

          type == ("IMAGE") ?
            <Image
              source={{
                uri: fileId
              }}
              resizeMode='contain'
              style={styles.logoImage}
            /> :
            <Video
              source={{ uri: fileId }}
              ref={(ref) => {
                this.player = ref
              }}                                      // Store reference
              onBuffer={this.onBuffer}                // Callback when remote video is buffering
              onError={this.videoError}               // Callback when video cannot be loaded
              style={styles.backgroundVideo}
            />
        }

      </View>
    </TouchableOpacity>
  );

};

export default VideoCard;
