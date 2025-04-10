import { SafeAreaView, View, Text, StyleSheet, Pressable, TextInput, Image } from 'react-native'
import { useState } from 'react'

function App () {

  //'count' vai armazenar e exibir o valor definido
  //'setCount' vai alterar o valor da constante chamada 'count'
  const [cpf,setCpf] = useState('')
  const [cpfField, setCpfField] = useState('')
  const [loginCount, setLoginCount] = useState(0);

 function sendCpf() {
    if (cpfField === '000.000.000-00' || cpfField === '111.111.111-11') {
      setCpf(cpfField);
      if (cpfField === '111.111.111-11') {
        setLoginCount((prevCount) => prevCount + 1);
      }
    }
  }

  function clearCpf(){
    setCpf('')
    setCpfField('')
  }

  return (
    <SafeAreaView style={styles.exibicao}>
      {
        cpf == '' &&
        <View>
          <Image style={styles.image} source={require('./assets/homem-cinza.jpeg')} />
        <TextInput 
          placeholder="Insira seu CPF aqui"
          placeholderTextColor= '#999'
          style={styles.input}
          value={cpfField}
          onChangeText={
            (text) => setCpfField(text)
          }
        />

        <Pressable  style={styles.button} onPress={sendCpf}>
          <Text style={styles.text}>Logar</Text>
        </Pressable>
        </View>
      }


      {
        cpf == '000.000.000-00' &&
        <View >
        <Image style={styles.image2} source={require('./assets/homem-laranja.jpeg')} />
          <Text>
          Usuario Logado com o CPF: 000.000.000-00
          </Text>
           <Pressable style={styles.button} onPress={clearCpf}>
           <Text style={styles.text}>Pressione o botão para sair</Text>
           </Pressable>
         </View>
      }

      {cpf === '111.111.111-11' && (
        <View>
          <Text>Bem-vindo, usuário especial!</Text>
          <Text>Você fez login {loginCount} vezes.</Text>
          <Pressable style={styles.button} onPress={clearCpf}>
            <Text style={styles.text}>Sair</Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  exibicao: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    width: '80%'
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
  input: {
    backgroundColor: 'lightgray',
    borderRadius: 4,
    width: 200,
    height: 30,
    borderWidth: 2,
  },
  image:{
    width:200,
    height:320
  },
  image2:{
    width:220,
    height:200
  },

  button:{
    backgroundColor: 'black',
        fontSize: '12px',
        padding: '8px 12px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
  }
})

export default App