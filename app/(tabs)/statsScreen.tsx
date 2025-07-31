import { View, StyleSheet, Dimensions, Button } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import OverviewScreen from "./overview";
import CategoriesScreen from "./categories";
import { useState } from "react";


export default function StatsScreen() {
  const [selectedTab, setSelectedTab] = useState<"overview" | "categories">(
    "overview"
  );

  return (
    <View style = {{flex: 1, backgroundColor: 'black'}}>
      <LinearGradient
        colors = {['rgb(91, 73, 173)', 'rgb(45, 36, 87)']}
        style = {styles.topHalf}
      >
        <View style={styles.container}>
          <Button
              title="Overview"
              color = 'white'
              onPress={() => setSelectedTab("overview")} />
          <Button
            title="Categories"
            color="white"
            onPress={() => setSelectedTab("categories")}
          />
        </View>

      </LinearGradient>

      <View style = {styles.bottomHalf}>
        <View>
          {selectedTab === "overview" ? <OverviewScreen /> : <CategoriesScreen />}
        </View>
      </View>
    </View>
  );
}

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: screenWidth,
    justifyContent: "space-around",
  },

  topHalf: {
    height: "50%",
    borderRadius: 25,
  },

  bottomHalf: {
    height: "50%",
    backgroundColor: "black",
  },
});
