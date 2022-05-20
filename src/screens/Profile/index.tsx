import React, { useContext, useState } from "react";
import { Alert, Image, SafeAreaView, Text, View } from "react-native";
import { AuthContext } from "../../utils/contexts/auth.context";
import { styles } from "./styles";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import * as ImagePicker from "expo-image-picker";

export default function Profile() {
  const [newEmail, setNewEmail] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const { user, setUser } = useContext(AuthContext);
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage((result as any).uri);
    }
  };

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
      <View style={styles.coverImage}>
        <Image
          source={{
            uri:
              image ??
              "https://icon-library.com/images/profile-image-icon/profile-image-icon-5.jpg",
          }}
          style={styles.image}
        />
        <Button
          title="Click here to pick an image"
          invisible
          onPress={pickImage}
        />
      </View>
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
