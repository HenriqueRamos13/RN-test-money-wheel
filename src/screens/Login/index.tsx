import React, { useContext, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import { styles } from "./styles";
import { AuthContext } from "../../utils/contexts/auth.context";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AuthContext);

  const signIn = () => setUser({ email });

  const goToScreen = (s) => navigation.navigate(s);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <View>
        <TextInput
          keyboardType="email-address"
          placeholder="E-mail"
          onChangeText={(v) => setEmail(v)}
          value={email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          onChangeText={(v) => setPassword(v)}
          value={password}
        />
        <Button title="Sign In" onPress={signIn} />
        <Button
          title="Forgot your password?"
          invisible
          onPress={() => goToScreen("Recovery")}
        />
      </View>
      <View></View>
    </SafeAreaView>
  );
}
