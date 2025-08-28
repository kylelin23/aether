import { View, StyleSheet, Dimensions, Button } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
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
    <View style = {{flex: 1, backgroundColor: 'black'}}>
      <LinearGradient
        colors = {['rgb(91, 73, 173)', 'rgb(45, 36, 87)']}
        style = {styles.topHalf}
      >
        <View style={styles.container}>
          <Button
              title="Overview"
              color = 'white'
              onPress={() => {
                  setSelectedTab("overviewBottom")
                  setSelectedTab2("overviewUpper")
                }
              } />
          <Button
            title="Categories"
            color="white"
            onPress={() => {
              setSelectedTab("categoriesBottom");
              setSelectedTab2("categoriesUpper");
            }}
          />
        </View>
        <View>
          {selectedTab2 === "overviewUpper" ? (<OverviewUpperScreen />) : (<CategoriesUpperScreen />)}
        </View>
      </LinearGradient>

      <View style={styles.bottomHalf}>
        <View>
          {selectedTab === "overviewBottom" ? (<OverviewBottomScreen />) : (<CategoriesBottomScreen />)}
        </View>
      </View>
    </View>
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
    height: (screenHeight - 80)/2,
    borderRadius: 25,
  },

  bottomHalf: {
    height: (screenHeight - 80)/2,
  },
});