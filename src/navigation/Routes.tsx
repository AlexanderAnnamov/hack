import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Airport } from "../pages/Airport";
import { Airports } from "../pages/Airports";
import { Start } from "../pages/Start";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return <Stack.Navigator screenOptions={{
    headerShown: false,
    animationTypeForReplace: 'push'
  }}>
        <Stack.Screen name="Start" component={Start} />
     <Stack.Screen name="Airport" component={Airport} />
     <Stack.Screen name="Airports" component={Airports} />
    
     
    
    </Stack.Navigator>;
};

export default Routes;