## [Goal Description]
Este documento fornece o "blueprint" (projeto detalhado) de código para a construção da tela **Detalhes do Servidor**. Ao invés de uma visão geral, aqui detalhamos as props, as tags exatas e as regras de Flexbox necessárias para cada componente, servindo como guia prático para a digitação manual.

## User Review Required
> [!IMPORTANT]
> A tela será composta por 3 novos componentes reaproveitáveis (`Header`, `Member`, `Button`) e o arquivo principal da tela (`details.tsx`). Siga a ordem proposta abaixo para garantir que o layout não quebre.

---

## Proposed Changes (Código Detalhado)

### 1. O Componente de Navegação Superior
Este componente ficará colado no topo da tela.

#### [NEW] `src/components/Header.tsx`
**O que digitar:**
```tsx
import { View, Text, StyleSheet } from 'react-native';
import { ReactNode } from 'react';
// (Opcional) importar icones como Feather do @expo/vector-icons

interface HeaderProps {
  title: string;
  action?: ReactNode; // A interrogação indica que é opcional (nem toda tela tem o icone de compartilhar)
}

export default function Header({ title, action }: HeaderProps) {
  return (
    <View style={styles.container}>
      {/* Botão de Voltar */}
      <View style={styles.backButton}>
         <Text style={{color: 'white'}}>&lt;-</Text> 
      </View>

      {/* Título Centralizado */}
      <Text style={styles.title}>{title}</Text>

      {/* Ação Dinâmica (Ícone de compartilhar, se existir) */}
      <View style={styles.action}>
        {action ? action : <View style={{ width: 24 }} />} 
        {/* O view vazio garante que o título fique perfeitamente no centro devido ao space-between */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 104,
    flexDirection: 'row',
    justifyContent: 'space-between', // Alinha as 3 partes nas extremidades e meio
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#1D2766', // Cor do header do Figma
  },
  // ... adicione tamanhos e fontes para title e botões
});
```
*Argumento de Defesa:* "O componente Header foi construído para receber um `ReactNode` opcional chamado `action`. Isso permite que na tela de Detalhes ele receba o botão de Compartilhar, mas na tela de Agendar ele fique vazio, sem quebrar o alinhamento central do título, graças ao Flexbox."

---

### 2. O Componente de Jogador (Membro)
Este é o item da lista que aparece na parte de baixo da tela.

#### [NEW] `src/components/Member.tsx`
**O que digitar:**
```tsx
import { View, Text, Image, StyleSheet } from 'react-native';

export type MemberProps = {
  id: string;
  username: string;
  avatarUrl: string;
  status: 'online' | 'offline'; // Tipagem restrita!
}

export default function Member({ data }: { data: MemberProps }) {
  const isOnline = data.status === 'online';

  return (
    <View style={styles.container}>
      {/* Avatar circular (mesma lógica do Profile) */}
      <Image source={{ uri: data.avatarUrl }} style={styles.avatar} />

      <View>
        <Text style={styles.title}>{data.username}</Text>
        
        {/* Bloco de Status com a "Bolinha" dinâmica */}
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
  container: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 24, paddingVertical: 12 },
  avatar: { width: 48, height: 48, borderRadius: 8, marginRight: 20 },
  statusContainer: { flexDirection: 'row', alignItems: 'center' },
  bulletStatus: { width: 8, height: 8, borderRadius: 4, marginRight: 9 }, // O segredo da bolinha
  // ... adicione cores e fontes de texto
});
```

---

### 3. A Tela Principal de Detalhes
Aqui nós juntamos tudo. Vamos usar o `<ImageBackground>` nativo do React Native para o banner.

#### [NEW] `src/app/details.tsx`
**O que digitar:**
```tsx
import { View, ImageBackground, Text, FlatList, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ListHeader from '../components/ListHeader';
import Member from '../components/Member';

export default function Details() {
  const members = [
    { id: '1', username: 'Tiago', avatarUrl: 'https://github.com/tiagosdbastos.png', status: 'online' },
    { id: '2', username: 'Diego', avatarUrl: 'https://github.com/diego3g.png', status: 'offline' }
  ];

  return (
    <View style={styles.container}>
      {/* 1. Nosso Header Customizado */}
      <Header title="Detalhes" action={<Text style={{color: 'red'}}>Share</Text>} />

      {/* 2. Banner Principal com Background */}
      <ImageBackground 
        source={require('../../assets/home/lol.png')} // Substitua pela imagem correta de banner
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>É hoje que vamos chegar ao challenger...</Text>
        </View>
      </ImageBackground>

      {/* 3. Reaproveitamento do ListHeader */}
      <ListHeader title="Jogadores" subtitle="Total 2" />

      {/* 4. Lista Dinâmica e Performativa */}
      <FlatList 
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Member data={item} />}
      />

      {/* 5. Footer (Opcional extrair pra componente Button) */}
      <View style={styles.footer}>
         <Text>Entrar na Partida</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0D133D' },
  banner: { width: '100%', height: 234 },
  bannerContent: { 
    flex: 1, 
    justifyContent: 'flex-end', // O Segredo: Joga os textos para a base da imagem
    paddingHorizontal: 24, 
    paddingBottom: 30 
  },
  // ...
});
```

## Verification Plan
Este plano fornece blocos de código com escopo reduzido para facilitar a digestão lógica. Crie os arquivos na ordem (`Header`, depois `Member`, depois `details.tsx`) para validar cada pedaço no simulador progressivamente.
