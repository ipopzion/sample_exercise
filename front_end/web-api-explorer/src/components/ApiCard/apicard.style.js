import { COLORS, SIZES } from "../../constants/theme";

const styles = {
  card: (cardOpen) => ({
    boxSizing: "border-box",
    width: "90%",
    padding: SIZES.small,
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
    transform: cardOpen ? "scale(1.5, 0.7) rotate(0)" : "scale(1.5, 0.7) rotate(180deg)",
    transitionTimingFunction: "ease-in-out",
    transitionDuration: "0.3s",
  }),
  detail: (cardOpen) => ({
    display: cardOpen ? "block" : "none",
  })
}

export default styles; 