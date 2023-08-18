import React, {useState} from 'react';

import { Text, SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

function CalculoCombustivel(){
  const resultado = km / combustivel;
  alert('O consumo do seu carro é ' + resultado + ' Litros');
}

const [km, setkm] = useState('');
const [combustivel, setcombustivel] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
       Consumo de Combustivel
      </Text>

      <TextInput style={styles.input}
      placeholder="Digite os Km rodados" 
      placeholderTextColor='#fff'
      keyboardType="numeric"
      onChangeText={(km)=>setkm(km)}
      />

      <TextInput style={styles.input}
      placeholder ="Digite a quantidade de combustivel"
      placeholderTextColor='#fff'
      keyboardType="numeric" 
      onChangeText={(combustivel)=>setcombustivel(combustivel)}
      />

      <TouchableOpacity style={styles.btn} onPress={CalculoCombustivel}>
      <Text style={styles.textbtn}> Calcular o Consumo </Text>
      </TouchableOpacity>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 60,
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#FF0000',
    padding: 15,
    borderRadius: 10,
    margin: 15,
    marginTop: 50,
  },
  textbtn: {
    fontSize: 30,
    color: '#fff',
  },
  input: {
    fontSize: 17,
    padding: 20,
    backgroundColor: '#a0c225',
    borderRadius: 10,
    margin: 15,
  }
});
