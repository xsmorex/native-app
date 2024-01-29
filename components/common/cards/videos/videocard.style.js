import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../../constants";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: "#FFF",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,

  },

  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
    borderRadius: 10,
    backgroundColor: COLORS.gray2,
    height: 200,
    position: "relative",
  },

  cardName: {
    fontSize: SIZES.large,
    fontFamily: "DMBold",
    color: COLORS.white,

  },
  cardText: {
    position: "absolute",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    bottom: 10,
    paddingLeft: SIZES.large,
    paddingRight: SIZES.large,
    
  },
  cardType: {
    fontSize: SIZES.small + 2,
    fontFamily: "DMRegular",
    color: COLORS.gray,
    marginTop: 3,
    textTransform: "capitalize",
  },



});

export default styles;
