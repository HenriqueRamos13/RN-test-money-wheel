import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import { styles } from "./styles";

const STEPS = [
  {
    text: "Input your email and new password",
    Component: (props) => <FirstForm {...props} />,
  },
  {
    text: "Input the code sent to your email",
    Component: (props) => <SecondForm {...props} />,
  },
];

const InfoText = ({ text }) => <Text style={styles.infoText}>{text}</Text>;

const FirstForm = ({ nextStep, text }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <InfoText text={text} />
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
      <Button title="Send Code" onPress={nextStep} />
    </>
  );
};

const SecondForm = ({ nextStep, text }) => {
  const [code, setCode] = useState("");

  return (
    <>
      <InfoText text={text} />
      <TextInput
        keyboardType="numeric"
        placeholder="Code"
        onChangeText={(v) => setCode(v)}
        value={code}
      />
      <Button title="Finish" onPress={nextStep} />
    </>
  );
};

export default function Recovery({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(0);

  const recovery = () => goToScreen("Login");

  const goToScreen = (s) => navigation.navigate(s);

  const nextStep = () => {
    if (step === STEPS.length - 1) return recovery();

    setStep(step + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Recovery Password</Text>
      <View>
        {STEPS.map(
          ({ Component, text }, i) =>
            step === i && <Component key={i} nextStep={nextStep} text={text} />
        )}
        <Button
          title="Go back to sign in"
          invisible
          onPress={() => goToScreen("Login")}
        />
      </View>
      <View></View>
    </SafeAreaView>
  );
}
