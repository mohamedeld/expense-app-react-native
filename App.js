import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/styles';
import Ionicons from "@expo/vector-icons/Ionicons";
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview(){
  return (
    <BottomTabs.Navigator screenOptions={{
      headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
      headerTintColor:'white',
      tabBarStyle:{backgroundColor:GlobalStyles.colors.primary500},
      tabBarActiveTintColor:GlobalStyles.colors.accent500
    }}>
      <BottomTabs.Screen name="RecentExpenes" component={RecentExpenses} options={{
        title:"Recent Expenses",
        tabBarLabel:'Recent',
        tabBarIcon:({color,size})=>{
          return(
            <Ionicons name="hourglass" color={color} size={size}/>
          )
        }
      }}/>
      <BottomTabs.Screen name="AllExpenses" component={AllExpenses} options={{
        title:"All Expenses",
        tabBarLabel:'All',
        tabBarIcon:({color,size})=>{
          return(
            <Ionicons name="calendar" color={color} size={size}/>
          )
        }
      }}/>
    </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <>
    <StatusBar style="light" />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="expensesoverview" component={ExpensesOverview} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="ManageExpenses" component={ManageExpenses}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
    
  );
}

const styles = StyleSheet.create({
 
});
