import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import UserEmailPresenter from '../presenter/UserEmailPresenter';

const EmailScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [presenter, setPresenter] = useState(null);

  useEffect(() => {
    const userEmailPresenter = new UserEmailPresenter(navigation);
    setPresenter(userEmailPresenter);
  }, [navigation]);

  const handleEmailSubmit = () => {
    if (!email.trim()) {
      Alert.alert('Email Required', 'Please enter your email.');
      return;
    }

    if (!/^[a-z]/.test(email)) {
      Alert.alert('Invalid Email', 'Email must start with a lowercase letter.');
      return;
    }

    if (!/@/.test(email) || !/\./.test(email)) {
      Alert.alert('Invalid Email', 'Email must contain "@" and ".".');
      return;
    }

    presenter.handleEmailSubmit(email);
  };

  if (!presenter) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please provide your Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button
        title="→"
        onPress={handleEmailSubmit}
      />
      <Text style={styles.disclaimer}>
        Your email will strictly be used for your future group members to contact you and no other purposes
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#84b5f0',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: '80%',
    marginBottom: 20,
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
  },
  disclaimer: {
    fontSize: 14,
    color: 'white',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default EmailScreen;
