import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Video from 'react-native-video';

import styles from "./videocard.style";



const VideoCard = ({ item, handleNavigate }) => {


  const { fileId, type } = item.contentMeta[0]


  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <View style={styles.textContainer}>

        {
          type == ("IMAGE") ?
            <Image
              source={{
                uri: fileId
              }}
              resizeMode='contain'
              style={styles.image}
            /> :
            <Video
              source={{ uri: fileId }}
              resizeMode='contain'
              ref={(ref) => {
                this.player = ref
              }}                                      // Store reference
              onBuffer={this.onBuffer}                // Callback when remote video is buffering
              onError={this.videoError}               // Callback when video cannot be loaded
              style={styles.image}
            />
        }
        
        <View style={styles.cardText}>
          <Text style={styles.cardName} numberOfLines={1}>
            {item?.numOfLikes}
          </Text>
          <Text style={styles.cardName} numberOfLines={1}>
            {item?.numOfComments}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

};

export default VideoCard;
