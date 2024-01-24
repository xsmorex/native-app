import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./nearbyjobs.style";
import { COLORS } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import useFetchJobs from "../../../hook/useFetchJobs";
import useFetchApi from "../../../hook/useFetchApi";

const Nearbyjobs = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetchApi();

  //console.log(("cat"),data)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Photos</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((photo) => (
            <NearbyJobCard
              photo={photo}
              key={`nearby-job-${photo.id}`}
              //handleNavigate={() => router.push(`/job-details/${photo.id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
