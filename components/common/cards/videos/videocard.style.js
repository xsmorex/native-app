import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../../../constants";


// container: (item) => ({

//   borderRadius: SIZES.small,
//   justifyContent: "space-between",
//   ...SHADOWS.medium,
//   shadowColor: COLORS.white,

//   width: 290,
//   height: 290,
//   alignItems: "center",
// }),

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.small,
    borderRadius: SIZES.small,
    backgroundColor: "#FFF",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },

  image: (aspectRatio)=> ({
    width: '100%',
    flex: 1,
    height: undefined,
    aspectRatio: aspectRatio,
  }),
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
    borderRadius: 10,
    backgroundColor: COLORS.gray,
    position: "relative",
    height:'50px',
    overflow : 'hidden',
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
