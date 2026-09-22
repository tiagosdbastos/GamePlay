## [Goal Description]
Documento de auditoria técnica (Code Auditor) avaliando a implementação manual dos componentes `ListHeader` e `Appointment`.

## User Review Required
> [!CAUTION]
> Foi identificado um erro crítico (Blocker) no componente `Appointment.tsx` que vai fazer o aplicativo crashar com uma tela vermelha no celular. Leia a seção abaixo para entender a correção.

## Proposed Changes / Auditoria

### 1. Componente `ListHeader`
**Status:** APROVADO ✅
**Feedback:** Excelente trabalho. Você aplicou corretamente o `justifyContent: 'space-between'` e evitou o uso de larguras fixas ou posições absolutas do Figma. A estrutura está perfeita e escalável.

---

### 2. Componente `Appointment`
**Status:** REPROVADO ❌ (Critical Bug)

#### O Erro Encontrado:
No arquivo `Appointment.tsx`, você tentou carregar a imagem assim:
```tsx
<Image source={require("../assets/`${game}`.png")} />
```

**Por que isso quebra o app?**
O `require()` do React Native/Metro Bundler não funciona no momento em que o app está rodando (runtime). Ele funciona no momento em que o app está sendo compilado (build time). Quando o compilador lê a string `` `../assets/${game}.png` ``, ele não sabe qual é o valor da variável `game`, então ele não inclui a imagem no pacote do app.

#### [MODIFY] `src/components/Appointment.tsx` e `src/app/home.tsx`
**A Solução (Como mostramos no plano anterior):**
A imagem deve ser *requisitada* diretamente onde o objeto está sendo criado (na Home), e repassada pronta para o Appointment.

**Na Home (Pai), faça isso:**
```tsx
// Dentro da home.tsx (Temporário, antes da FlatList)
<Appointment 
  game="Valorosos" 
  cover={require("../../assets/Login/Personagem.png")} // Use uma imagem que já existe pra testar
/>
```

**No Appointment (Filho), receba e aplique:**
```tsx
import { Image, StyleSheet, Text, View, ImageSourcePropType } from "react-native";

export default function Appointment({
  game,
  cover, // Receba a imagem pronta aqui
}: {
  game: string;
  cover: ImageSourcePropType; // A tipagem correta
}) {
  return (
    <View style={styles.container}>
      <View>
        <Image source={cover} /> {/* Use diretamente a prop, SEM require() */}
      </View>
      <View>
        <Text style={styles.title}>{game}</Text>
        <Text style={styles.subtitle}>Appointment Component</Text>
      </View>
    </View>
  );
}
```

## Verification Plan
### Manual Verification
1. Altere o `Appointment.tsx` para remover o `require()` interno e passar a aceitar a prop `cover`.
2. Na `home.tsx`, passe uma imagem local estática como prop.
3. Se a tela vermelha desaparecer do seu celular, você dominou o conceito de fluxo de assets no React Native!
