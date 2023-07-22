import { COLORS, SIZES } from "../../constants/theme";

const styles = {
  card: (cardOpen) => ({
    boxSizing: "border-box",
    width: "90%",
    padding: SIZES.xSmall,
    marginTop: SIZES.xSmall,
    borderRadius: SIZES.xSmall,
    backgroundColor: cardOpen ? "black" : COLORS.blue1,
    color: "white",
    transitionTimingFunction: "ease-in-out",
    transitionDuration: "0.3s",
  }),
  cardTop: {
    display: "flex",
    justifyContent: "space-between",
  },
  dropDownButton: (cardOpen) => ({
    transform: cardOpen ? "scale(1.4, 0.6) rotate(0)" : "scale(1.4, 0.6) rotate(180deg)",
    transitionTimingFunction: "ease-in-out",
    transitionDuration: "0.3s",
  }),
  icon: {
    display: "inline-block",
    height: SIZES.medium,
    width: "auto",
    marginRight: SIZES.xSmall,
  },
  details: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    paddingTop: SIZES.xSmall,
  },
  title: {
    fontSize: SIZES.small,
  }
}

export default styles; 