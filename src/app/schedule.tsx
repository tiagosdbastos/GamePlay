import React, { useState } from 'react';
import { 
  View, Text, StyleSheet, ScrollView, 
  KeyboardAvoidingView, Platform, TextInput, TouchableOpacity 
} from 'react-native';
import Header from '../components/Header';
import CategorySelect from '../components/CategorySelect';

export default function Schedule() {
  const [category, setCategory] = useState('');

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title="Agendar partida" />

        <View style={styles.content}>
          <Text style={styles.label}>Categoria</Text>
          
          <CategorySelect 
            categorySelected={category}
            setCategory={setCategory}
            hasCheckBox={true}
          />

          <TouchableOpacity style={styles.serverSelect} activeOpacity={0.7}>
             <View style={styles.serverImagePlaceholder} />
             <Text style={styles.serverText}>Selecione um servidor</Text>
             <Text style={styles.arrow}>&gt;</Text>
          </TouchableOpacity>

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

          <View style={[styles.field, { flexDirection: 'column' }]}>
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

          <TouchableOpacity style={styles.footerButton} activeOpacity={0.7}>
            <Text style={styles.footerButtonText}>Agendar</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0D133D' },
  content: { marginTop: 32 },
  label: { color: '#DDE3F0', fontSize: 18, fontWeight: 'bold', marginBottom: 12, paddingHorizontal: 24 },
  
  serverSelect: { 
    height: 68, flexDirection: 'row', 
    alignItems: 'center', borderColor: '#1D2766', borderWidth: 1, 
    borderRadius: 8, marginTop: 32, paddingRight: 24, marginHorizontal: 24
  },
  serverImagePlaceholder: { width: 48, height: 48, backgroundColor: '#1D2766', borderRadius: 8, margin: 10 },
  serverText: { flex: 1, color: '#DDE3F0', fontSize: 15, textAlign: 'center' },
  arrow: { color: '#ABB1CC', fontSize: 18 },

  field: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, paddingHorizontal: 24 },
  column: { flexDirection: 'row', alignItems: 'center' },
  smallInput: { width: 48, height: 48, backgroundColor: '#1D2766', borderRadius: 8, color: '#DDE3F0', textAlign: 'center', fontSize: 15 },
  divider: { color: '#ABB1CC', fontSize: 15, marginHorizontal: 4 },

  descriptionHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  caracteresLimit: { color: '#ABB1CC', fontSize: 13 },
  textArea: { width: '100%', height: 95, backgroundColor: '#1D2766', borderRadius: 8, color: '#DDE3F0', padding: 16, fontSize: 13, marginTop: 12 },

  footerButton: { height: 56, backgroundColor: '#E51C44', borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginTop: 56, marginBottom: 56, marginHorizontal: 24 },
  footerButtonText: { color: '#DDE3F0', fontSize: 15, fontWeight: 'bold' }
});
