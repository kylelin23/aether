import { Text, View, StyleSheet, Dimensions, Button } from "react-native";
import OverviewScreen from "./overview";
import CategoriesScreen from "./categories";
import { useState } from "react";


export default function StatsScreen() {
  const [selectedTab, setSelectedTab] = useState<"overview" | "categories">(
    "overview"
  );

  return (
    <View style = {{flex: 1}}>
      <View style={styles.container}>
        <Button
            title="Overview"
            onPress={() => setSelectedTab("overview")} />
        <Button
          title="Categories"
          onPress={() => setSelectedTab("categories")}
        />
      </View>
      <View>
        {selectedTab === "overview" ? <OverviewScreen /> : <CategoriesScreen />}
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
});
