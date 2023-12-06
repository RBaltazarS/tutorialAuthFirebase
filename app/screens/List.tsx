
//React Native
import { View, Text, Button } from 'react-native'
//Firebase Config
import { FIREBASE_AUTH } from '../../FirebaseConfig'
//Navigation
import { NavigationProp } from '@react-navigation/native'


//Interfase TS.
interface RouteProps {
  navigation: NavigationProp<any, any>
}


const List = ({ navigation }: RouteProps) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button onPress={() => navigation.navigate("Details")} title="Lista de Tarefas TODO LIST" />
      <View><Text></Text></View>
      <Button onPress={() => FIREBASE_AUTH.signOut()} title="Deslogar" />
    </View>
  )
}

export default List


//Styles.
