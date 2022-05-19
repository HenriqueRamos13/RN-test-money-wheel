import React, { useContext } from "react";
import { View } from "react-native";
import Button from "../../components/Button";
import { AuthContext } from "../../utils/contexts/auth.context";
import { styles } from "./styles";

export default function Home() {
  const { logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}
