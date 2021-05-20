import { auth } from '../../firebase';
import firebase from 'firebase';

import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .firestore()
          .collection('users')
          .doc(firebase.auth().currentUser.uid)
          .set({
            name: name,
            email: email,
          });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <View>
      <TextInput placeholder='name' onChangeText={(name) => setName(name)} />
      <TextInput
        placeholder='email'
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        placeholder='password'
        secureTextEntry='true'
        onChangeText={(password) => setPassword(password)}
      />

      <Button
        title='Sign Up'
        onPress={() => {
          onSignUp();
        }}
      />
    </View>
  );
};

export default Register;
