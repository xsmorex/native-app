import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { observer, inject } from "mobx-react"

import styles from './photosTimeline.style'
import { COLORS, SIZES } from '../../../constants'

import PhotoCard from "../../common/cards/photos/PhotoCard";


const PhotosTimeline = inject("photos")(observer(({photos:model}) => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Photos Timeline</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {model.isLoading ? (
          <ActivityIndicator size='large' colors={COLORS.primary} />
        ) : model.error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList

            data={model.allPhotos}
            renderItem={({ item }) => (
              <PhotoCard
                item={item}
                //handleCardPress={}
              />
            )}
            keyExtractor={item => item?.id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  )
}))

export default PhotosTimeline