import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <View style={styles.profileContainer}>
          <Image
            source={require("../../assets/Login/Personagem.png")}
            style={styles.profileImage}
          />
        </View>
        <View>
          <Text style={styles.title}>
            Olá, <Text style={styles.username}>Tiago</Text>
          </Text>
          <Text style={styles.message}>Hoje é dia de vitória</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.addButton} activeOpacity={0.7}>
        <Text style={styles.addIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%", // Ocupa toda a largura disponível da tela
    flexDirection: "row", // Coloca o lado esquerdo e direito na mesma linha
    alignItems: "center", // Alinha todos ao centro verticalmente
    justifyContent: "space-between", // Joga a div 'user' pra esquerda e o 'addButton' pra direita
    paddingHorizontal: 24, // Descola tudo das bordas da tela
    marginTop: 40, // Distância do topo
  },
  user: {
    flexDirection: "row", // Coloca o Avatar e o Texto lado a lado
    alignItems: "center",
  },
  profileContainer: {
    width: 48,
    height: 48,
    backgroundColor: "#1D2766", // Um tom mais claro que o fundo para a borda interna
    borderRadius: 8, // Cantos arredondados (borda do GamePlay)
    borderWidth: 1, // Não existe "1px solid" no React Native
    borderColor: "#243189",
    overflow: "hidden", // Impede a imagem de vazar pelos cantos arredondados
    marginRight: 20, // Empurra o bloco de texto para a direita
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: 48, // Tem que ser do exato tamanho da caixa para não quebrar o layout
    height: 48,
  },
  title: {
    fontSize: 24,
    color: "#FFFFFF",
  },
  username: {
    fontWeight: "bold", // O "Tiago" é negrito, o "Olá," não
  },
  message: {
    fontSize: 13,
    color: "#ABB1CC", // Cor cinza do texto secundário
    marginTop: 4, // Dá um leve respiro entre as duas frases
  },
  addButton: {
    width: 48,
    height: 48,
    backgroundColor: "#E51C44", // Vermelho padrão
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  addIcon: {
    color: "#FFFFFF",
    fontSize: 24,
  },
});
