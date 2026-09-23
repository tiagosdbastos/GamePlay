import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../components/Header";
import ListHeader from "../components/ListHeader";
import Member from "../components/Member";

export default function Details() {
  const members = [
    {
      id: "1",
      username: "Tiago Luchtenberg",
      avatarUrl: "https://github.com/tiagosdbastos.png",
      status: "online" as const,
    },
    {
      id: "2",
      username: "Diego Fernandes",
      avatarUrl: "https://github.com/diego3g.png",
      status: "offline" as const,
    },
  ];

  return (
    <View style={styles.container}>
      <Header title="Detalhes" />

      <ImageBackground
        source={require("../../assets/home/lol.png")}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 2" />

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        style={styles.members}
      />
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Image
          source={require("../../assets/Login/Discord-Logo-White 1.png")}
          style={styles.buttonIcon}
        />
        <Text style={styles.buttonText}>Entrar na partida</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D133D",
  },
  banner: {
    width: "100%",
    height: 234,
  },
  bannerContent: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    paddingBottom: 30,
    backgroundColor: "rgba(0,0,0,0.5)", // Opcional, escurece a imagem para o texto aparecer mais
  },
  title: {
    color: "#DDE3F0",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitle: {
    color: "#DDE3F0",
    fontSize: 13,
    lineHeight: 21,
  },
  members: {
    marginTop: 20,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#1D2766",
    marginLeft: 24, // Alinha a linha com o nome do membro
  },
  footer: {
    padding: 24,
    marginBottom: 20,
    backgroundColor: "#E51C44", // Cor vermelha do Figma
    marginHorizontal: 24,
    borderRadius: 8,
    height: 56,
    justifyContent: "center",
  },
  button: {
    marginHorizontal: 24, // Descola das laterais
    marginBottom: 32,     // Descola do fundo do celular
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
