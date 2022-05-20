import React, { useEffect } from "react";
import { Animated, Easing, View } from "react-native";
import { styles } from "./styles";

type Props = {
  spinning: boolean;
  stopSpinning: () => void;
};

const Wheel: React.FC<Props> = ({ spinning, stopSpinning }) => {
  const spinValue = new Animated.Value(0);

  const startSpin = () => {
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start((e) => {
      if (e.finished) return stopSpinning();
    });
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "814deg"],
  });

  useEffect(() => {
    if (spinning) return startSpin();
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
