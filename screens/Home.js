import React from "react";
import { Button, Text, View } from "react-native";
import CustomModal from "../componants/Modal.js";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Adoption"
        onPress={() => navigation.push("Adoption")}
      />
      <CustomModal />
    </View>
  );
}
