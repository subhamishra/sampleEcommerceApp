import React, { Component } from 'react';
import {
    NavigationContainer
} from '@react-navigation/native';
import {
    createStackNavigator
} from '@react-navigation/stack';
import { SCREEN_ROUTES } from './src/Constants/routes';

const Stack = createStackNavigator();

const App = () => {
    return (
        <View
        style={{flex: 1}}
       >
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator
            initialRouteName={initialRoute.name}
            screenOptions={{
              headerShown: false,
              animationEnabled: false,
            }}>
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
      </View>
    );
}
export default App;