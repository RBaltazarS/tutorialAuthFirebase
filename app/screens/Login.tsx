//React Native
import { StyleSheet, View, Text, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native'
//Hooks.
import React, { useState } from 'react'
//Fiebase Auth
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
//Firebase Config
import { FIREBASE_AUTH } from '../../FirebaseConfig'

const Login = () => {

  const auth = FIREBASE_AUTH

  //Hooks.
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  //Function SignIn and SignUp.
  const signIn = async () => {
    setLoading(true)
    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      console.log(response)
    } catch (error: any) {
      console.log(error)
      alert("Erro Ao Logar." + error.message)
    } finally {
      setLoading(false)
    }
  }

  const signUp = async () => {
    setLoading(true)
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      console.log(response)
      alert("Verifique Seu Email.")
    } catch (error: any) {
      console.log(error)
      alert("Erro Ao Logar." + error.message)
    } finally {
      setLoading(false)
    }
  }


  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <TextInput style={styles.input}
          placeholder="Email" autoCapitalize="none" value={email} onChangeText={(text) => setEmail(text)}></TextInput>
        <TextInput style={styles.input}
          placeholder="Senha" autoCapitalize="none" secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)}></TextInput>

        {loading
          ?
          (
            <ActivityIndicator size="large" color="#0000FF" />
          )
          :
          (
            <>
              <Button title="Login" onPress={signIn} />
              <View><Text></Text></View>
              <Button title="Criar Conta" onPress={signUp} />
            </>
          )
        }
      </KeyboardAvoidingView>
    </View>
  )
}

export default Login


//Styles.
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center",
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#FFF",
  },
})