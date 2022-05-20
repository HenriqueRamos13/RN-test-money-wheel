import React from "react";
import { TextInput as RNTextInput, SafeAreaView } from "react-native";
import { styles } from "./styles";

type Props = {
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
};

const TextInput: React.FC<Props> = (props) => (
  <RNTextInput style={styles.input} {...props} />
);

export default TextInput;
