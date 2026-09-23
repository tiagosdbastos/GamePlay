## [Goal Description]
Este plano resolve a navegação entre a tela Home e a tela de Detalhes, utilizando as melhores práticas do pacote `expo-router` presente no projeto.

## User Review Required
> [!IMPORTANT]
> A navegação é um dos pilares de qualquer aplicativo. Como estamos utilizando o Expo Router, a navegação é baseada em rotas de arquivo (file-based routing), similar ao Next.js. O professor costuma perguntar sobre isso na banca.

## Proposed Changes / Roteamento

Precisamos fazer duas coisas: 
1. Fazer com que o toque em uma Partida (na Home) leve para a tela de Detalhes.
2. Fazer o botão de Voltar (na tela de Detalhes) voltar para a Home.

### 1. Na Tela Home (`src/app/home.tsx`)
Nós vamos utilizar o hook `useRouter` para navegar de forma imperativa quando o usuário tocar em uma partida. O componente `TouchableOpacity` vai envolver o nosso `Appointment`.

```tsx
import { useRouter } from 'expo-router'; // Importação essencial
import { TouchableOpacity } from 'react-native';

export default function Home() {
  const router = useRouter(); // Instanciamos o roteador

  function handleAppointmentCreate() {
    router.push('/details'); // O caminho do arquivo sem o .tsx
  }

  // ... (dentro do return da sua FlatList):
  renderItem={({ item }) => (
    <TouchableOpacity onPress={handleAppointmentCreate} activeOpacity={0.7}>
      <Appointment data={item} />
    </TouchableOpacity>
  )}
```

### 2. No Componente Header (`src/components/Header.tsx`)
A tela de Detalhes já tem o componente Header, só falta darmos "vida" ao botão de voltar.

```tsx
import { useRouter } from 'expo-router';

export default function Header({ title, action }: HeaderProps) {
  const router = useRouter();

  function handleGoBack() {
    router.back(); // Remove a tela atual da pilha e volta para a anterior
  }

  return (
    // ...
    <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
       <Text style={{color: '#DDE3F0', fontSize: 18}}>&lt;</Text> 
    </TouchableOpacity>
    // ...
  )
}
```

## Verification Plan
### Manual Verification
**Argumento de Defesa para a Banca Escolar:**
"Professor, ao invés de utilizar o antigo React Navigation com complexas configurações de *Stacks*, adotei o **Expo Router**, que fornece um roteamento baseado no sistema de arquivos. Quando o usuário clica na partida, invoco `router.push('/details')`, o que é muito mais semântico e alinhado com as arquiteturas web modernas."
