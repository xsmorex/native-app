import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: (item) => ({

    borderRadius: SIZES.small,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    backgroundColor: COLORS.lightWhite,
    width: 300,
    height: 260,
    alignItems: "center",
    
  }),

  image: {
    width: "100%",
    flex:1,
    borderRadius: SIZES.large,
  },

});

export default styles;
