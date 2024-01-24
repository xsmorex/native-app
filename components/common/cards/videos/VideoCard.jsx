import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./videocard.style";
import { checkImageURL } from "../../../../utils";

const VideoCard = ({ photo, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: photo.url
          }}
          resizeMode='contain'
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {photo?.url}
        </Text>

        
      </View>
    </TouchableOpacity>
  );
};

export default VideoCard;
