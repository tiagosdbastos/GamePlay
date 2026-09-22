## [Goal Description]
Este plano orienta sobre como lidar com renderização dinâmica de imagens no componente `<Appointment />`, respeitando as restrições do bundler (Metro) do React Native.

## User Review Required
> [!WARNING]
> Um erro muito comum de iniciantes no React Native é tentar fazer concatenação dentro do `require`, como por exemplo: `require('../../assets/' + nomeDaImagem + '.png')`. **Isso vai dar erro e crashar o app.** O bundler precisa saber exatamente quais arquivos existem em tempo de compilação.

## Proposed Changes

Como passar imagens dinamicamente de forma segura:

### Opção A: Imagens Locais (Se as fotos estiverem na pasta `assets`)
Nesta abordagem, quem chama o componente (a tela Home) é quem importa a imagem inteira e a envia como propriedade já processada.

#### 1. Na Tela Home (O Pai)
Você cria o seu array de dados passando o `require` diretamente na variável:
```tsx
const appointments = [
  { id: '1', title: 'Lendários', icon: require('../../assets/games/lol.png') },
  { id: '2', title: 'Rumo ao topo', icon: require('../../assets/games/csgo.png') }
];
```

#### 2. No Componente `Appointment.tsx` (O Filho)
O componente recebe a propriedade como sendo do tipo fonte de imagem (`ImageSourcePropType` se usar TypeScript) e injeta no `source`:
```tsx
import { View, Text, Image, ImageSourcePropType } from 'react-native';

interface AppointmentProps {
  data: {
    id: string;
    title: string;
    icon: ImageSourcePropType; // <-- O Segredo é tipar assim
  }
}

export default function Appointment({ data }: AppointmentProps) {
  return (
    <View style={styles.container}>
      <Image source={data.icon} style={styles.image} />
      <Text>{data.title}</Text>
    </View>
  );
}
```

---

### Opção B: Imagens Remotas (URL da internet)
Se as imagens vierem de um banco de dados ou link web, usamos a propriedade `uri`.

#### 1. Na Tela Home (O Pai)
```tsx
const appointments = [
  { id: '1', title: 'Lendários', iconUrl: 'https://site.com/lol.png' }
];
```

#### 2. No Componente `Appointment.tsx` (O Filho)
```tsx
export default function Appointment({ data }: AppointmentProps) {
  return (
    <View style={styles.container}>
      {/* Atenção: Imagens com URI precisam OBRIGATORIAMENTE de width e height fixos no estilo! */}
      <Image source={{ uri: data.iconUrl }} style={styles.image} /> 
    </View>
  );
}
```

## Verification Plan
### Manual Verification
**Argumento de Defesa para a Banca Escolar:**
"Professor, ao invés de tentar injetar strings dinâmicas no `require()` – o que causaria um erro de compilação pelo bundler do Metro – a minha arquitetura passa a referência de imagem já avaliada a partir do array de dados da Home diretamente para a propriedade `source` do `<Appointment />`. Isso garante um fluxo de dados unidirecional e um aplicativo à prova de falhas na renderização de assets visuais."
