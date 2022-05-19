import { StyleSheet } from "react-native";

const styles = {
  invisible: StyleSheet.create({
    button: {
      backgroundColor: "transparent",
      height: "auto",
      width: "auto",
    },
    text: {
      color: "#666",
      marginTop: 10,
    },
  }),

  normal: StyleSheet.create({
    button: {
      backgroundColor: "#191919",
      width: "100%",
      height: 50,
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "bold",
    },
  }),
};

export { styles };
