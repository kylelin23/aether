import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { addUser } from '../../services/userService'
import { useRoute, RouteProp } from "@react-navigation/native"
import 'react-native-url-polyfill/auto'
import { supabase } from '../../lib/supabase'
import { Session } from '@supabase/supabase-js'
import { useState, useEffect } from 'react'

type AllDoneRouteParams = {
  AllDone: {
    name: string;
    email: string;
    password: string;
    age: number;
    college: string;
    goals: string;
  };
};

export default function AllDone({ navigation }: { navigation: any }) {
  const [session, setSession] = useState<Session | null>(null)

  const route = useRoute<RouteProp<AllDoneRouteParams, "AllDone">>();
  const { name, email, password, age, college, goals } = route.params;

  const startBudgetingButton = () => {
    addUser(name, email, password, age, college, goals);
    navigation.navigate("Home Page");
  };

  return (
    <LinearGradient
      colors={["rgb(91, 73, 173)", "rgb(45, 36, 87)"]}
      style={styles.view}
    >
      <Text style={styles.text}>You're All Set! </Text>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity onPress={startBudgetingButton} style={styles.button}>
          <Text style={styles.startBudgetingText}>Start Budgeting</Text>
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

});
