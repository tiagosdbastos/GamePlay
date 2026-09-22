## [Goal Description]
Este plano ensina como construir uma lista contendo todos os jogos do Figma utilizando um Array de Objetos (Mock) e o componente de alta performance `<FlatList>`.

## User Review Required
> [!IMPORTANT]
> A implementação da FlatList é uma das partes que mais geram dúvidas em apresentações. O professor fatalmente vai perguntar "Por que não usar o map() comum do JavaScript?". Leia o argumento abaixo com atenção.

## Proposed Changes

Para transformarmos aquele único objeto `matchData` em uma lista completa (o "objeto grande" que você perguntou), precisamos de um Array `[]` cheio de Objetos `{}`.

### 1. Criar o Array de Dados (Mock)
Dentro da sua `home.tsx` (logo antes do `return`), vamos criar a lista de todas as partidas usando as imagens que eu vi que você já tem salvas na pasta `assets/home/`:

```tsx
const appointments = [
  {
    id: "1",
    guild: "Lendários",
    category: "Ranqueada",
    date: "18/06 às 21:00h",
    isHost: true,
    cover: require("../../assets/home/lol.png"), // A logo do LoL
  },
  {
    id: "2",
    guild: "Yeah, boy",
    category: "Diversão",
    date: "23/06 às 19:00h",
    isHost: false, // Vai ficar verde!
    cover: require("../../assets/home/rdr2.png"),
  },
  {
    id: "3",
    guild: "Rumo ao topo",
    category: "Duelo 1x1",
    date: "20/06 às 09:00h",
    isHost: true,
    cover: require("../../assets/home/cs.png"),
  },
  {
    id: "4",
    guild: "Bora queimar tudo",
    category: "Ranqueada",
    date: "20/06 às 14:20h",
    isHost: true,
    cover: require("../../assets/home/apex.png"),
  },
  {
    id: "5",
    guild: "Valorosos",
    category: "Diversão",
    date: "18/06 às 21:00h",
    isHost: true,
    cover: require("../../assets/home/vava.png"),
  }
];
```

### 2. Adicionar o Componente `<FlatList>`
Agora, você precisa importar o `FlatList` do pacote `'react-native'` e substituir aquele `<Appointment />` solitário por isso:

```tsx
<FlatList 
  data={appointments}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <Appointment data={item} />}
  showsVerticalScrollIndicator={false}
  contentContainerStyle={{ paddingBottom: 69 }} // Dá um espaço no final da lista
/>
```

## Verification Plan
### Manual Verification
**Argumento de Defesa para a Banca Escolar:**
"Professor, para listar as partidas, criei um Array de Objetos com os dados e utilizei o componente `<FlatList>`. Optei por ele ao invés do método `.map()` com `<ScrollView>` porque a `FlatList` faz **lazy loading** visual: ela renderiza na memória apenas os cards que estão cabendo na tela do celular, o que economiza bateria e evita travamentos se tivermos uma comunidade com milhares de agendamentos."
