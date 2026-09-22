import {
    Image,
    ImageSourcePropType,
    StyleSheet,
    Text,
    View,
} from "react-native";

export type AppointmentProps = {
  id: string;
  guild: string;
  category: string;
  date: string;
  isHost: boolean;
  cover: ImageSourcePropType;
};

export default function Appointment({ data }: { data: AppointmentProps }) {
  return (
    <View style={styles.container}>
      <View style={styles.coverContainer}>
        <Image style={styles.image} source={data.cover} />
      </View>
      
      <View style={styles.content}>
        {/* Linha 1: Header */}
        <View style={styles.header}>
          <Text style={styles.title}>{data.guild}</Text>
          <Text style={styles.category}>{data.category}</Text>
        </View>

        {/* Linha 2: Footer */}
        <View style={styles.footer}>
          <View style={styles.dateInfo}>
            {/* O calendário */}
            <Image source={require("../../assets/home/Frame.png")} style={styles.icon} />
            <Text style={styles.date}>{data.date}</Text>
          </View>

          <View style={styles.playersInfo}>
            {/* O Player Icon simulado (ou você pode usar outro ícone que tenha) */}
            <Text style={[styles.player, { color: data.isHost ? '#E51C44' : '#32BD50' }]}>
              {data.isHost ? "Anfitrião" : "Visitante"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 12, // Usar vertical menor para listas
  },
  coverContainer: {
    width: 64,
    height: 64,
    borderRadius: 8,
    overflow: "hidden",
    marginRight: 20,
    backgroundColor: "#1D2766",
  },
  image: {
    width: 64,
    height: 64,
  },
  content: {
    flex: 1, // Faz a direita empurrar pro final da tela
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between", // Nome do lado, categoria do outro
    marginBottom: 12,
  },
  title: {
    color: "#DDE3F0",
    fontSize: 18,
    fontWeight: "bold",
  },
  category: {
    color: "#ABB1CC",
    fontSize: 13,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between", // Data de um lado, Player do outro
  },
  dateInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 7,
  },
  date: {
    color: "#DDE3F0", // Branco para destaque da data
    fontSize: 13,
  },
  playersInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  player: {
    fontSize: 13,
  },
});
