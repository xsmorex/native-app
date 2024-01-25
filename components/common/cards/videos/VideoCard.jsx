import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./videocard.style";

const VideoCard = ({ item, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: item.id
          }}
          resizeMode='contain'
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {item?.numberOfLikes}
        </Text>
        <Text style={styles.jobName} numberOfLines={1}>
          {item?.publishedAt}
        </Text>
        
      </View>
    </TouchableOpacity>
  );
};

export default VideoCard;
