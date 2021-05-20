import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import firebase from 'firebase';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../Redux/Action/UserActions';

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
    <View style={{ flex: '1', justifyContent: 'center' }}>
      <Text>
        {currentUser.name[0].toUpperCase() + currentUser.name.slice(1)} has
        logged in
      </Text>
      <Button
        title='Sign Out'
        onPress={() => {
          firebase.auth().signOut();
        }}
      />
    </View>
  );
};

export default Main;
