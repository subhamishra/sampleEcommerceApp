import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SCREEN_ROUTES } from "./src/Constants/routes";
import { SCREEN_NAMES } from "./src/Constants";
import AppConfigComponent from "./AppConfigComponent";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREEN_NAMES.home}
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}
      >
        {SCREEN_ROUTES.map((route) => {
          const ConfiguredComponent = (props) => {
            return <AppConfigComponent {...props} routeData={route} />;
          };

          return (
            <Stack.Screen
              key={route.key}
              name={route.name}
              component={ConfiguredComponent}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
