import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./videocard.style";



const VideoCard = ({ item, handleNavigate }) => {
  
  const {fileId} = item.contentMeta[0] 
  
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
