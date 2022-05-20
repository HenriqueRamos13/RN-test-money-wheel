import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  user: any;
};

const RankCard: React.FC<Props> = ({ user }) => {
  return (
    <View style={styles.card}>
      <View style={styles.profileName}>
        <Image source={{ uri: user.image }} style={styles.profile} />
        <Text>{user.firstName}</Text>
        <Text> {user.lastName}</Text>
      </View>
      <Text>{user.height}</Text>
    </View>
  );
};

export default RankCard;
