# Status do Projeto: GamePlay (App de Comunidade de Jogos)

## Progresso Atual e Onde Paramos (Sessão de 22/09)

Iniciamos o projeto do zero usando Expo e focamos na tradução fiel do Figma, preparando a arquitetura de código para a apresentação do dia 23/09.

### O que já foi feito:
- Inicialização do repositório no GitHub.
- Superação dos bloqueios de rede (VLAN isolada) utilizando infraestrutura manual via cabo USB (`adb reverse tcp:8081 tcp:8081` combinado com a flag `--localhost`).
- Desativação do cabeçalho genérico do Expo Router no `src/app/_layout.tsx`.
- **Tela de Login (`index.tsx`):**
  - Implementação completa do esqueleto visual usando Flexbox.
  - Extração e adição da imagem do personagem e botão do Discord com alinhamento e transparência corretos.
- **Tela Home (`home.tsx`):**
  - Quebra arquitetural da tela em múltiplos componentes.
  - Implementação do `Profile.tsx` (cabeçalho) com a lógica de empurrar os elementos para as extremidades (`justifyContent: 'space-between'`).
  - Implementação do `CategorySelect.tsx` (scroll horizontal limpo).
  - Implementação do `Category.tsx` com lógica de repasse de props (`title`, `icon`, `checked`) para renderizar ícones dinâmicos.

### Onde Paramos (Próximos Passos):
O próximo passo lógico a ser desenvolvido em casa é finalizar a construção da metade inferior da Tela Home:
1. Criar o componente `src/components/ListHeader.tsx` (que vai conter "Partidas agendadas" à esquerda e "Total 6" à direita, aplicando Flexbox).
2. Implementar a lista vertical de partidas (Appointments) substituindo o ScrollView genérico pelo componente `<FlatList>` (que é o padrão da indústria para garantir performance em listas longas).

---

## Mini-Guia de Conceitos (Para revisar antes da apresentação)

### 1. React Native Flexbox
- Não existe CSS puro ou arquivos `.css`. Todo estilo é um objeto JavaScript manipulado via `StyleSheet.create`.
- Todas as propriedades são declaradas em `camelCase` (ex: `backgroundColor`, não `background-color`).
- A direção principal do Flexbox no mobile é `column` (empilha de cima para baixo), o inverso da web.
- Para posicionar itens nos extremos opostos de uma mesma linha (como a foto e o botão de adicionar), agrupa-se em `flexDirection: "row"` e usa-se `justifyContent: "space-between"`.

### 2. Infraestrutura Local (Expo)
- O uso do comando `adb reverse tcp:8081 tcp:8081` instrui o Android a buscar os dados do Bundler diretamente pelo cabo USB na porta local do computador, ignorando totalmente a conexão Wi-Fi (útil para redes de faculdade que bloqueiam a comunicação).
- Imagens remotas (vindas de links da internet) exigem obrigatoriamente a declaração de `width` e `height` no estilo, senão o React Native as renderiza com altura zero. Imagens locais com `require` já possuem tamanho intrínseco.
