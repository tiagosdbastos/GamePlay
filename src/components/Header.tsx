import { useRouter } from "expo-router";
import { ReactNode } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface HeaderProps {
  title: string;
  action?: ReactNode;
}

export default function Header({ title, action }: HeaderProps) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={{ color: "#DDE3F0", fontSize: 18 }}>&lt;</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.action}>
        {action ? action : <View style={{ width: 24 }} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 104,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 40, // Espaço para a status bar do celular
    backgroundColor: "#1D2766",
  },
  backButton: {
    width: 24,
  },
  title: {
    flex: 1,
    textAlign: "center",
    color: "#DDE3F0",
    fontSize: 20,
    fontWeight: "bold",
  },
  action: {
    width: 24,
  },
});
