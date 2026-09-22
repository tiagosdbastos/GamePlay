import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

interface CategoryProps {
  title: string;
  icon: any;
  checked?: boolean; // Propriedade opcional, padrão é false
}

// Recebemos o title, uma cor provisória e se ele está "marcado" (checked)
export default function Category({
  title,
  icon,
  checked = false,
}: CategoryProps) {
  return (
    <TouchableOpacity
      style={[styles.container, checked ? styles.checked : styles.unchecked]}
      activeOpacity={0.7}
    >
      <Image source={icon} style={styles.iconPlaceholder} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8, // Afasta um cartão do outro
    borderWidth: 2,
  },
  // Estilo de quando a categoria está selecionada
  checked: {
    borderColor: "#E51C44", // Vermelho forte do GamePlay
    backgroundColor: "#1D2766", // Fundo fica um pouco mais claro
  },
  // Estilo de quando a categoria não está selecionada
  unchecked: {
    borderColor: "#243189", // Borda sutil
    backgroundColor: "#0D133D", // Mesma cor do fundo do app
  },
  iconPlaceholder: {
    width: 45,
    height: 45,
    marginBottom: 10,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});
