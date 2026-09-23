import Appointment from "@/components/Appointment";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import CategorySelect from "../components/CategorySelect";
import ListHeader from "../components/ListHeader";
import Profile from "../components/Profile";

export default function Home() {
  const router = useRouter();

  const appointments = [
    { id: "1", guild: "Lendários", category: "Ranqueada", date: "18/06 às 21:00h", isHost: true, cover: require("../../assets/home/lol.png") },
    { id: "2", guild: "Yeah, boy", category: "Diversão", date: "23/06 às 19:00h", isHost: false, cover: require("../../assets/home/rdr2.png") },
    { id: "3", guild: "Rumo ao topo", category: "Duelo 1x1", date: "20/06 às 09:00h", isHost: true, cover: require("../../assets/home/cs.png") },
    { id: "4", guild: "Bora queimar tudo", category: "Ranqueada", date: "20/06 às 14:20h", isHost: true, cover: require("../../assets/home/apex.png") },
    { id: "5", guild: "Valorosos", category: "Diversão", date: "18/06 às 21:00h", isHost: true, cover: require("../../assets/home/vava.png") },
    { id: "6", guild: "Jogo de tryhard", category: "Ranqueada", date: "20/06 às 14:20h", isHost: false, cover: require("../../assets/home/apex.png") }
  ];

  function handleAppointmentDetails() {
    router.push("/details");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Profile />
      <CategorySelect />
      <ListHeader
        title="Partidas agendadas"
        subtitle={`Total ${appointments.length}`}
      />
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={handleAppointmentDetails} activeOpacity={0.7}>
            <Appointment data={item} />
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 69 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D133D",
  },
});
