import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

type Props = {
  onPress: () => void;
  title: string;
  disabled?: boolean;
  invisible?: boolean;
  styles?: any;
};

const DefaultButton: React.FC<Props> = ({ title, styles, ...props }) => (
  <TouchableOpacity activeOpacity={0.6} style={styles.button} {...props}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const Button: React.FC<Props> = ({ invisible, ...props }) =>
  invisible ? (
    <DefaultButton {...props} invisible={invisible} styles={styles.invisible} />
  ) : (
    <DefaultButton {...props} styles={styles.normal} />
  );

export default Button;
