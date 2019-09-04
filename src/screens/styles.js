import { StyleSheet } from "react-native";
import { COLORS } from "../constants/styles";

const Styles = StyleSheet.create({
  container: {
    // flex: 1,
    // height: "100%"
  },
  containerUser: {
    padding: 20,
    justifyContent: "flex-start",
    width: "100%"
  },
  containerName: {
    // flex: 1,
    flexDirection: "row",
    width: "100%"
  },
  profilePicture: {
    width: 50,
    height: 50,
    resizeMode: "stretch",
    borderRadius: 100
  },
  profileName: {
    color: COLORS.PRIMARY,
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    width: "100%"
  },
  margin: {
    margin: 10
  },
  containerLinks: {
    marginTop: 10,
    width: "100%",
    backgroundColor: "#000",
    padding: 20
  },
  textTitle: {
    color: "#fff",
    fontSize: 11
  },
  textValue: {
    color: "#fff"
  },
  containerInfo: {
    backgroundColor: "#000",
    padding: 20,
    marginTop: 10,
    width: "100%"
  },
  containerLabels: {
    flexDirection: "row"
  },
  label: {
    borderRadius: 50,
    backgroundColor: "#999",
    color: "#fff",
    padding: 7,
    marginRight: 10
  }
});

export default Styles;
