import { useState } from 'react';
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { VideosTimeline, PhotosTimeline, ScreenHeaderBtn, Welcome } from '../components';
import PhotosTimeline from '../components/home/photosTimeline/PhotosTimeline';
import VideosTimeline from '../components/home/videosTimeline/VideosTimeline';

const Home = () => {

  const router = useRouter();

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
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />
          <PhotosTimeline />
          <VideosTimeline />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home; 