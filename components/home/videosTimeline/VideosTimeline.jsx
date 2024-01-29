import { View, Text, TouchableOpacity, ActivityIndicator, FlatList} from "react-native";
import { useRouter } from "expo-router";
import { observer, inject } from "mobx-react"

import styles from "./videostimeline.style";
import { COLORS, SIZES } from "../../../constants";
import VideoCard from "../../common/cards/videos/VideoCard";


const VideosTimeline = inject("videos")(observer(({videos:model}) => {
  //const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Videos Timeline</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {model.isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : model.error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={model.allVideos}
            renderItem={({ item }) => (
              <VideoCard
                item={item}
                //handleCardPress={}
              />
            )}
            keyExtractor={item => item?.id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            
          />
        )}
      </View>
    </View>
  )
}))

export default VideosTimeline;
