//React Native
import { View, Button, Text } from 'react-native'
//Navigation
import { NavigationProp } from '@react-navigation/native'

//Interfase TS.
interface RouteProps {
  navigation: NavigationProp<any, any>
}


const Details = ({ navigation }: RouteProps) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Tela De Detalhe Da TODO LIST</Text>
    </View>
    
  )
}

export default Details


//Styles.
