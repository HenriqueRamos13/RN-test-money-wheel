import React, { useContext, useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import Button from "../../components/Button";
import Wheel from "../../components/Wheel";
import { AuthContext } from "../../utils/contexts/auth.context";
import { styles } from "./styles";

export default function Home() {
  const [spinning, setSpinning] = useState(false);
  const [score, setScore] = useState(0);
  const { logout } = useContext(AuthContext);

  const alertResult = () => {
    const claim = Math.floor(Math.random() * 100);
    Alert.alert(
      "Congratulations!",
      `You won ${claim} credits!`,
      [
        {
          text: "Claim",
          onPress: () => {
            setScore((score) => (score += claim));
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>Hi Guest! Your score is: {score}</Text>
        <Button title="Logout? ❌" onPress={logout} invisible />
      </View>
      <Wheel
        spinning={spinning}
        stopSpinning={(spinned: boolean) => {
          setSpinning(false);
          spinned && alertResult();
        }}
      />
      <Button title="Spin wheel" onPress={() => setSpinning(true)} />
    </View>
  );
}
