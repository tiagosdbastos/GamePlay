## [Goal Description]
Documento retroativo detalhando as decisões arquiteturais da construção da **Tela de Login**, o ponto de entrada da aplicação (`src/app/index.tsx`).

## Proposed Changes

A tela de Login foi construída focando em dois elementos primários do React Native: Imagens responsivas e posicionamento absoluto/relativo usando Flexbox.

### `src/app/index.tsx`
A tela é composta por uma imagem de fundo ou banner gigante (o Personagem), um bloco de texto com a chamada para ação (Call to Action), e um botão de Login Social.

**Decisões Arquiteturais:**
1. **Flexbox (Container Principal):** Usou-se `flex: 1` e `alignItems: 'center'` para garantir que o conteúdo fique esticado na tela inteira e os textos centralizados.
2. **Textos em cascata:** As fontes variam de tamanho e peso, criando uma hierarquia visual clara ("Conecte-se e organize suas jogatinas").
3. **Botão de Autenticação (TouchableOpacity):** Estruturado com `flexDirection: 'row'` para manter o ícone do Discord perfeitamente alinhado com o texto "Entrar com Discord".

## Verification Plan
### Manual Verification
**Argumento de Defesa para a Banca Escolar:**
"Professor, a tela de Login é a vitrine do App. O maior desafio técnico aqui foi lidar com as resoluções de diferentes celulares. Por isso, toda a estrutura foi montada utilizando as propriedades relativas do **Flexbox**, garantindo que a imagem principal e os botões de ação nunca quebrem ou saiam da tela, independentemente do aspect-ratio do aparelho (iPhone ou Android)."
