import { COLORS, SIZES } from "../../constants/theme";

const styles = {
  page: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    backgroundColor: COLORS.blue1,
    zIndex: 99,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  banner: {
    marginTop: SIZES.medium,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  titleIcon: {
    height: SIZES.xxxLarge,
    width: "auto",
    marginRight: SIZES.large,
  },
  title: {
    fontSize: SIZES.xxLarge,
    fontWeight: 200,
    padding: 0,
    margin: 0,
  },
  content: {
    marginTop: SIZES.medium,
    width: "80%",
    alignItems: "left",
    fontSize: SIZES.medium,
    overflowY: "auto",
  },
  subtitle: {
    fontSize: SIZES.large,
    fontWeight: 400,
    padding: 0,
    margin: 0,
  },
  tablefield: {
    width: 70,
  }
}

export default styles; 