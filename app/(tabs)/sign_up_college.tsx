import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { useRoute } from '@react-navigation/native'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SignUpCollege({ navigation }: { navigation: any }) {

  const route = useRoute<any>();

  const { name, email, password, age } = route.params;

  const [college, setSelectedValue] = useState("College");

  const startBudgetingButton = () => {
    navigation.navigate("Sign Up 4", { name, email, password, age, college });
  };

  return (
    <LinearGradient
      colors={["rgb(91, 73, 173)", "rgb(45, 36, 87)"]}
      style={styles.view}
    >
      <Text style={styles.text}>What Stage Are You Currently In? </Text>

      <View style={{ alignItems: "center" }}>
        <Picker
          selectedValue={college}
          onValueChange={(itemValue: string) => setSelectedValue(itemValue)}
          style={styles.picker}
          itemStyle={{ color: "white" }}
        >
          <Picker.Item label="Middle School" value="Middle School" />
          <Picker.Item label="High School" value="High School" />
          <Picker.Item label="College" value="College" />
          <Picker.Item label="Graduate School" value="Graduate School" />
          <Picker.Item label="Post Graduate" value="Post Graduate" />
          <Picker.Item label="Working" value="Working" />
        </Picker>

        <TouchableOpacity onPress={startBudgetingButton} style={styles.button}>
          <Text style={styles.startBudgetingText}>Next</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  view: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 20,
  },

  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  startBudgetingText: {
    fontSize: 15,
  },

  button: {
    backgroundColor: "white",
    borderRadius: 15,
    paddingVertical: 10,
    width: 150,
    alignItems: "center",
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.3,
  },

  picker: {
    width: 300,
    marginBottom: 20,
    marginTop: 0,
  },
});
