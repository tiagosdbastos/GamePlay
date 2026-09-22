## [Goal Description]
Este documento analisa os estilos CSS gerados automaticamente pelo Figma e propõe a adaptação correta para o ambiente mobile (React Native usando Flexbox).

## User Review Required
> [!WARNING]
> Nunca copie e cole propriedades como `top` ou `left` com valores altos (como `top: 304px`) do Figma direto para o React Native. Entenda o porquê na seção abaixo.

## Proposed Changes

### O Problema do Código do Figma
O código que você encontrou no Figma é este:
```css
width: 150;
height: 23;
top: 304px;
left: 24px;
```

O Figma desenha componentes de forma **Absoluta** em um quadro fixo. Ele diz: "Coloque o texto exatamente a 304 pixels de distância do topo da tela do iPhone". 
Se você fizer isso no código, em um iPhone grande vai ficar bom, mas em um Android pequeno de tela curta, `304px` pode ser mais da metade da tela, "engolindo" as categorias que vêm antes dele. 

### A Solução no React Native (Flexbox)
No mobile, usamos o fluxo de layout **Relativo** (empilhando itens de cima para baixo). 

Como traduzimos os valores do Figma para Flexbox?
1. **`left: 24px` -> `paddingHorizontal: 24`**: O Figma diz que o item está a 24px da borda esquerda. Nós traduzimos isso aplicando um espaçamento interno na nossa `<View>` pai, para que *tudo* dentro dela desgrude 24 pixels das laterais da tela de forma fluida. (Note que já fizemos isso no `Profile`).
2. **`top: 304px` -> `marginTop: 24` ou similar**: Nós não usamos a distância até o topo da tela. Nós olhamos a distância entre o "Partidas agendadas" e o elemento que está logo acima dele (as categorias). Apenas empurramos ele um pouco para baixo usando a margem.
3. **`width: 150; height: 23` -> Não usar (Geralmente)**: Para textos, o React Native calcula o tamanho automaticamente baseado no `fontSize` e no tamanho da string. Fixar a largura em `150` pode fazer com que o texto seja cortado se o usuário do celular tiver a fonte configurada como "Muito Grande" nas configurações de acessibilidade do aparelho.

### A Estrutura Correta (`src/components/ListHeader.tsx`)
Veja como aplicamos os conceitos sem usar `top` e `left` diretos:

```tsx
const styles = StyleSheet.create({
  container: {
    width: "100%", 
    flexDirection: "row", 
    justifyContent: "space-between", // Empurra para as laterais
    paddingHorizontal: 24, // Tradução do "left: 24px" do Figma
    marginTop: 40, // Distância relativa do item de cima
  },
  title: {
    color: "#FFFFFF",
    fontSize: 18, // O height de 23px do figma vira o fontSize e o line-height combinados
    fontWeight: "bold",
  },
});
```

## Verification Plan
### Manual Verification
**Argumento de Defesa para a Banca Escolar:**
"Professor, ao invés de copiar os valores absolutos de `top` e `left` fornecidos pela aba de código do Figma, fiz a tradução para Flexbox utilizando margens e paddings relativos (`paddingHorizontal: 24`). Isso foi essencial para garantir que o app não "quebre" caso seja aberto em um celular com tela menor do que a projetada no design original."
