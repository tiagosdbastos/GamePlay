## Análise de Componentização
Você levantou uma excelente dúvida arquitetural: **"Precisamos mesmo de um componente separado para o ListHeader e para a Partida?"**

Como seu professor vai te avaliar amanhã, essa é exatamente o tipo de pergunta que ele pode fazer na banca. Vamos analisar os dois casos sob a ótica de um Desenvolvedor Sênior.

> [!IMPORTANT]
> **User Review Required**
> Leia a análise abaixo e decida qual caminho você prefere seguir. Ambas as escolhas estão tecnicamente corretas, mas você precisa saber justificar a que escolher.

---

### 1. O Caso do `Appointment` (Card da Partida)
**Recomendação Sênior:** SIM, é absolutamente necessário ser um componente separado (`src/components/Appointment.tsx`).

* **O Problema:** Uma partida tem imagem, título, categoria, ícone de calendário, data, ícone de usuário e status (Anfitrião/Visitante). O código JSX disso vai passar de 40 linhas facilmente.
* **O Risco:** Se você colocar 40 linhas de código do card diretamente dentro do `renderItem` da `FlatList` na tela `home.tsx`, sua tela Home vai ficar gigantesca (mais de 150 linhas) e ilegível (o famoso código "Spaghetti").
* **O Argumento de Defesa:** "Professor, extraí a partida para o componente `<Appointment />` por causa do princípio de **Single Responsibility** (Responsabilidade Única). A tela Home deve apenas gerenciar a exibição das listas, e não saber como desenhar as bordas e ícones de uma partida específica."

---

### 2. O Caso do `ListHeader` (Partidas Agendadas | Total 6)
**Recomendação Sênior:** É **opcional**, mas recomendado.

* **Opção A (Fazer Inline na Home):** Você escreve o `<View>` com os dois `<Text>` direto no arquivo `home.tsx`.
   * **Argumento de Defesa:** "Optei por não criar um componente separado para evitar *over-engineering* (excesso de engenharia). Como esse cabeçalho específico só aparece na Home, mantê-lo no próprio arquivo simplifica a estrutura de pastas."
* **Opção B (Criar o Componente `ListHeader.tsx`):**
   * **Argumento de Defesa:** "Optei por componentizar porque títulos de sessão com contadores à direita são padrões visuais comuns em apps. Se amanhã o designer criar a tela de 'Jogadores do Servidor' e quiser um cabeçalho igual ('Jogadores' | 'Total 3'), eu já tenho o componente pronto para reutilizar."

---

## Proposed Changes (A sua decisão)
Como estamos focando em boas práticas e modularidade desde o começo (você já componentizou o `Profile` e o `CategorySelect`), a minha sugestão para o plano de ação é: **Manter a criação dos dois componentes**. 

Isso mostra maturidade no código e deixa sua `home.tsx` parecendo uma "receita de bolo" limpa e organizada:

```tsx
// Visão limpa da home.tsx (se componentizarmos tudo)
<SafeAreaView>
  <Profile />
  <CategorySelect />
  <ListHeader title="Partidas agendadas" subtitle="Total 6" />
  <FlatList 
     data={matches}
     renderItem={({ item }) => <Appointment data={item} />}
  />
</SafeAreaView>
```

Se você concorda com a lógica de manter a `home.tsx` super limpa (como no exemplo acima), clique em **Proceed**. Se quiser escrever o ListHeader direto na Home para economizar arquivo, me avise e eu atualizo o escopo!
