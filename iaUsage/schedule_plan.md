## [Goal Description]
Este é o último plano da entrega: A tela **Agendar partida**. O objetivo é demonstrar proficiência em formulários mobile (Scroll e KeyboardAvoidingView) e máximo reaproveitamento de componentes criados anteriormente (`Header` e `CategorySelect`).

## User Review Required
> [!IMPORTANT]
> O professor isentou vocês de fazerem o modal de seleção de servidores. Sendo assim, o botão "Selecione um servidor" será apenas visual. Nosso foco total aqui será na usabilidade do formulário.

---

## Proposed Changes (Código Detalhado)

### A Tela `src/app/schedule.tsx`

Nesta tela não teremos FlatList. Como é um formulário longo que pode ser coberto pelo teclado do celular, a arquitetura base envolverá um `<KeyboardAvoidingView>` e um `<ScrollView>`.

#### 1. Imports Estratégicos
```tsx
import { useState } from 'react';
import { 
  View, Text, StyleSheet, ScrollView, 
  KeyboardAvoidingView, Platform, TextInput, TouchableOpacity 
} from 'react-native';
import Header from '../components/Header';
import CategorySelect from '../components/CategorySelect';
// Se tiver o botão genérico criado, importar aqui
```

#### 2. O Corpo da Tela
```tsx
export default function Schedule() {
  const [category, setCategory] = useState('');

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* 1. Header Reaproveitado! (Sem a prop action, lembra?) */}
        <Header title="Agendar partida" />

        <View style={styles.content}>
          <Text style={styles.label}>Categoria</Text>
          {/* 2. O componente de Categorias Reaproveitado */}
          {/* Você precisará ir no seu CategorySelect e adicionar suporte para hasCheckBox */}
          <CategorySelect />

          {/* 3. Botão Falso de Servidor (Isento pelo professor) */}
          <TouchableOpacity style={styles.serverSelect}>
             <View style={styles.serverImagePlaceholder} />
             <Text style={styles.serverText}>Selecione um servidor</Text>
             <Text style={styles.arrow}>&gt;</Text>
          </TouchableOpacity>

          {/* 4. Inputs Lado a Lado (Flexbox Row) */}
          <View style={styles.field}>
            <View>
              <Text style={styles.label}>Dia e mês</Text>
              <View style={styles.column}>
                <TextInput style={styles.smallInput} keyboardType="numeric" maxLength={2} />
                <Text style={styles.divider}>/</Text>
                <TextInput style={styles.smallInput} keyboardType="numeric" maxLength={2} />
              </View>
            </View>

            <View>
              <Text style={styles.label}>Horário</Text>
              <View style={styles.column}>
                <TextInput style={styles.smallInput} keyboardType="numeric" maxLength={2} />
                <Text style={styles.divider}>:</Text>
                <TextInput style={styles.smallInput} keyboardType="numeric" maxLength={2} />
              </View>
            </View>
          </View>

          {/* 5. Área de Texto */}
          <View style={styles.field}>
            <View style={styles.descriptionHeader}>
              <Text style={styles.label}>Descrição</Text>
              <Text style={styles.caracteresLimit}>Max 100 caracteres</Text>
            </View>
            <TextInput 
              style={styles.textArea} 
              multiline 
              maxLength={100} 
              numberOfLines={5} 
              textAlignVertical="top" 
            />
          </View>

          {/* 6. Botão de Enviar */}
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerButtonText}>Agendar</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
```

#### 3. Os Estilos Base
```tsx
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0D133D' },
  content: { paddingHorizontal: 24, marginTop: 32 },
  label: { color: '#DDE3F0', fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  
  // Botão Falso de Servidor
  serverSelect: { 
    width: '100%', height: 68, flexDirection: 'row', 
    alignItems: 'center', borderColor: '#1D2766', borderWidth: 1, 
    borderRadius: 8, marginTop: 32, paddingRight: 24 
  },
  serverImagePlaceholder: { width: 48, height: 48, backgroundColor: '#1D2766', borderRadius: 8, margin: 10 },
  serverText: { flex: 1, color: '#DDE3F0', fontSize: 15, textAlign: 'center' },
  arrow: { color: '#ABB1CC', fontSize: 18 },

  // Inputs menores de data e hora
  field: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 },
  column: { flexDirection: 'row', alignItems: 'center' },
  smallInput: { width: 48, height: 48, backgroundColor: '#1D2766', borderRadius: 8, color: '#DDE3F0', textAlign: 'center', fontSize: 15 },
  divider: { color: '#ABB1CC', fontSize: 15, marginHorizontal: 4 },

  // Text Area
  descriptionHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  caracteresLimit: { color: '#ABB1CC', fontSize: 13 },
  textArea: { width: '100%', height: 95, backgroundColor: '#1D2766', borderRadius: 8, color: '#DDE3F0', padding: 16, fontSize: 13 },

  // Botão
  footerButton: { width: '100%', height: 56, backgroundColor: '#E51C44', borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginTop: 56, marginBottom: 56 },
  footerButtonText: { color: '#DDE3F0', fontSize: 15, fontWeight: 'bold' }
});
```

## Verification Plan
### Manual Verification
**Argumento de Defesa para a Banca Escolar:**
"Professor, para a tela de Agendamento, a maior preocupação arquitetural foi a **Acessibilidade do Teclado**. Envolvi todo o formulário em um `KeyboardAvoidingView` associado a um `ScrollView`. Isso garante que, ao digitar a descrição no Android ou no iOS, o teclado do sistema operacional não esconda os campos ou o botão de Agendar. Além disso, reciclei 100% da lógica do componente `Header` que criei na tela anterior."
