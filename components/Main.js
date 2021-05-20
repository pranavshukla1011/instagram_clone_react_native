import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import firebase from 'firebase';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../Redux/Action/UserActions';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FeedScreen from './main/Feed';
import CameraScreen from './main/Camera';
import ProfileScreen from './main/Profile';
import SearchScreen from './main/Search';
import NotificationsScreen from './main/Notifications';

const Tab = createBottomTabNavigator();

const Main = () => {
  const { currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (currentUser === null) {
    return (
      <View style={{ flex: '1', justifyContent: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <Tab.Navigator initialRouteName='Feed'>
      <Tab.Screen
        name='Feed'
        component={FeedScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='home'
              color='blue'
              size='26'
            ></MaterialCommunityIcons>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name='Search'
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='magnify'
              color='blue'
              size='26'
            ></MaterialCommunityIcons>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name='Add Photo'
        component={CameraScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='plus-box-outline'
              color='blue'
              size='26'
            ></MaterialCommunityIcons>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name='Notifications'
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='heart-outline'
              color='blue'
              size='26'
            ></MaterialCommunityIcons>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='circle-outline'
              color='blue'
              size='26'
            ></MaterialCommunityIcons>
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default Main;
