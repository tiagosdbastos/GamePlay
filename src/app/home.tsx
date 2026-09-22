import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Profile from "../components/Profile";
import CategorySelect from "../components/CategorySelect";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Profile />
      <CategorySelect />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D133D",
    // Removemos alignItems e justifyContent para que os 
    // itens fiquem alinhados ao topo por padrão (comportamento nativo de column)
  },
});
