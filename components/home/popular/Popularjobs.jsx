import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router';
import { Photos } from '../../../store/photos';
import { observer } from 'mobx-react';

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from "../../common/cards/popular/PopularJobCard";


const Popularjobs = () => {
  const router = useRouter();
  const model = Photos.create()
  //model.loadPhotos()

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.id}`);
    setSelectedJob(item.id);
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular photos</Text>
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
            
            data={model.photos}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
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
}

export default Popularjobs