import React, { useContext, useState } from "react";
import { Alert, SafeAreaView, Text } from "react-native";
import { AuthContext } from "../../utils/contexts/auth.context";
import { styles } from "./styles";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";

export default function Profile() {
  const [newEmail, setNewEmail] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const { user, setUser } = useContext(AuthContext);

  const confirmEdit = () => {
    if (newPassword !== confirmNewPassword)
      return Alert.alert("Passwords do not match", "Please try again");

    user.email !== newEmail && setUser({ ...user, email: newEmail });
    setConfirmNewPassword("");
    setNewPassword("");
    Alert.alert("Successfully edited", "Your profile has been edited");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Edit your informations</Text>
      <TextInput value={newEmail ?? user?.email} onChangeText={setNewEmail} />
      <TextInput
        value={newPassword}
        onChangeText={setNewPassword}
        placeholder="New password"
        secureTextEntry
      />
      <TextInput
        value={confirmNewPassword}
        onChangeText={setConfirmNewPassword}
        placeholder="Confirm new password"
        secureTextEntry
      />
      <Button title="Edit data" onPress={confirmEdit} />
    </SafeAreaView>
  );
}
