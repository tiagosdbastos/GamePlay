## [Goal Description]
A próxima tela do fluxo é **Detalhes do Servidor**. Este plano detalha a arquitetura dessa tela com base no arquivo `refs/DetalhesServidor.png`. O foco aqui será a **reusabilidade de componentes**, o que é um ponto altíssimo para a sua avaliação.

## User Review Required
> [!IMPORTANT]
> O professor verá que você não copiou e colou código repetido. Nós vamos criar componentes genéricos que servirão tanto para esta tela quanto para a próxima (Agendar). Revise a estrutura antes de codar.

## Proposed Changes / Estrutura da Tela

Olhando para o design do Figma, a tela se divide em 5 blocos. Vamos planejar cada um:

### 1. O Cabeçalho (Header)
Temos um botão de voltar na esquerda, um título "Detalhes" no centro, e um ícone de compartilhar na direita.
#### [NEW] `src/components/Header.tsx`
**Arquitetura:** Esse cabeçalho vai se repetir na tela "Agendar" (apenas sem o botão de compartilhar). Portanto, vamos extraí-lo para um componente.
**Props:** `{ title: string; action?: ReactNode }` (o `action` é opcional, para colocarmos o ícone de compartilhar).
**Flexbox:** `flexDirection: 'row'`, `justifyContent: 'space-between'`, `alignItems: 'center'`.

### 2. O Banner Principal (ImageBackground)
A imagem do jogo (ex: League of Legends) ocupa o fundo, e os textos ficam sobrepostos nela.
#### [NEW] Componente Inline na Tela `details.tsx`
- Vamos usar o componente nativo `<ImageBackground>` do React Native.
- Dentro dele, colocaremos os textos (Título e Descrição) ancorados na parte de baixo usando `justifyContent: 'flex-end'`.
- *Argumento de Defesa:* "Utilizei o `<ImageBackground>` porque ele atua como uma `<View>`, permitindo colocar elementos filhos (textos) sobre a imagem sem precisar usar z-index complexo ou posicionamento absoluto."

### 3. O Título da Lista (Reuso!)
"Jogadores" na esquerda, "Total 3" na direita.
#### [MODIFY] Componente Existente
Vamos apenas reutilizar o componente que já fizemos!
`<ListHeader title="Jogadores" subtitle="Total 3" />`

### 4. A Lista de Jogadores (Member)
Cada item tem um Avatar na esquerda, Nome, e Status (bolinha verde ou vermelha + texto).
#### [NEW] `src/components/Member.tsx`
**Arquitetura:** Muito parecido com o `Appointment`, mas mais simples. 
- Um componente que recebe as props do jogador.
- Se o status for "online", a bolinha é verde (`#32BD50`), se for "offline", é vermelha (`#E51C44`).
- Listaremos os membros usando outra `<FlatList>` (novamente o argumento da performance).

### 5. O Botão Fixo (Footer)
O botão "Entrar na partida" do Discord colado na parte de baixo.
#### [MODIFY] Tela `details.tsx`
- Basta colocar o componente do Botão após a `<FlatList>`.
- Dica: Para o botão não ficar "esmagado" na borda inferior do celular, precisaremos colocar um espaçamento no fundo ou usar o `SafeAreaView` com cuidado.

## Verification Plan
### Manual Verification
**Argumento de Defesa Geral:**
"Professor, a tela de Detalhes do Servidor é a prova da componentização do projeto. Ao invés de reescrever o cabeçalho da lista de jogadores, reutilizei o `<ListHeader>` da Home. Além disso, isolei o topo da tela em um componente `<Header>` reaproveitável, que também será usado na tela de Agendamento, garantindo escalabilidade no código."
