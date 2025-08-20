import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { useRoute } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SignUpGoals({ navigation }: { navigation: any }) {

  const route = useRoute<any>();

  const { name, email, password, age, college } = route.params;

  const [goals, setSelectedValue] = useState("Personal Finance");

  const startBudgetingButton = () => {
    navigation.navigate("All Done", { name, email, password, age, college, goals });
  };

  return (
    <LinearGradient
      colors={["rgb(91, 73, 173)", "rgb(45, 36, 87)"]}
      style={styles.view}
    >
      <Text style={styles.text}>What Would You Like To Accomplish With This App? (Select the most appropriate option)</Text>

      <View style={{ alignItems: "center" }}>
        <Picker
          selectedValue={goals}
          onValueChange={(itemValue: string) => setSelectedValue(itemValue)}
          style={styles.picker}
          itemStyle={{ color: "white" }}
        >
          <Picker.Item label="Savings" value="Savings" />
          <Picker.Item label="Education" value="Education" />
          <Picker.Item label="Personal Finance" value="Personal Finance" />
          <Picker.Item label="Personal Spending" value="Personal Spending" />
          <Picker.Item label="Vacation" value="Vacation" />
          <Picker.Item label="Rent" value="Rent" />
          <Picker.Item label="Food" value="Food" />
          <Picker.Item label="Other" value="Other" />
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
    textAlign: 'center'
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
