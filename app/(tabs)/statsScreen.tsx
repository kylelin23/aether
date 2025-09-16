import { View, ScrollView, StyleSheet, Dimensions, Button } from "react-native";
import OverviewBottomScreen from "./overviewBottom";
import CategoriesBottomScreen from "./categoriesBottom";
import OverviewUpperScreen from "./overviewUpper";
import CategoriesUpperScreen from "./categoriesUpper";
import { useState } from "react";


export default function StatsScreen() {
  const [selectedTab, setSelectedTab] = useState<"overviewBottom" | "categoriesBottom">(
    "overviewBottom"
  );
  const [selectedTab2, setSelectedTab2] = useState<"overviewUpper" | "categoriesUpper">(
    "overviewUpper"
  );

  return (
    <ScrollView style = {{flex: 1, backgroundColor: 'black'}}>
      <View style = {styles.topHalf}>
        <View style={styles.container}>
          <Button
              title="Overview"
              color = {selectedTab == 'overviewBottom' ? 'white' : "gray"}
              onPress={() => {
                  setSelectedTab("overviewBottom")
                  setSelectedTab2("overviewUpper")
                }
              } />
          <Button
            title="Categories"
            color={selectedTab == 'categoriesBottom' ? "white": 'gray'}
            onPress={() => {
              setSelectedTab("categoriesBottom");
              setSelectedTab2("categoriesUpper");
            }}
          />
        </View>
        <View>
          {selectedTab2 === "overviewUpper" ? (<OverviewUpperScreen />) : (<CategoriesUpperScreen />)}
        </View>
      </View>

      <View style={styles.bottomHalf}>
        <View>
          {selectedTab === "overviewBottom" ? (<OverviewBottomScreen />) : (<CategoriesBottomScreen />)}
        </View>
      </View>
    </ScrollView>
  );
}

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: screenWidth,
    justifyContent: "space-around",
    alignItems: 'flex-end',
    height: 80,
    backgroundColor: 'black'
  },

  topHalf: {
    borderRadius: 25,
  },

  bottomHalf: {
    // height: (screenHeight - 80)/2,
  },
});