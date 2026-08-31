import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, SIZES } from "../constants/theme";
import Welcome from "../components/Welcome";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn";
import PopularMeditation from "../components/PopularMeditation";
import DailyMeditation from "../components/DailyMeditation";


const Home = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    try {
      const user = await AsyncStorage.getItem("userDetails");
      setUserDetails(user ? JSON.parse(user) : null);
    } catch (e) {
      console.log("failed to load userDetails", e);
      setUserDetails(null);
    }
  };

  console.log("PopularMeditation is:", PopularMeditation);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScreenHeaderBtn />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }} testID="screensDisplay">
          <Welcome userDetails={userDetails} />
          <PopularMeditation/>
          <DailyMeditation/>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;