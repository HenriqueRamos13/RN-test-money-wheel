import React, { useContext, useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import Button from "../../components/Button";
import Wheel from "../../components/Wheel";
import { AuthContext } from "../../utils/contexts/auth.context";
import { styles } from "./styles";

export default function Home() {
  const [spinning, setSpinning] = useState(false);
  const { logout } = useContext(AuthContext);

  const alertResult = () => {
    Alert.alert(
      "Congratulations!",
      `You won ${Math.floor(Math.random() * 100)} credits!`,
      [
        {
          text: "Claim",
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>Hi Guest!</Text>
        <Button title="Logout? ❌" onPress={logout} invisible />
      </View>
      <Wheel
        spinning={spinning}
        stopSpinning={() => {
          setSpinning(false);
          alertResult();
        }}
      />
      <Button title="Spin wheel" onPress={() => setSpinning(true)} />
    </View>
  );
}
