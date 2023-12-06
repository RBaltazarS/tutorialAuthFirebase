//Navigation
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Pages/Screens
import Login from "./app/screens/Login"
import List from "./app/screens/List";
import Details from "./app/screens/Details";
//Hooks
import { useEffect, useState } from "react";
//Firebase Auth
import { User, onAuthStateChanged } from "firebase/auth";
//Firebase Config
import { FIREBASE_AUTH } from "./FirebaseConfig";


const Stack = createNativeStackNavigator()


export default function App() {

  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user)
    })
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

        {user ? (
          <Stack.Screen name="Todo List" component={List} options={{ headerShown: true }} />
        ) : (
          <Stack.Screen name="Login" component={Login} options={{ headerShown: true }} />
        )}
        <Stack.Screen name="Details" component={Details} options={{ headerShown: true }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

