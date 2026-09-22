import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* 
        Agrupamos o personagem e seu fundo em um contêiner 
        para podermos usar position: 'absolute' na imagem de trás.
      */}
      <View style={styles.heroContainer}>
        <Image
          source={require("../../assets/Login/bacckPersonagem.png")}
          style={styles.heroBackground}
        />
        <Image
          source={require("../../assets/Login/Personagem.png")}
          style={styles.heroImage}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{"\n"}e organize suas{"\n"}
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {"\n"}
          favoritos com seus amigos
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => router.push("/home")}
        style={styles.button}
        activeOpacity={0.7}
      >
        <Image
          source={require("../../assets/Login/Discord-Logo-White 1.png")}
          style={styles.buttonIcon}
        />
        <Text style={styles.buttonText}>Entrar com Discord</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D133D",
    alignItems: "center",
    justifyContent: "center",
  },
  heroContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    marginTop: 20,
  },
  heroBackground: {
    position: "absolute", // Quebra o fluxo do Flexbox, ficando "por trás"
  },
  heroImage: {
    // A imagem principal fica no fluxo normal, sobrepondo o fundo
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 50,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 45,
    marginBottom: 16,
  },
  subtitle: {
    color: "#ABB1CC",
    fontSize: 15,
    textAlign: "center",
    lineHeight: 25,
    marginBottom: 40,
  },
  button: {
    width: "80%",
    height: 56,
    backgroundColor: "#E51C44",
    borderRadius: 8,
    flexDirection: "row", // Alinha ícone e texto lado a lado
    alignItems: "center",
    justifyContent: "center", // Centraliza o bloco (ícone + texto) no meio do botão
  },
  buttonIcon: {
    width: 24,
    marginRight: 16, // Empurra o texto um pouco para a direita
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});
