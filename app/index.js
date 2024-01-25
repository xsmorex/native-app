import { useState } from 'react';
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { ScreenHeaderBtn, Welcome } from '../components';
import PhotosTimeline from '../components/home/photosTimeline/PhotosTimeline';
import VideosTimeline from '../components/home/videosTimeline/VideosTimeline';
import { Photos } from '../store/photos';
import { Videos } from '../store/videos';
import { Provider } from 'mobx-react';

const Home = () => {

  const router = useRouter();
  const photos = Photos.create()
  const videos = Videos.create()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Provider photos={photos} videos={videos}>
          <View style={{ flex: 1, padding: SIZES.medium }}>
            <Welcome />
            <PhotosTimeline />
            <VideosTimeline />
          </View>
        </Provider>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home; 