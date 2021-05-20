import { auth } from './firebase';
import store from './store';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';
import LoginScreen from './components/auth/Login';

import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';

const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        setLoggedIn(false);
        setLoading(false);
      } else {
        setLoggedIn(true);
        setLoading(false);
      }
    });
  }, []);

  console.log(loading);
  if (loading) {
    return (
      <View>
        <Text>Loading....</Text>
      </View>
    );
  } else {
    if (!loggedIn) {
      return (
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName='landing'>
              <Stack.Screen
                name='Landing'
                component={LandingScreen}
                options={{ headerShown: false }}
              ></Stack.Screen>
              <Stack.Screen name='Register' component={RegisterScreen} />
              <Stack.Screen name='Login' component={LoginScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      );
    } else {
      return (
        <View>
          <Text>User is Logged in</Text>
          <Button
            title='Logout'
            onPress={() => {
              auth.signOut();
            }}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
