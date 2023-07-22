import { COLORS, SIZES } from "../../constants/theme";

const styles = {
  mainPanel: (panelOpen) => ({
    position: "absolute",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    transform: panelOpen ? "translateX(0)" : "translateX(100%)",
    display: "flex",
    flexDirection: "row",
    transitionTimingFunction: "ease-in-out",
    transitionDuration: panelOpen ? "0.3s" : "0s",
  }),
  leftOfPanel: {
    flex: "2",
    backgroundColor: "black",
    opacity: 0.6,
  },
  rightOfPanel: {
    flex: "1",
    backgroundColor: COLORS.blue1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowY: "scroll",
  },
  selectProviderMessage: {
    color: "white",
    fontWeight: "400",
    fontSize: SIZES.medium,
  }
}

export default styles; 