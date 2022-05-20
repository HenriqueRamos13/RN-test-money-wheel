import React, { useEffect } from "react";
import { Alert, Animated, Easing, View } from "react-native";
import { styles } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = {
  spinning: boolean;
  stopSpinning: (spinned: boolean) => void;
};

const Wheel: React.FC<Props> = ({ spinning, stopSpinning }) => {
  const spinValue = new Animated.Value(0);

  const startSpin = async () => {
    const lastSpinDate = await AsyncStorage.getItem("@lastSpinDate");

    if (lastSpinDate) {
      const diff = new Date().getTime() - new Date(lastSpinDate).getTime();
      const diffHours = Math.floor(diff / (1000 * 60 * 60));

      if (diffHours < 24) {
        Alert.alert(
          "Sorry",
          "You can spin only once per day",
          [{ text: "OK" }],
          { cancelable: false }
        );
        return stopSpinning(false);
      }
    }

    await AsyncStorage.setItem("@lastSpinDate", new Date().toString());

    Animated.timing(spinValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start((e) => {
      if (e.finished) return stopSpinning(true);
    });
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "814deg"],
  });

  useEffect(() => {
    spinning && startSpin();
  }, [spinning]);

  return (
    <View style={styles.container}>
      <View style={styles.triangle}></View>
      <Animated.Image
        source={{ uri: "https://i.ibb.co/RyMb1yQ/wheel.png" }}
        style={{ ...styles.image, transform: [{ rotate: spin }] }}
      />
    </View>
  );
};

export default Wheel;
