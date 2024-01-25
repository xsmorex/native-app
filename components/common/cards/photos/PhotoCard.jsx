import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './photocard.style'

import { checkImageURL } from "../../../../utils";

const PhotoCard = ({ item, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(item)}
      //onPress={() => handleCardPress(item)}
    >

      <TouchableOpacity style={styles.logoContainer(item)}>
        <Image
          source={{
            uri: item.url
          }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.description}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(item)} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.location}>
          {item.user}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default PhotoCard