## [Goal Description]
Este plano detalha a arquitetura das próximas telas exigidas para a apresentação escolar: **Detalhes do Servidor** e **Agendar - Servidor selecionado**. O objetivo é preparar o terreno mostrando o uso consciente de IA para decisões arquiteturais.

## User Review Required
> [!IMPORTANT]
> Avalie este plano estrutural. Ao aprovar, ele será automaticamente salvo na pasta `iaUsage/` do projeto, conforme solicitado pelo professor para prestação de contas do uso de IA.

## Proposed Changes

### 1. Tela: Detalhes do Servidor
Esta tela exibe as informações detalhadas de uma partida clicada na Home (ex: Banner, Título, Descrição, e Lista de Jogadores).

#### [NEW] `src/app/server-details.tsx`
- **Estrutura Base:** `SafeAreaView` para respeitar os entalhes do celular.
- **Cabeçalho Reutilizado:** Criação de um componente `<Header title="Detalhes" />` que possui o botão de voltar.
- **Banner Principal:** Um `<ImageBackground>` que contém a logo do jogo expandida, com um overlay escuro (opacidade) para o texto (nome do servidor) ficar legível.
- **Listagem de Jogadores:** Usaremos novamente o `<FlatList>` (reforçando o argumento de performance) para listar os membros conectados (com um componente `<PlayerCard />`).

### 2. Tela: Agendar
A tela de criação/agendamento de uma nova partida.

#### [NEW] `src/app/schedule.tsx`
- **Navegação:** O componente `<Header title="Agendar partida" />` será reutilizado aqui (princípio DRY - Don't Repeat Yourself).
- **Formulário:**
  - `CategorySelect`: Vamos **reutilizar** o mesmo componente de categorias criado na Home. A diferença é que passaremos uma propriedade `hasCheckBox={true}` para ele permitir a seleção ativa.
  - Inputs para "Dia e Mês", "Horário", e "Descrição".
- **Comportamento:** O teclado do celular muitas vezes cobre os inputs. Por isso, toda a tela de agendamento deve ser envolvida em um componente `<KeyboardAvoidingView>` (argumento técnico de UX/UI clássico em React Native).

## Verification Plan
### Manual Verification
- O professor avaliará a coesão entre as telas.
- Será questionado o porquê do reuso do `CategorySelect` (Resposta: "Para evitar duplicação de código e manter a consistência visual em todo o app").
- O uso de `<KeyboardAvoidingView>` será um diferencial técnico na banca.
