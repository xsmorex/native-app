import { TouchableOpacity, Image } from 'react-native'

import styles from './photocard.style'


const PhotoCard = ({ item, handleCardPress }) => {
  return (

    <TouchableOpacity
      style={styles.container(item)}
    //onPress={() => handleCardPress(item)}
    >
      <Image
        source={{
          uri: item.url
        }}
        resizeMode='cover'
        style={styles.image}
      />

    </TouchableOpacity>
  )
}

export default PhotoCard