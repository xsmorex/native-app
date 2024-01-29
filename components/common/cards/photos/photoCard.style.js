import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: (item) => ({

    borderRadius: SIZES.small,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,

    width: 290,
    height: 290,
    alignItems: "center",
  }),

  image: {
    width: "100%",
    height: "100%",
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  cardName: (item) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
  }),
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

export default styles;
