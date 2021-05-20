import { auth } from '../../firebase';
import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { useAuthState } from 'react-firebase-hooks/auth';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignUp = () => {
    auth.signInWithEmailAndPassword(email, password).catch((err) => {
      console.log(err.message);
    });
  };

  return (
    <View>
      {/* <TextInput placeholder='name' onChangeText={(name) => setName(name)} /> */}
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
        title='Sign In'
        onPress={() => {
          onSignUp();
        }}
      />
    </View>
  );
};

export default Login;
