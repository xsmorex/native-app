import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../../../constants";


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

  assetContainer: {
    flex: 1,
    //marginHorizontal: SIZES.small,
    borderRadius: SIZES.xSmall,
    backgroundColor: COLORS.gray2,
    position: "relative",
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
    bottom: SIZES.xSmall,
    paddingLeft: SIZES.xLarge,
    paddingRight: SIZES.xLarge,
    
  },

});

export default styles;
