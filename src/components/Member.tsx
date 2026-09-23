import { View, Text, Image, StyleSheet } from 'react-native';

export type MemberProps = {
  id: string;
  username: string;
  avatarUrl: string;
  status: 'online' | 'offline';
};

export default function Member({ data }: { data: MemberProps }) {
  const isOnline = data.status === 'online';

  return (
    <View style={styles.container}>
      <Image source={{ uri: data.avatarUrl }} style={styles.avatar} />

      <View style={styles.info}>
        <Text style={styles.title}>{data.username}</Text>
        
        <View style={styles.statusContainer}>
          <View style={[
            styles.bulletStatus, 
            { backgroundColor: isOnline ? '#32BD50' : '#E51C44' }
          ]} />
          <Text style={styles.statusText}>
            {isOnline ? 'Disponível' : 'Ocupado'}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    width: '100%',
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingHorizontal: 24, 
    paddingVertical: 12 
  },
  avatar: { 
    width: 48, 
    height: 48, 
    borderRadius: 8, 
    marginRight: 20 
  },
  info: {
    flex: 1,
  },
  title: {
    color: '#DDE3F0',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statusContainer: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  bulletStatus: { 
    width: 8, 
    height: 8, 
    borderRadius: 4, 
    marginRight: 9 
  },
  statusText: {
    color: '#ABB1CC',
    fontSize: 13,
  },
});
