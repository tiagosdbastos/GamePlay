import { ScrollView, StyleSheet } from "react-native";
import Category from "./Category";

interface Props {
  categorySelected?: string;
  setCategory?: (categoryId: string) => void;
  hasCheckBox?: boolean;
}

export default function CategorySelect({
  categorySelected,
  setCategory,
  hasCheckBox = false,
}: Props) {
  const categories = [
    {
      id: "1",
      title: "Ranqueada",
      icon: require("../../assets/category/Ranqueada.png"),
    },
    {
      id: "2",
      title: "Duelo 1x1",
      icon: require("../../assets/category/1x1.png"),
    },
    {
      id: "3",
      title: "Diversão",
      icon: require("../../assets/category/diversao.png"),
    },
    {
      id: "4",
      title: "Treino",
      icon: require("../../assets/category/diversao.png"),
    }, // Assuming treino.png exists, otherwise omit or use a placeholder
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          hasCheckBox={hasCheckBox}
          onPress={() => (setCategory ? setCategory(category.id) : null)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 120, // Garante que o scrollview não encolha
    maxHeight: 120,
    marginTop: 32, // Descola do Profile que ficará em cima
    marginLeft: 24, // Descola o começo da lista da borda da tela
  },
});
