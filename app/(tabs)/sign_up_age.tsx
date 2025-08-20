import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { useRoute } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SignUpAge({ navigation }: { navigation: any }) {

  const route = useRoute<any>();

  const { name, email, password } = route.params;

  const [age, setSelectedValue] = useState("18");

  const startBudgetingButton = () => {
    navigation.navigate("Sign Up 3", { name, email, password, age });
  };

  return (
    <LinearGradient
      colors={["rgb(91, 73, 173)", "rgb(45, 36, 87)"]}
      style={styles.view}
    >
      <Text style={styles.text}>What Is Your Age? </Text>

      <View style={{ alignItems: "center" }}>
        <Picker
          selectedValue={age}
          onValueChange={(itemValue: string) => setSelectedValue(itemValue)}
          style={styles.picker}
          itemStyle={{ color: "white" }}
        >
          {Array.from({ length: 201 }, (_, i) => (
            <Picker.Item key={i} label={i.toString()} value={i.toString()} />
          ))}
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
    width: 200,
    marginBottom: 20,
  },
});
