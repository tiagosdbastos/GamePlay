import { StyleSheet, Text, View } from "react-native";

export default function ListHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between", // Empurra para as laterais
    paddingHorizontal: 24, // Tradução do "left: 24px" do Figma
    marginTop: 40, // Distância relativa do item de cima
  },
  title: {
    color: "#DDE3F0",
    fontSize: 18, // O height de 23px do figma vira o fontSize e o line-height combinados
    fontWeight: "bold",
  },
    subtitle: {
    color: "#ABB1CC",
    fontSize: 13,
    fontWeight: "normal",
  },
});
