## Finalização da Tela Home (Metade Inferior)
O objetivo deste plano é guiar você na construção manual dos componentes restantes da tela Home do app GamePlay, traduzindo fielmente o layout do Figma. Como seu professor fará perguntas sobre as escolhas arquiteturais, este plano foca em te dar o **"Porquê"** (Argumento de Defesa) de cada tag e estilo utilizado.

> [!IMPORTANT]
> **User Review Required**
> Como combinamos, eu não vou injetar o código nos seus arquivos. Você usará este plano como guia para digitar o código no seu editor. Revise os passos abaixo e clique em **Proceed** se estiver pronto para começar a codar.

---

## Proposed Changes

### 1. Componente de Cabeçalho da Lista
Vamos criar o texto "Partidas agendadas" e "Total 6".

#### [NEW] `src/components/ListHeader.tsx`
**O que você vai digitar:**
1. Importações base: `View`, `Text`, `StyleSheet` do `react-native`.
2. Uma interface TypeScript `ListHeaderProps` recebendo `title` (string) e `subtitle` (string).
3. O componente exportado por padrão, retornando uma `<View>` que engloba dois `<Text>`.

**Estilização (Flexbox):**
- A `<View>` principal deve ter `flexDirection: "row"` e `justifyContent: "space-between"`.
- *Argumento de Defesa:* "Utilizei `space-between` em uma linha (`row`) para garantir que o título seja empurrado para a extrema esquerda e o subtítulo para a extrema direita, de forma responsiva em qualquer tamanho de tela, sem usar margens fixas."

---

### 2. Componente do Card de Partida (Esqueleto)
Vamos preparar o componente que representa uma partida individual (ex: a partida de League of Legends).

#### [NEW] `src/components/Appointment.tsx`
**O que você vai digitar:**
1. Importações base: `View`, `Text`, `StyleSheet`.
2. O componente exportado retornando uma `<View>` principal (`container`).
3. Dentro do container, duas áreas principais (lado a lado):
   - Uma `<View>` para representar a imagem/logo do jogo (um quadrado com cantos arredondados).
   - Uma `<View>` ao lado para o conteúdo (textos).

**Estilização (Flexbox):**
- O `container` principal recebe `flexDirection: "row"` para alinhar a logo à esquerda e os textos à direita.
- *Argumento de Defesa:* "Quebrei a partida em um componente isolado (`Appointment`) para não poluir a tela Home. O uso de `flexDirection: 'row'` separa visualmente o avatar do conteúdo descritivo."

---

### 3. Tela Home
Vamos juntar tudo na tela principal e substituir o scroll genérico pela lista de alta performance.

#### [MODIFY] `src/app/home.tsx`
**O que você vai digitar:**
1. Importar os novos componentes: `ListHeader` e `Appointment`.
2. Importar `FlatList` do `react-native`.
3. Adicionar o `<ListHeader>` logo abaixo do `<CategorySelect />`, passando as props `title="Partidas agendadas"` e `subtitle="Total 6"`.
4. Adicionar um `<FlatList>` abaixo do header.
   - Use uma array falsa de números no `data` (ex: `[1, 2, 3, 4, 5]`).
   - No `renderItem`, retorne o `<Appointment />`.

**Escolha Arquitetural (A Pergunta de Ouro):**
- *Argumento de Defesa:* "Professor, optei por usar `<FlatList>` ao invés de `<ScrollView>` porque a lista de partidas pode crescer indefinidamente. O `FlatList` renderiza apenas os itens que estão visíveis na tela do usuário, economizando memória e garantindo que o app não trave, o que é um padrão exigido na indústria mobile."

---

## Verification Plan
### Manual Verification
1. Salve todos os arquivos no seu editor.
2. Olhe para a tela do seu celular no app Expo Go.
3. Verifique se o texto "Partidas agendadas" está colado na esquerda e "Total 6" colado na direita.
4. Role a tela para baixo para confirmar que a `FlatList` está funcionando e mostrando múltiplos blocos (mesmo que vazios por enquanto).
