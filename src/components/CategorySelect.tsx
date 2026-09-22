import { ScrollView, StyleSheet } from "react-native";
import Category from "./Category";

export default function CategorySelect() {
  return (
    <ScrollView
      horizontal // Força a rolagem a ser da esquerda pra direita
      showsHorizontalScrollIndicator={false} // Esconde aquela barra nativa cinza de rolagem
      style={styles.container}
      contentContainerStyle={{ paddingRight: 40 }} // Garante que o último item não grude no final da tela
    >
      <Category
        title="Ranqueada"
        icon={require("../../assets/category/Ranqueada.png")}
        checked={true}
      />
      <Category
        title="Duelo 1x1"
        icon={require("../../assets/category/1x1.png")}
      />
      <Category
        title="Diversão"
        icon={require("../../assets/category/diversao.png")}
      />

      <Category title="Treino" iconColor="#1D2766" />
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
