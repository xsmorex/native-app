import { useState } from 'react'
import {
  View, Text, TextInput, TouchableOpacity, Image,
  FlatList
} from 'react-native'

import { useRouter } from 'expo-router';

import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Annie</Text>
        <Text style={styles.welcomeMessage}>Here's your photo feed</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder='What are you looking for?'
            value=''
            onChange={() => { }}

          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => { }}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Welcome