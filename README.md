# GamePlay - NLW Together (Clone) 🎮

Aplicativo mobile construído com **React Native** e **Expo** com foco em agendamento de partidas e conexão entre jogadores. Este projeto foi desenvolvido como escopo de avaliação acadêmica/escolar, reproduzindo fielmente um protótipo de alta fidelidade do Figma.

---

## 📱 Telas Desenvolvidas (Escopo da Entrega)
1. **Login:** Ponto de entrada com Layout em Flexbox relativo, garantindo responsividade de telas.
2. **Home:** Tela principal listando agendamentos, utilizando `FlatList` para alta performance e `ListHeader` modularizado.
3. **Detalhes do Servidor:** Tela de visualização de jogadores, com uso de `ImageBackground` nativo e reutilização do `Header`.
4. **Agendar Servidor:** Formulário de marcação, aplicando controle de estado (`useState`) para seleção de categorias e `KeyboardAvoidingView` para acessibilidade de teclado.

---

## 🤖 Uso de Inteligência Artificial e Papéis

De acordo com as diretrizes da avaliação, a Inteligência Artificial (Google Antigravity/Gemini) foi utilizada de forma intensiva, mas **não autônoma**. A IA assumiu o papel de "Arquiteto de Software Sênior" e Mentor Técnico (Pair Programming).

### O Papel do Desenvolvedor (Tiago Bastos):
- **Setup e Infraestrutura:** Resolução de bloqueios de rede da faculdade conectando o Expo via cabo USB e ADB Localhost manualmente.
- **Design e Estrutura Inicial:** Construção da tela de Login, layout inicial do componente Profile e estilização base de UI.
- **Orquestração e Decisão Arquitetural:** A IA era proibida de injetar códigos sem aprovação prévia. Eu gerava as demandas (Prompt Engineering), exigia "Planos Arquiteturais", revisava os códigos sugeridos e então tomava a decisão de aprovar, modificar ou descartar o código.
- **Debugging:** Identificação e resolução de problemas técnicos específicos do React Native, como o crash do Metro Bundler ao tentar resolver caminhos dinâmicos dentro do `require()` de imagens.

### O Papel da Inteligência Artificial:
- **Planejamento:** Todos os "Blueprints" de código gerados pela IA antes da execução estão registrados e disponíveis na pasta `/iaUsage`.
- **Refatoração Estrutural (Flexbox):** Ensino socrático e aplicação de técnicas avançadas de Flexbox (ex: uso do `space-between` no Header e `justify-content: flex-end` para ancorar textos sobre imagens).
- **Otimização:** Sugestões aplicadas para trocar componentes básicos por versões de alta performance (ex: Troca de `ScrollView` e `.map` por `<FlatList>` para garantir *Lazy Loading*).
- **Auditoria:** Revisão do código para checar vazamento de memória e boas práticas do `Expo Router`.

---

## 🚀 Tecnologias Utilizadas
- **React Native** (Framework principal)
- **Expo** (Toolchain)
- **Expo Router** (Navegação baseada em arquivos - *File-based routing*)
- **TypeScript** (Tipagem forte)

## 💻 Como Rodar o Projeto

1. Clone o repositório.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor do Expo:
   ```bash
   npx expo start
   ```
4. Abra o aplicativo lendo o QR Code pelo aplicativo `Expo Go` no seu celular ou utilize um emulador (Android Studio/XCode).

---
*Projeto desenvolvido por Tiago Bastos.*
