import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./src/navigations/index";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
